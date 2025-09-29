"use client";

import InputSearchUser from "../../components/inputsearchuser/InputSearchUser";
import CardUser from "../../components/carduser/CardUser";
import { useState, useEffect } from "react";
import { useUserStore, User } from "../store/user";
import { BeatLoader } from "react-spinners";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const { addFavorite, favorites } = useUserStore();
  const [errorMessage, setErrorMessage] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL_KEY;
  const token = process.env.NEXT_PUBLIC_GIT_HUB_TOKEN;

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const res = await fetch(`${apiUrl + query}`, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        if (!res.ok) {
          setResults([]);
          setErrorMessage("Usuário não encontrado");
          return;
        }

        const data = await res.json();

        setErrorMessage(" ");
        const users: User = { ...data, favorite: false };
        setResults([users]);
      } catch (error) {
        setResults([]);
        setErrorMessage("Erro ao buscar usuário");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="w-[100vw] h-[calc(100vh-72px)] flex items-center flex-col  font-noto">
      <InputSearchUser
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (!e.target.value) setErrorMessage("");
        }}
      />

      <BeatLoader color="#9FC9F9" size={42} loading={loading} />
      {!loading && errorMessage && <p>{errorMessage}</p>}

      <div className="w-[60%] flex gap-4 flex-col items-center ">
        {results.map((user) => {
          const isFavorite = favorites.some((fav) => fav.id === user.id);
          return (
            <CardUser
              key={user.id}
              id={user.id}
              avatar={user.avatar_url}
              login={user.login}
              name={user.name}
              bio={user.bio}
            >
              <button
                onClick={() => {
                  addFavorite(user);
                }}
                className="w-[82px] h-7 bg-[#21262D] flex flex-row items-center gap-1 py-1 px-2 cursor-pointer rounded-md border-[1px] border-[#363B42]"
              >
                <img
                  src={
                    isFavorite
                      ? "../../assests/starActive.svg"
                      : "../../assests/star.png"
                  }
                  className="w-[12px] h-[12px]"
                />

                <p className="font-medium font-noto  text-xs ">Favoritar</p>
              </button>
            </CardUser>
          );
        })}
      </div>
    </div>
  );
}

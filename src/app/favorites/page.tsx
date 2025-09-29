"use client"
import CardUser from "../../../components/carduser/CardUser";
import DialogFavorite from "../../../components/dialogfavorite/DialogFavorite";
import { useUserStore, User } from "../../store/user";


const FavoritesPage = () => {
  const { favorites} = useUserStore();
  

  return (
    <div className="w-[100vw] flex justify-center xl:py-10 xl:px-16 max-md:px-4 max-md:py-6">
      <div className="xl:w-[60%] mad-md:w-full flex gap-12 flex-col text-[20px] font-noto font-[600] justify-center ">
        <h1>Usuários Favoritados</h1>
     
        <div className="w-100% h-auto flex flex-col justify-center gap-6 overflow-x-hidden ">
            {favorites.map((user : User) => {
              return (
                <CardUser
                  key={user.id}
                  id = {user.id}
                  avatar={user.avatar_url}
                  login={user.login}
                  name={user.name}
                  bio={user.bio}
                >
                  <DialogFavorite userId={user.id}/>
                </CardUser>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;

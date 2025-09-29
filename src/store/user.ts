
import { create } from 'zustand'
import { persist } from "zustand/middleware"

export interface User {
  id: number;
  login: string;
  name: string
  avatar_url: string;
  bio: string
  favorite: boolean
}

interface UserStore {
  favorites: User[];
  addFavorite: (user: User) => void;
  removeFavorite: (id: number) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (user) =>
        set((state) => ({
          favorites: [
            ...state.favorites.filter((favUser) => favUser.id !== user.id),
            { ...user, favorite: true },
          ],
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((favUser) => favUser.id !== id),
        })),
    }),
    {
      name: "favorites",
    }
  )
)
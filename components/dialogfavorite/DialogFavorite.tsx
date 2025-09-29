"use client";
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../ui/dialog";

import { useUserStore } from "../../src/store/user";
import { useState } from "react";
import { toast } from "sonner";

type DialogProps = {
  userId: number;
};

const DialogFavorite = (props: DialogProps) => {
  const { userId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { removeFavorite } = useUserStore();

  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger
          className="w-[140px] h-7 bg-[#21262D] flex flex-row items-center gap-1  py-1 px-2 cursor-pointer rounded-md border-[1px] border-[#363B42]"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img
            src={"../../assests/starActive.svg"}
            className="w-[12px] h-[12px]"
          />

          <p className="font-medium font-noto text-xs ">Remover favoritos</p>
        </DialogTrigger>

        <DialogContent
          className="bg-[#21262D] xl:w-[580px] max-w-none  xl:h-[234px] border-[1px] border-[#21262D] flex flex-col items-center justify-center gap-4 p-6 max-md:w-[80vw] max-md:h-[35vh] max-md:rounded-lg"
        >
          <DialogHeader className="flex items-center font-no">
            <DialogTitle className="text-[20px] font-semibold">
              Remover dos favoritos
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-[16px] font-normal w-[100%] flex justify-center max-md:text-center">
            Tem certeza que deseja remover este usuário dos seus favoritos?
          </DialogDescription>
          <div className="flex gap-2 max-md:flex-col-reverse ">
            <DialogClose className="border-[1.5px] border-[#4988D1] xl:w-[176px] h-[48px] rounded-[8px] cursor-pointer max-md:w-[70vw]">
              <p className="font-noto">Voltar</p>
            </DialogClose>
            <DialogClose asChild>
              <button
                onClick={() => {
                  toast("Usuário removido dos favoritos.", {
                    style: {
                      background: "#C1D7F0",
                      color: "#353535", 
                      fontSize: "16px",
                      border: "1px solid #4988D1",
                      borderRadius: "8px",
                      padding: "16px",
                      width: "291px",
                      height: "56px",
                    },
                    duration: 3000,
                  });
                  removeFavorite(userId);
                  setIsOpen(false);
                }}
                className="bg-[#4988D1] xl:w-[176px] h-[48px] rounded-[8px] cursor-pointer max-md:w-[70vw]"
              >
                <p className="font-bold"> Confirmar ação</p>
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog.Root>
    </>
  );
};

export default DialogFavorite;

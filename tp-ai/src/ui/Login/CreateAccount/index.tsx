"use client";

import Button from "@/ui/MicroComponents/Button";
import { useState } from "react";
import SocialLogin from "../SocialLogin";

type CreateAccountProps = {
  openCreateAccount: boolean;
  setOpenCreateAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateAccount({
  openCreateAccount,
  setOpenCreateAccount,
}: CreateAccountProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      onClick={() => {
        if (!openCreateAccount) setOpenCreateAccount(!openCreateAccount);
      }}
      className={`${
        openCreateAccount ? "w-full" : "w-fit"
      } flex flex-col gap-4 px-2 py-1 text-blue-300 justify-center border cursor-pointer
       border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30`}
    >
      Criar conta
      <form className={`${openCreateAccount ? "" : "hidden"}`}>
        <label className="flex flex-col gap-1">
          <span className="text-gray-300">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-300">Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30"
          />
        </label>
        <button
          type="submit"
          className="flex w-fit px-2 py-1 text-green-300 justify-center border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

import { useState } from "react";
import Button from "../MicroComponents/Button";
import CreateAccount from "./CreateAccount";
import SocialLogin from "./SocialLogin";

type LoginProps = {
  openLogin: boolean;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Login({ openLogin, setOpenLogin }: LoginProps) {
  const [openCreateAccount, setOpenCreateAccount] = useState(false);
  return (
    <section
      className={`${
        openLogin ? `` : `fixed translate-x-96 top-0 right-0`
      } flex flex-col md:w-96 h-screen bg-gray-900 p-4 gap-4 transition-all overflow-hidden`}
    >
      <div className={`w-full flex justify-between mb-6 items-center`}>
        Login
        <Button
          onClick={() => setOpenLogin(false)}
          className="flex w-fit px-2 py-1 text-red-300 justify-center border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30"
        >
          Fechar
        </Button>
      </div>
      <form className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-gray-300">Email</span>
          <input
            type="email"
            className="border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-300">Senha</span>
          <input
            type="password"
            className="border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30"
          />
        </label>
        <button
          type="submit"
          className="flex w-fit px-2 py-1 text-green-300 justify-center border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30"
        >
          Entrar
        </button>
        <SocialLogin />
      </form>
      <div className="flex flex-col gap-4">
        <CreateAccount
          openCreateAccount={openCreateAccount}
          setOpenCreateAccount={setOpenCreateAccount}
        />
        <Button
          className="flex w-fit px-2 py-1 text-blue-300 justify-center border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30"
          onClick={() => console.log("Esqueci a senha")}
        >
          Esqueci a senha
        </Button>
      </div>
    </section>
  );
}

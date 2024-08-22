"use client";

import Login from "@/ui/Login";
import LoginButton from "@/ui/Login/LoginButton";
import Main from "@/ui/Main";
import Button from "@/ui/OptionButton";
import SideBar from "@/ui/SideBar";
import Link from "next/link";
import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="flex overflow-hidden">
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <Main className={openSideBar ? "" : ""}>
        <div className="flex justify-between w-full">
          <section className="w-full gap-4 flex">
            <Button
              title="Personalidade"
              value={openSideBar}
              setValue={setOpenSideBar}
            />

            <Link
              href="/leitura"
              className="
            font-mono text-sm cursor-pointer
            flex w-fit px-3 py-2 justify-center items-center border 
            border-gray-300 rounded-xl
            bg-opacity-30 bg-gray-500"
            >
              Leitura
            </Link>
            <Link
              href="/criacao"
              className="
            font-mono text-sm cursor-pointer
            flex w-fit px-3 py-2 justify-center items-center border 
            border-gray-300 rounded-xl
            bg-opacity-30 bg-gray-500"
            >
              Criação
            </Link>
          </section>
          <section className="flex">
            <LoginButton openLogin={openLogin} setOpenLogin={setOpenLogin} />
          </section>
        </div>
        {children}
      </Main>
      <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />
    </div>
  );
}

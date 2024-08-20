'use client';
import Header from "@/ui/Header";
import Main from "@/ui/Main";
import OptionButton from "@/ui/OptionButton";
import SideBar from "@/ui/SideBar";
import TextInput from "@/ui/TextInput";
import TextOutput from "@/ui/TextOutput";
import { useState } from "react";


export default function Home() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="flex">
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <Main className={``}>
        <section>
          <OptionButton
            openSideBar={openSideBar}
            setOpenSideBar={setOpenSideBar}
          />
        </section>
        <TextOutput />
        <TextInput />
      </Main>
    </div>
  );
}

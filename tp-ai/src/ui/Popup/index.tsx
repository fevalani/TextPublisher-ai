"use client";

import { use, useEffect, useState } from "react";

type PopupProps = {
  title: string;
  value: boolean;
  setValue: (open: boolean) => void;
};

export default function Popup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, [open]);

  return (
    <button
      className={`${
        open ? "top-0" : "-top-44"
      } fixed w-10/12 bg-white h-32 mt-10 rounded-3xl transition-all duration-500`}
    >
      <p className="text-black">Ative</p>
    </button>
  );
}

type OptionButtonProps = {
  openSideBar: boolean;
  setOpenSideBar: (open: boolean) => void;
}

export default function OptionButton({openSideBar, setOpenSideBar}: OptionButtonProps) {
    return (
        <button className="font-mono text-sm cursor-pointer" onClick={()=>setOpenSideBar(!openSideBar)}>
          <p className="flex w-fit px-3 py-2 justify-center border border-gray-300 rounded-xl 
            dark:border-neutral-800 dark:bg-zinc-800/30">
            Opções
          </p>
        </button>
    );
}
type SideBarProps = {
  openSideBar: boolean;
  setOpenSideBar: (open: boolean) => void;
}

export default function SideBar({openSideBar, setOpenSideBar}: SideBarProps) {
    return (
        <section className={`${openSideBar ? `block`:`absolute -translate-x-96`} w-96 h-screen bg-gray-900 p-6 transition-all`}>
          Menu de opções
          <button onClick={() => setOpenSideBar(false)}>Fechar</button>
        </section>
    );
}
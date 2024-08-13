

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative 
      justify-start p-24 gap-8 before:absolute before:h-[300px] 
      before:w-full before:-translate-x-1/2 before:rounded-full 
      before:bg-gradient-radial before:from-white before:to-transparent 
      before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] 
      after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 
      after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br 
      before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10
      after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 
      sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
      >
      <button className="font-mono text-sm">
        <p className="flex w-fit px-3 py-2 justify-center border border-gray-300 rounded-xl 
          dark:border-neutral-800 dark:bg-zinc-800/30">
          Opções
        </p>
      </button>

      <div className="flex flex-col overflow-hidden h-20 gap-10 min-h-[500px] rounded-xl p-4 items-start justify-end w-full max-w-5xl bg-zinc-800/30">
        <p className="text-lg">Vamos começar...</p>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem tempora aliquid explicabo. Magni fugiat asperiores quod illum? Id dolor eveniet autem placeat quia ea doloribus. Ratione itaque qui eius!</p>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem tempora aliquid explicabo. Magni fugiat asperiores quod illum? Id dolor eveniet autem placeat quia ea doloribus. Ratione itaque qui eius!</p>
      </div>

      <form className="absolute bottom-8 md:bottom-24 w-full max-w-5xl p-4 flex flex-col gap-4
          border border-gray-300 rounded-xl 
          dark:border-neutral-800 dark:bg-zinc-800/30">
            <input
                className="w-full h-full text-start px-4 py-2 bg-black bg-opacity-0 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-300"
                type="text"
                placeholder="Insira o texto que você deseja analisar"
            />
            <button className="font-mono text-sm">
              <p className="flex w-fit px-3 py-2 justify-center border border-gray-300 rounded-xl 
                dark:border-neutral-800 dark:bg-zinc-800/30">
                Iniciar
              </p>
            </button>
        </form>
    </main>
  );
}

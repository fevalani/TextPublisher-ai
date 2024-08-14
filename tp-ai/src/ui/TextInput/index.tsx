export default function TextInput() {
    return (
    <form className="bottom-8 md:bottom-24 w-full p-4 flex flex-col gap-4
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
    );
}
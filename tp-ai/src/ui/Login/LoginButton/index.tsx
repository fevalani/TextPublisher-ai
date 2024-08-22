type LoginProps = {
  openLogin: boolean;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginButton({ openLogin, setOpenLogin }: LoginProps) {
  return (
    <div
      onClick={() => setOpenLogin(!openLogin)}
      className="
        font-mono text-sm cursor-pointer
        flex w-fit px-3 py-2 justify-center border 
        border-gray-300 rounded-xl
        bg-opacity-30 bg-gray-500
        "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-user"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
    </div>
  );
}

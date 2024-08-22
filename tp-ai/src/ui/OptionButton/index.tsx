type OptionButtonButtonProps = {
  title: string;
  value: boolean;
  setValue: (open: boolean) => void;
};

export default function OptionButton({
  title,
  value,
  setValue,
}: OptionButtonButtonProps) {
  return (
    <button
      className="font-mono text-sm cursor-pointer bg-opacity-30 bg-gray-500"
      onClick={() => setValue(!value)}
    >
      <p
        className="
            flex w-fit px-3 py-2 justify-center border 
            border-gray-300 bg-opacity-50 rounded-xl
          "
      >
        {title}
      </p>
    </button>
  );
}

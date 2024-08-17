type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} px-3 py-2
            justify-center border border-gray-300 rounded-xl 
            dark:border-neutral-800 dark:bg-zinc-800/30`}
      {...props}
    >
      {children}
    </button>
  );
}

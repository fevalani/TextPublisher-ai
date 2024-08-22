/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import universe from "@/assets/images/background.jpg";

export default function Main({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <main
      className={`${className} 
                flex w-full h-screen flex-col items-start
                relative overflow-hidden
                md:p-12 gap-8
                p-6
                `}
    >
      <Image
        src={universe}
        alt={"universe"}
        className="opacity-80 -z-10 absolute top-0 left-0 object-fill w-full h-full"
      />
      {children}
    </main>
  );
}
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import universe from "@/assets/images/background.jpg";

export default function Main({children}:{children: React.ReactNode}) {
    return (
        <main
            className={`
                flex w-full min-h-screen flex-col items-start relative
                justify-start md:p-24 gap-8 bg-universe bg-cover
                p-6
                `}>
                    <Image src={universe} layout="fill" objectFit="cover" alt={"universe"} className="opacity-25 -z-10 absolute top-0 left-0"  />
                    {children}
        </main>
    );
}
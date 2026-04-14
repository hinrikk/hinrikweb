import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between pl-4">
        <Link href="/" className="text-lg font-semibold">
          <Image
            src="/burger.svg"
            alt="BURGER"
            width={18}
            height={18}
            className="text-white"
          />
        </Link>

        <nav className="flex gap-6 text-black text font-bold h-full">
          <div className="flex bg-secondary h-full items-center justify-center px-6 gap-2">
            <Link href="/contact" className="">Contact</Link>
            <Image
              src="/arrowblack.svg"
              alt="ARROW"
              width={12}
              height={12}
            />
          </div>
        </nav>
        
      </div>
    </header>
  );
}
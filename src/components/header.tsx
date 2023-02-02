import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between text-center px-5 py-3 mb-8 bg-gray-900 text-white" >
      <div className="flex justify-center items-center gap-2">
        <Image src="/images/pokeball.png" alt="logo" height={30} width={30} />
        <h1>PokeNext</h1>
      </div>
      <ul className="flex items-center list-none gap-1 text-md">
        <li>
          <Link className="text-white decoration-0 p-3 transition duration-[500ms] border-b-2 border-transparent hover:border-white" href="/">Home</Link>
        </li>
        <li>
          <Link className="text-white decoration-0 p-3 transition duration-[500ms] border-b-2 border-transparent hover:border-white" href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

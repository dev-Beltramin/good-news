import { CiMenuBurger } from "react-icons/ci";
import { FiInstagram, FiFacebook, FiX } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <header className="bg-blue-300 h-20 flex w-full items-center">
        <ul className="flex items-center h-full ">
          <li>
            <button className="p-4">
              <i>
                <CiMenuBurger size={24} color="black" />
              </i>
            </button>
          </li>
        </ul>

        <Link
          href={"/"}
          className="text-center mx-auto text-4xl font-black italic"
        >
          {" "}
          <h2>Good_News</h2>
        </Link>

        <section className="flex pr-3 gap-x-2">
          <li className="cursor-pointer">
            <FiInstagram />
          </li>
          <li className="cursor-pointer">
            <FiFacebook />
          </li>
          <li className="cursor-pointer">
            <FaTwitter />
          </li>
        </section>
      </header>
    </>
  );
};

export default NavBar;

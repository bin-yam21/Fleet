import { NavbarMenu } from "../../mockData/data";
import { FaCircleUser } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import ResposiveMenu from "./ResposiveMenu";
function Navbar() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold ">
            <div>
              <span className="block font-2xl">BiT</span>
              <span className="block font-semibold text-lg">
                Fleet Management
              </span>
            </div>
          </div>
          {/* menu section */}
          {/* menu section and icons */}
          <div className="flex justify-between items-center gap-11">
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarMenu.map((item) => (
                  <li
                    className=" text-blue-600 hover:text-blue-900 hover:font-semibold"
                    key={item.id}
                  >
                    <a className="inline-block py-1 px-3" href={item.link}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Icons section */}
            <div className=" hidden  md:flex gap-6">
              <FaCircleUser className="size-8" />
              <MdDarkMode className="size-8" />
            </div>
            {/* Mobile Hamberger */}
            <div onClick={() => setOpen(!open)} className="md:hidden">
              <IoIosMenu className="size-8 text-4xl" />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile sidebar section */}
      <ResposiveMenu open={open} />
    </>
  );
}

export default Navbar;

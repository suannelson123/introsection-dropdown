import { useEffect, useRef, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { iconCloseMenu, iconMenu, links, logo } from "../constant";
import Button from "../ReusableComponents/Button";
// i didnt put any background to the navbar when the scrollY is > 0 xD still dont know what hooks to use xD
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);
  const [state, setState] = useState(null);
  const navRef = useRef(null);
  const listRef = useRef(null);

  const resetState = (e) => {
    e.target.id === state ? setState("") : "";
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };
  useEffect(() => {
    state === "feature1"
      ? (document.getElementById("feature1-arrow").style.transform =
          "rotateX(180deg)")
      : (document.getElementById("feature1-arrow").style.transform =
          "rotateX(0deg)");
    state === "company1"
      ? (document.getElementById("company1-arrow").style.transform =
          "rotateX(180deg)")
      : (document.getElementById("company1-arrow").style.transform =
          "rotateX(0deg)");

    state === "feature1desktop"
      ? (document.getElementById("feature1-arrowDesktop").style.transform =
          "rotateX(180deg)")
      : (document.getElementById("feature1-arrowDesktop").style.transform =
          "rotateX(0deg)");

    state === "company1desktop"
      ? (document.getElementById("company1-arrowDesktop").style.transform =
          "rotateX(180deg)")
      : (document.getElementById("company1-arrowDesktop").style.transform =
          "rotateX(0deg)");

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [state, scrolled]);

  return (
    <nav
      ref={navRef}
      className={` ${
        scrolled ? "bg-white shadow-md" : ""
      } fixed top-0 left-0 w-full max-w-[90rem] mx-[50%] translate-x-[-50%] px-5 md:px-10 lg:px-15 py-[1.2rem] z-50 `}
    >
      {/* overlay if its active */}
      <div
        className={`${
          active ? " block" : "hidden"
        } lg:hidden nav-overlay transition-all`}
      ></div>

      {/* LOGO & HAMBURGERMENU */}
      <div className="flex justify-between items-center relative lg:justify-normal">
        {/* LOGO */}
        <img className="object-cover" src={logo} alt="logo" />
        <img
          onClick={() => {
            setActive(true);
            disablePageScroll(navRef.current);
          }}
          className={`${active ? "hidden" : "block"} lg:hidden`}
          src={iconMenu}
          alt="iconMenu"
        />

        {/* Desktop Navigation */}
        <ul className="hidden text-black lg:flex ml-10 gap-8">
          {links.map((link) => (
            <div key={link.id} className="relative">
              <div className="flex gap-3">
                <li
                  id={link.id + "desktop"}
                  onClick={(e) => {
                    setState(e.target.id);
                    resetState(e);
                  }}
                  className="lg:flex items-center justify-center cursor-pointer"
                >
                  {link.navLink}
                </li>
                <img
                  id={link.id + "-arrowDesktop"}
                  className="object-contain"
                  src={link?.arrow}
                  alt=""
                />
              </div>
              <div
                className={` grid ${
                  state === "feature1desktop" ? "grid-active" : "grid-none"
                }  absolute top-[100%] left-[-100%]   bg-color-almostWhite rounded-lg shadow-lg shadow-color-mediumGray pr-7 pl-3 translate-x-[10%] my-5 transition-all text-color-mediumGray`}
              >
                <div className="overflow-hidden">
                  {link.featureDlinks?.map(({ id, title, imgUrl }) => (
                    <div
                      onClick={() => setState("")}
                      key={id}
                      id={id}
                      className="flex gap-3 p-2 py-3 cursor-pointer hover:text-black transition-all"
                    >
                      <img className="object-contain" src={imgUrl} alt="" />
                      <span className="text-[1.2rem] ">{title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`grid ${
                  state === "company1desktop" ? "grid-active" : "grid-none"
                } absolute top-[100%] left-[20%]   bg-color-almostWhite rounded-lg shadow-lg px-5  my-5 shadow-color-mediumGray transition-all text-color-mediumGray`}
              >
                <div className="w-[100px] overflow-hidden">
                  {link.companyDlinks?.map(({ id, title }) => (
                    <div
                      onClick={() => setState("")}
                      id={id}
                      key={id}
                      className="flex gap-3 p-2 pt-3 text-nowrap cursor-pointer hover:text-black transition-all font-bold"
                    >
                      <span>{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </ul>

        <div className="hidden lg:flex gap-5 ml-auto">
          <Button
            text="Login"
            styles="text-color-mediumGray w-full py-[1rem] px-[1rem] h-full rounded-[1.5rem] hover:text-black transition-all"
          />
          <Button
            text="Register"
            styles="text-color-mediumGray w-full  px-[2rem]  h-full rounded-[1rem] border border-color-almostBlack hover:text-black transition-all hover:border hover:border-color-almostBlack "
          />
        </div>
      </div>

      {/* DropdownMobile */}
      <ul
        ref={listRef}
        className={`${
          active ? "right-0" : "right-[-100vw]"
        } text-black bg-slate-50 absolute top-0 w-[60%] h-[100vh] overflow-y-scroll transition-all lg:hidden `}
      >
        <li className="p-[1rem]">
          <img
            onClick={() => {
              setActive(false);
              enablePageScroll(listRef.current);
            }}
            className="ml-auto"
            src={iconCloseMenu}
            alt="closeMenu"
          />
        </li>

        <li className="flex flex-col gap-3 p-[1rem]">
          {links.map((link) => (
            <div id={link.id} className="feature_links" key={link.id}>
              <div className="flex items-center text-color-mediumGray">
                <a
                  onClick={(e) => {
                    setState(e.target.id);
                    resetState(e);
                  }}
                  id={link.id}
                  className="p-[0.5rem]"
                >
                  {link?.navLink}
                </a>
                <div className="ml-[0.5rem]">
                  <img id={link.id + "-arrow"} src={link?.arrow} alt="" />
                </div>
              </div>
              <ul className="ml-5">
                {/* Feature Links */}
                <li
                  className={` ${link.id}  ${
                    state === "feature1" ? "grid-active" : "grid-none"
                  } grid transition-all `}
                >
                  <div className="overflow-hidden">
                    {link.featureDlinks?.map(({ id, title, imgUrl }) => (
                      <div
                        key={id}
                        className="text-color-mediumGray font-semibold flex items-center gap-2 my-[1rem]"
                      >
                        <img src={imgUrl} alt={title} />
                        <span
                          onClick={() => {
                            setActive(false);
                            setState("");
                          }}
                        >
                          {title}
                        </span>
                      </div>
                    ))}
                  </div>
                </li>

                {/* Company Links */}

                <li
                  className={`${link.id}  ${
                    state === "company1" ? "grid-active" : "grid-none"
                  } grid transition-all`}
                >
                  <div className="overflow-hidden">
                    {link.companyDlinks?.map(({ id, title }) => (
                      <div
                        key={id}
                        className="my-[1rem] text-color-mediumGray font-semibold"
                      >
                        <span
                          onClick={() => {
                            setActive(false);
                            setState("");
                          }}
                        >
                          {title}
                        </span>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </li>

        {/* mobile buttons */}
        <li className="flex flex-col gap-5 my-[2rem]">
          <Button
            text="Login"
            styles="text-color-mediumGray w-[80%] py-[1rem] px-[1rem] mx-[1rem] h-full rounded-[1.5rem]"
          />
          <Button
            text="Register"
            styles="border w-[80%] py-[1rem] px-[1rem] mx-[1rem] h-full rounded-[1.5rem] border-color-almostBlack"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

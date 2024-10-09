import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import Logo from "@/assets/cat-logo.png";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div
          className={`${flexBetween} relative mx-auto w-5/6 bg-secondary rounded-3xl py-2 px-4`}
        >
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img
              className="w-[50px] h-auto object-contain"
              alt="Logo"
              src={Logo}
            />

            {/* CENTER "Cardhouse" */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-background font-extrabold text-3xl md:text-4xl font-dynapuff">
              Cardhouse
            </div>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Decks"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                <Link
                    page="Sign Up"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <ActionButton size="medium" setSelectedPage={setSelectedPage}>
                    Log In
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end px-12 py-10">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-8 w-8 text-background" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Decks"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

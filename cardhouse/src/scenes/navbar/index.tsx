import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import Logo from "@/assets/cat-logo.png";
import { auth } from "@/firebaseSetup";
import { onAuthStateChanged, signOut } from "firebase/auth";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [user, setUser] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Monitor auth state and get user data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Handle sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("User signed out successfully");
      })
      .catch((error) => console.error("Error signing out: ", error));
  };

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
                <div className={`${flexBetween} gap-8 text-md`}>
                  <NavLink
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <NavLink
                    page="Dashboard"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div className={`${flexBetween} gap-8 text-md`}>
                  {user ? (
                    // Render Profile Dropdown if logged in
                    <div className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 bg-secondary-500 py-2 font-bold px-4 rounded-full text-white"
                      >
                        Hi, {user.displayName || "User"}
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1">
                            <Link
                              to="/profile"
                              className="block px-4 py-2 text-sm text-gray-700"
                            >
                              Profile
                            </Link>
                            <button
                              onClick={handleSignOut}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700"
                            >
                              Sign Out
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <NavLink
                        page="Sign Up"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                      <ActionButton
                        size="medium"
                        color="primary"
                        setSelectedPage={setSelectedPage}
                      >
                        <Link to="/login">Log In</Link>
                      </ActionButton>
                    </>
                  )}
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
            <NavLink
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page="Dashboard"
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

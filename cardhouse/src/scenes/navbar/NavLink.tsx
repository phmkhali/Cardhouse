import { SelectedPage } from "@/shared/types";
import { useNavigate } from "react-router-dom";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavLink = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "-") as SelectedPage;
  const navigate = useNavigate();
  const handleClick = () => {
    setSelectedPage(lowerCasePage);
    navigate(`/${lowerCasePage}`);
  };

  return (
    <button
      className={`${selectedPage === lowerCasePage ? "text-primary font-bold" : ""} transition duration-500 hover:text-background`}
      onClick={handleClick}
    >
      {page}
    </button>
  );
};

export default NavLink;

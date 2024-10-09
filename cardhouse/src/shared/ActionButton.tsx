import { SelectedPage } from "./types";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  size: "small" | "medium" | "large";
};

const sizeClasses = {
  small: "px-4 py-1 text-sm rounded-2xl",
  medium: "px-6 py-2 rounded-2xl",
  large: "px-8 py-3 text-lg rounded-3xl",
};

const ActionButton = ({ children, setSelectedPage, size }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedPage(SelectedPage.LOGIN);
    navigate("/login");
  };

  return (
    <button
      className={`w-fit bg-primary transition ease-in-out delay-150 hover:bg-primary-light hover:text-background ${sizeClasses[size]}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;

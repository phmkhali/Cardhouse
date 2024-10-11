import { SelectedPage } from "./types";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  size: "small" | "medium" | "large";
  color: "primary" | "secondary" | "accent"; 
};

const sizeClasses = {
  small: "px-4 py-1 text-sm rounded-2xl",
  medium: "px-6 py-2 rounded-2xl",
  large: "px-8 py-3 text-lg rounded-3xl",
};

const colorClasses: { [key in Props["color"]]: string } = {
  primary: "bg-primary text-background",
  secondary: "bg-secondary",
  accent: "bg-accent text-background",
};

const ActionButton = ({ children, setSelectedPage, size, color }: Props) => { 
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedPage(SelectedPage.LOGIN);
    navigate("/login");
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden w-fit group ${sizeClasses[size]} ${colorClasses[color]} hover:bg-accent hover:text-text`}
    >
      {/* Slider Effect */}
      <span
        className="absolute left-0 top-0 w-0 h-full bg-primary transition-all duration-300 group-hover:w-full"
        style={{ zIndex: 0 }}
      ></span>

      {/* Button Content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default ActionButton;

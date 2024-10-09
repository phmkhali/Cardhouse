import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

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
  return (
    <AnchorLink
      className={`w-fit bg-accent transition ease-in-out delay-150 hover:bg-primary-light ${sizeClasses[size]}`}
      onClick={() => setSelectedPage(SelectedPage.DECKS)}
      href={`#${SelectedPage.DECKS}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;

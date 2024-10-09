import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "-") as SelectedPage;

  return (
    <button
      className={`${selectedPage === lowerCasePage ? "text-primary font-bold" : ""} transition duration-500 hover:text-background`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </button>
  );
};

export default Link;

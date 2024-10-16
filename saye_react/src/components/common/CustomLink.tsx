import { Link } from "react-router-dom";

type TCustomLinkProps = {
  link: string;
  text: string;
};

const CustomLink = ({ link, text }: TCustomLinkProps) => {
  return (
    <Link
      className="bg-myGreen-dark text-white text-sm rounded-3xl font-bold px-5 py-3 
 transition-all  hover:bg-myGreen-hover"
      to={link}
    >
      {text}
    </Link>
  );
};

export default CustomLink;

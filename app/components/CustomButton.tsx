import { Button } from "@mui/material";

type Props = {
  onClick?: any;
  customStyle?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children: any;
}

const CustomButton = ({ onClick, customStyle, type, children }: any) => {
  const defaultStyle =
    "my-3 rounded-lg bg-darkish text-white border-white hover:bg-creamish hover:text-black hover:border-darkish hover:font-bold hover:border-1";

  return (
    <Button onClick={onClick} className={customStyle ? `${customStyle} ${defaultStyle}`: defaultStyle} type={type} variant="outlined">
      {children}
    </Button>
  );
};

export default CustomButton;

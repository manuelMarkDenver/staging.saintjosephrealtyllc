import { Box } from "@mui/system";



const Bar = (props: any) => {
  const propsArr = Object.values(props)

  const barProps = [
    "w-32", "mb-2", "md:h-4", "h-2"
  ]


  return (
    <Box
      className={`${[...propsArr]}  ${barProps.join(" ")}`}
    />
  );
};

export default Bar;

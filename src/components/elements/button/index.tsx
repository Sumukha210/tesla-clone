import { CustomButton } from "./styles";
import { btnProps } from "./types";

const Button: React.FC<btnProps> = ({
  name,
  onClick = () => {},
  type = "button",
  ...restProps
}) => {
  return (
    <CustomButton onClick={onClick} type={type} restProps={restProps}>
      {name}
    </CustomButton>
  );
};

export default Button;

Button.defaultProps = {
  variant: "standard",
};

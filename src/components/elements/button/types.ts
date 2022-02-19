export interface customBtnProps {
  secondaryBtn?: boolean;
  lightOutlineBtn?: boolean;
  outlineBtn?: boolean;
  smBtn?: boolean;
}

export interface buttonProps extends customBtnProps {
  name: string;
  onClick?: () => void;
  btnType?: "submit" | "reset" | "button";
}

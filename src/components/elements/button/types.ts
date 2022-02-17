export interface customBtnProps {
  secondaryBtn?: boolean;
}

export interface buttonProps extends customBtnProps {
  name: string;
  onClick?: () => void;
  btnType?: "submit" | "reset" | "button";
}

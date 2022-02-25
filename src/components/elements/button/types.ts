export type btnSize = "sm" | "md" | "large" | "flexible";
export type btnColor = "light" | "dark" | "dimColor";

export type btnProps = {
  name: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
} & (outlineBtnProps | normalBtnProps | textBtnProps);

export type outlineBtnProps = {
  variant: "outline";
  color: btnColor;
  size?: btnSize;
};

export type normalBtnProps = {
  variant?: "standard";
  color?: btnColor;
  size?: btnSize;
};

export type textBtnProps = {
  variant: "text";
  color?: btnColor;
  textSize?: "16px" | "14px" | "12px" | "10px";
  size?: btnSize;
};

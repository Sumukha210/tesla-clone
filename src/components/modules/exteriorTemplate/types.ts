export interface headerProps {
  headerBgColor: "light" | "dark";
}

export interface exteriorTemplateProps extends headerProps {
  header: {
    title?: string;
    caption?: string;
    description: string;
    img: StaticImageData | string;
    orderNowBtnPath: string;
  };

  specs: {
    title: string;
    description: string;
    img: StaticImageData;
  }[];
}

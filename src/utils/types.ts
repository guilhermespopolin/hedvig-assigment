export type PerilResponse = {
  title: string;
  description: string;
  shortDescription: string;
  covered: string[];
  exceptions: string[];
  icon: {
    variants: {
      light: { svgUrl: string };
      dark: { svgUrl: string };
    };
  };
};

export type Peril = {
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  covered: string[];
  exceptions: string[];
};

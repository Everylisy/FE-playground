import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    greyTextColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}

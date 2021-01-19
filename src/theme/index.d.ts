import "styled-components/native";
import theme from "./index";

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

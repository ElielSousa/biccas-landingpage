import "styled-components";
import type { Theme } from "./types";

declare module "styled-components" {
  // A tipagem não funcionava com type porque styled-components requer
  // a interface DefaultTheme para a augmentação.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}

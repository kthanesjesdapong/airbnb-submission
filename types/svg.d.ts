import { FC, SVGProps } from 'react';

declare module "*.svg" {
  // const content: string;
  // export default content;
  export const ReactComponent: FC<SVGProps<SVGSVGElement>> & { title?: string; };
}
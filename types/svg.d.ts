import { FC, SVGProps } from 'react';

declare module "*.svg" {
  export const ReactComponent: FC<SVGProps<SVGSVGElement>> & { title?: string; };
}
import { FC } from 'react';

type PNGComponentProps = {
  src: string;
  alt: string;
  className?: string;
  width: string;
};

export const PNGComponent: FC<PNGComponentProps> = ({
  src,
  alt,
  className,
  width,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      style={{ marginTop: '5px' }}
    />
  );
};

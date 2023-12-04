import { FC } from 'react';
interface iProp {
  src: string;
  alt: string;
}
const Icon: FC<iProp> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default Icon;

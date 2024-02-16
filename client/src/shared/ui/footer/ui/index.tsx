import { FooterContainer } from './Footer.styled';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

type FooterProps = {
  className?: string;
};

export const Footer = ({ className }: FooterProps) => {
  return (
    <FooterContainer className={className}>
      <FaTwitter />
      <FaInstagram />
      <FaLinkedin />
    </FooterContainer>
  );
};

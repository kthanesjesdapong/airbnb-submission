import { HeroSectionContainer } from './HeroSection.styled';

type HeroSectionProps = {
  sectionTitle: string;
  sectionParagraph: string;
};

export const HeroSection = ({
  sectionTitle,
  sectionParagraph,
}: HeroSectionProps) => {
  return (
    <HeroSectionContainer>
      <h2>{sectionTitle}</h2>
      <p>{sectionParagraph}</p>
    </HeroSectionContainer>
  );
};

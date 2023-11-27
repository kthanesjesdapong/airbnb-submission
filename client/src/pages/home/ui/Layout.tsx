import { HomeLayoutContainer, FirstRowContainer, SecondRowContainer } from "./Layout.styled";
import { SliderSelector } from "@features/SliderSelector";
import { sliderOptions, sliderSelectorConfigs, heroSectionConfigs } from "../home.configs";
import { HeroSection } from "@features/HeroSection";
import { Slider } from "@widgets/slider";
export const Layout = () => {
    const { sectionTitle, sectionParagraph } = heroSectionConfigs;
    return (
        <HomeLayoutContainer
        >
            <FirstRowContainer>
                <SliderSelector
                    options={sliderOptions}
                    configs={sliderSelectorConfigs}
                />
                <HeroSection
                    sectionTitle={sectionTitle}
                    sectionParagraph={sectionParagraph}
                />
            </FirstRowContainer>
            <SecondRowContainer>
                <Slider />
            </SecondRowContainer>
        </HomeLayoutContainer>
    );
};
import { HomeLayoutContainer, FirstRowContainer, SecondRowContainer } from "./Layout.styled";
import { SliderSelector } from "@widgets/SliderSelector";
import { sliderOptions, sliderSelectorConfigs, heroSectionConfigs } from "../home.configs";
import { HeroSection } from "@widgets/HeroSection";
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
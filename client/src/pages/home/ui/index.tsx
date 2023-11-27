import { HomeLayoutContainer, FirstRowContainer, SecondRowContainer } from "./Layout.styled";
import { SliderSelector } from "@features/slider-selector";
import { sliderOptions, sliderSelectorConfigs, heroSectionConfigs } from "../home.configs";
import { HeroSection } from "@shared/ui";
import { Slider } from "@widgets/slider";

export const HomePage = () => {
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
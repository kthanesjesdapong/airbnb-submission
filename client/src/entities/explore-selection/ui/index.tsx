import { ExploreSelectionCardContainer } from "./ExploreSelection.styled";
import { exploreSelectionConfigs } from "..";
import { LinkElement } from "@shared/ui";

type ExploreSelectionProps = {
    header: string;
    href: string;
    url: string;
};

export const ExploreSelection = ({ header, href, url }: ExploreSelectionProps) => {
    const { $width, $height, $maxwidth } = exploreSelectionConfigs;
    return (
        <ExploreSelectionCardContainer
            $width={$width}
            $height={$height}
            $maxwidth={$maxwidth}
            $url={url}
        >
            <div className="card-container">
                <LinkElement
                    to={href}
                >
                    {header}
                </LinkElement>
            </div>
        </ExploreSelectionCardContainer>
    );
};
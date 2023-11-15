import { StyledCard } from "./CardSelection.styled";
import { cardSelectionConfig } from "..";
import { LinkElement } from "@shared/ui";

type CardSelectionProps = {
    header: string;
    href: string;
    description: string;
    url: string;

};

export const CardSelection = ({ header, href, description, url }: CardSelectionProps) => {
    const { $width, $height, $maxwidth } = cardSelectionConfig;
    return (
        <StyledCard
            $width={$width}
            $height={$height}
            $maxwidth={$maxwidth}
            $url={url}
        >
            <div className="card-container">
                <LinkElement
                    to={href}
                // fontSize={}
                >
                    {header}
                </LinkElement>
                <p>
                    {description}
                </p>
            </div>
        </StyledCard>
    );
};
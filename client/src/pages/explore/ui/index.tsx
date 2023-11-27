import { ExplorePageContainer } from "./Explore.styled";
import { exploreSelections } from "..";
import { CardSelection } from "@entities/card-selection";


export const ExplorePage = () => {
    return (
        <ExplorePageContainer>
            {exploreSelections.map((category) => (
                <CardSelection
                    header={category.header}
                    href={category.href}
                    url={category.url}
                    key={category.header + 'key'}
                />
            ))}
        </ExplorePageContainer>
    );
};
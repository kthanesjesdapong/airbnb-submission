import { ExplorePageContainer } from "./Explore.styled";
import { exploreSelections } from "..";
import { ExploreSelection } from "@entities/explore-selection";


export const ExplorePage = () => {
    return (
        <ExplorePageContainer>
            {exploreSelections.map((category) => (
                <ExploreSelection
                    header={category.header}
                    href={category.href}
                    url={category.url}
                    key={category.header + 'key'}
                />
            ))}
        </ExplorePageContainer>
    );
};
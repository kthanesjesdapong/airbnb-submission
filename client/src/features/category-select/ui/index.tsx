import { CardSelection } from "@widgets/CardSelection";
import { CategorySelectContainer } from './CategorySelect.styled';
import { categorySelections } from "..";

export const CategorySelect = () => {

    return (
        <CategorySelectContainer>
            {categorySelections.map((category) => (
                <CardSelection
                    header={category.header}
                    href={category.href}
                    url={category.url}
                    key={category.header + 'key'}
                />
            ))}
        </CategorySelectContainer>

    );
};
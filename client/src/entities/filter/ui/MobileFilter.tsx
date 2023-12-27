import { ReactNode } from "react";
import { MobileFilterContainer } from "./MobileFilter.styled";

type MobileFilterProps = {
    children: ReactNode;
    show: boolean;
};

export const MobileFilter = ({ children, show }: MobileFilterProps) => {

    return (
        <MobileFilterContainer show={show}>
            {children}
        </MobileFilterContainer>
    );
};
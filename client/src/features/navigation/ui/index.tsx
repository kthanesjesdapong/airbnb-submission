import { LinkElement, Logo } from "@shared/ui";

import { NavigationContainer, LogoContainer, LinksContainer } from "./Navigation.styled";



//MAP THROUGH ARRAY OF LINKS FOR LINK ELEMENT.
export const Navigation = () => {
    return (
        <NavigationContainer>
            <LogoContainer>
                <Logo>
                    DISCLOSE LV
                </Logo>
            </LogoContainer>
            <LinksContainer>
                <LinkElement to={'./about'}>
                    about
                </LinkElement>
            </LinksContainer>
        </NavigationContainer>
    );
};
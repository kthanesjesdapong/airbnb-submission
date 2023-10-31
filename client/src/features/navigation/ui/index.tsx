import { navigationLinks, logo } from '@shared/constants';
import { LinkElement, Logo } from "@shared/ui";

import { NavigationContainer, LogoContainer, LinksContainer, LinkWrapper } from "./Navigation.styled";



//MAP THROUGH ARRAY OF LINKS FOR LINK ELEMENT.
export const Navigation = () => {
    return (
        <NavigationContainer>
            <LogoContainer>
                <Logo to={'/'} content={logo}>
                    DISCLOSE LV
                </Logo>
            </LogoContainer>
            <LinksContainer className='flex-row-center'>
                {navigationLinks.map((link) => (
                    <LinkWrapper
                        key={link + ' key'}
                    >
                        <LinkElement

                            to={'.' + link}
                        >
                            {link}
                        </LinkElement>

                    </LinkWrapper>
                ))}
            </LinksContainer>
        </NavigationContainer>
    );
};
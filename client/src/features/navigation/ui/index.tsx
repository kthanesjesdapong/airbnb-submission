import { navigationLinks, logo, navLinkTitles, exploreLinks, userActionRole, userActionText } from '@shared/constants';
import { Logo } from "@shared/ui";

import { NavigationContainer, LogoContainer } from "./Navigation.styled";

import { Topbar } from '@shared/ui/top-bar';
import { Sidebar } from '@shared/ui/side-bar';

type NavigationProps = {
    className?: string;
};


//MAP THROUGH ARRAY OF LINKS FOR LINK ELEMENT.
export const Navigation = ({ className }: NavigationProps) => {

    return (

        <NavigationContainer className={className}>
            <LogoContainer>
                <Logo to={'/'} content={logo}>
                    DISCLOSE LV
                </Logo>
            </LogoContainer>
            <Topbar
                linkTitles={navLinkTitles}
                links={navigationLinks}
                menuItems={exploreLinks}
                userActionButtonRole={userActionRole}
                userActionButtonTitle={userActionText}
            />
            <Sidebar
                linkTitles={navLinkTitles}
                links={navigationLinks}
                menuItems={exploreLinks}

            />
        </NavigationContainer>
    );
};
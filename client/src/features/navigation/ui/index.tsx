import { navigationLinks, logo, navLinkTitles, exploreLinks, userActionRole, userActionText } from '@shared/constants';
import { Logo } from "@shared/ui";

import { NavigationContainer, LogoContainer } from "./Navigation.styled";

import { Topbar } from '@shared/ui/top-bar';
import { Sidebar } from '@shared/ui/side-bar';

import { UserAction } from '@widgets/user-action-form/ui';

import { useToggle } from '@shared/lib/hooks';
import { useActiveForm } from '..';

type NavigationProps = {
    className?: string;
};


//MAP THROUGH ARRAY OF LINKS FOR LINK ELEMENT.
export const Navigation = ({ className }: NavigationProps) => {

    const { status: active, toggleStatus: handleActive } = useToggle();
    const { activeAction, handleActiveAction } = useActiveForm();

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
                handleActive={handleActive}
                handleSetActiveAction={handleActiveAction}
            />
            <Sidebar
                linkTitles={navLinkTitles}
                links={navigationLinks}
                menuItems={exploreLinks}
            />
            <UserAction
                handleActive={handleActive}
                active={active}
                activeAction={activeAction}
            />
        </NavigationContainer>
    );
};
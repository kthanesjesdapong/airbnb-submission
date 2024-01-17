import { navigationLinks, logo, navLinkTitles, exploreLinks, userActionRole, userActionText } from '@shared/constants';
import { Logo } from "@shared/ui";

import { NavigationContainer, LogoContainer } from "./Navigation.styled";

import { Topbar } from '@shared/ui/top-bar';
import { Sidebar } from '@shared/ui/side-bar';

import { UserAction } from '@features/user-action';

import { useToggle, useAppSelector } from '@shared/lib/hooks';
import { useActiveForm } from '..';






type NavigationProps = {
    className?: string;
};


//MAP THROUGH ARRAY OF LINKS FOR LINK ELEMENT.
export const Navigation = ({ className }: NavigationProps) => {


    const { status: active, toggleStatus: handleActive, toggleOff } = useToggle();
    const { currentUserAction, setUserAction, setSignUpAsActive, activeString } = useActiveForm();


    const isActiveString = activeString(active);


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
                handleCurrentUserAction={setUserAction}
            />
            <Sidebar
                linkTitles={navLinkTitles}
                links={navigationLinks}
                menuItems={exploreLinks}
            />
            <UserAction
                activeAction={currentUserAction}
                setActive={handleActive}
                setSignUpAsActive={setSignUpAsActive}
                isActiveString={isActiveString}

                handleActive={toggleOff}
            />
        </NavigationContainer>
    );
};
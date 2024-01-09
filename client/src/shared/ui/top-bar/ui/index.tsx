import { LinksContainer, LinkWrapper, UserActionText } from "./Topbar.styled";
import { useToggle } from "@shared/lib/hooks";
import { LinkElement } from "@shared/ui";
import { DropDown } from "./Dropdown";
import { TopbarConfig } from "..";
import { MouseEvent } from "react";

type TopbarProps = {
    linkTitles: string[],
    links: string[],
    menuItems: string[],
    userActionButtonRole: string[];
    userActionButtonTitle: string[];
    handleActive: () => void;
    handleCurrentUserAction: (action: string) => void;
};
//handleActive, 
export const Topbar = ({ linkTitles, links, menuItems, userActionButtonRole, userActionButtonTitle, handleActive, handleCurrentUserAction }: TopbarProps) => {

    const { status: expand, toggleStatus: toggleExpand } = useToggle();

    const { start, end, dropDownArrowWidth, dropDownArrowDisplay } = TopbarConfig;


    const handleSetActives = (event: MouseEvent<HTMLDivElement>) => {
        handleActive();
        handleCurrentUserAction(event.currentTarget.textContent!);
    };



    return (
        <LinksContainer>
            {linkTitles.map((linkTitle, i) => (
                linkTitle !== 'Explore' ? (
                    <LinkWrapper
                        key={linkTitle + ' key'}
                    >
                        <LinkElement
                            to={'/' + links[i]}
                        >{linkTitle}
                        </LinkElement>
                    </LinkWrapper>
                ) : <DropDown
                    title={linkTitle}
                    to={'' + links[i]}
                    menuItems={menuItems}
                    key={linkTitle + ' key'}
                    state={expand}
                    callBack={toggleExpand}
                    start={start}
                    end={end}
                    dropDownArrowWidth={dropDownArrowWidth}
                    dropDownArrowDisplay={dropDownArrowDisplay}
                />
            ))}
            {userActionButtonRole.map((buttonRole, i) => (
                <LinkWrapper role={buttonRole}
                    key={buttonRole + '' + i}
                >
                    <UserActionText
                        onClick={handleSetActives}>
                        {userActionButtonTitle[i]}
                    </UserActionText>
                </LinkWrapper>
            ))}

        </LinksContainer>
    );
};
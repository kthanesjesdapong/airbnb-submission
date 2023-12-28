import { LinksContainer, LinkWrapper } from "./Topbar.styled";
import { useToggle } from "@shared/lib/hooks";
import { LinkElement } from "@shared/ui";
import { DropDown } from "./Dropdown";
import { TopbarConfig } from "..";

type TopbarProps = {
    linkTitles: string[],
    links: string[],
    menuItems: string[],

};

export const Topbar = ({ linkTitles, links, menuItems }: TopbarProps) => {

    const { status: expand, toggleStatus: toggleExpand } = useToggle();

    const { start, end, dropDownArrowWidth, dropDownArrowDisplay } = TopbarConfig;

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
        </LinksContainer>
    );
};
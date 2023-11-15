import { LinksContainer, LinkWrapper } from "./Topbar.styled";
import { useToggle } from "@shared/lib/hooks";
import { LinkElement } from "@shared/ui";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { DropDown } from "./Dropdown";
import { TopbarConfig } from "..";

type TopbarProps = {
    linkTitles: string[],
    links: string[],
    menuItems: string[],

};

export const Topbar = ({ linkTitles, links, menuItems }: TopbarProps) => {

    const { status: expand, toggleStatus: toggleExpand } = useToggle();

    const { start, end, fontSize } = TopbarConfig;


    //In between Links Container You essentially need to map through linkTitles and pass in the titles and links
    //Create Dropdown component as a separate component within Topbar/ui/

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
                    IconSVG={ChevronDownIcon}
                    key={linkTitle + ' key'}
                    state={expand}
                    callBack={toggleExpand}
                    start={start}
                    end={end}
                    fontSize={fontSize}
                />

            ))}
        </LinksContainer>
    );
};
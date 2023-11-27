import { Bars3Icon } from "@heroicons/react/24/solid";
import { SidebarContainer, SidebarWrapper } from "./Sidebar.styled";
import { SideUnorderedList, ListItem, LinkElement } from "@shared/ui";
import { useToggle } from "@shared/lib/hooks";
import { SidebarConfig } from "..";



type SideBarProps = {
    linkTitles: string[];
    // links: string[];
    links?: string[];
    menuItems?: string[];
    role?: string;
};

// , links, menuItems, <-- Add this back in later

//Add in Links and MenuItems for SideBar
export const Sidebar = ({ linkTitles, links, role }: SideBarProps) => {

    const { start, end, marginRight, top, width, fontSize, color } = SidebarConfig;

    const { status: expand, toggleStatus: toggleExpand } = useToggle();

    return (
        <SidebarContainer onClick={toggleExpand}
            role={role}
        >
            <SidebarWrapper>
                <Bars3Icon />
                <SideUnorderedList
                    $visible={expand ? true : false}
                    $start={start}
                    $end={end}
                    $marginRight={marginRight}
                    $top={top}
                    $width={width}
                >
                    {links && linkTitles.map((linkTitle, i) => (
                        <ListItem
                            key={'key' + linkTitle}
                            fontSize={fontSize}
                            color={color}
                        >
                            <LinkElement
                                to={'/' + links[i]}
                            >
                                {linkTitle}
                            </LinkElement>
                        </ListItem>
                    ))}
                </SideUnorderedList>
            </SidebarWrapper>

        </SidebarContainer>
    );
};
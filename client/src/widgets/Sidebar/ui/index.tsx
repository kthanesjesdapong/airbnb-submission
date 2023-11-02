import { Bars3Icon } from "@heroicons/react/24/solid";
import { StyledSideBarContainer, StyledSideBarWrapper } from "./Sidebar.styled";
import { SideUnorderedList, ListItem } from "@shared/ui";
import { useToggle } from "@shared/lib/hooks";
import { SidebarConfig } from "..";


interface SideBarProps {
    linkTitles: string[];
    links?: string[];
    menuItems?: string[];
    role?: string;
}

//Add in Links and MenuItems for SideBar
export const Sidebar = ({ linkTitles, links, menuItems, role }: SideBarProps) => {

    const { start, end, marginRight, top, width, fontSize, color } = SidebarConfig;

    const { status: expand, toggleStatus: toggleExpand } = useToggle();

    return (
        <StyledSideBarContainer onClick={toggleExpand}
            role={role}
        >
            <StyledSideBarWrapper>
                <Bars3Icon />
                <SideUnorderedList
                    $visible={expand ? true : false}
                    $start={start}
                    $end={end}
                    $marginRight={marginRight}
                    $top={top}
                    $width={width}
                >
                    {linkTitles.map((link) => (
                        <ListItem
                            key={'key' + link}
                            fontSize={fontSize}
                            color={color}
                        >{link}
                        </ListItem>
                    ))}
                </SideUnorderedList>
            </StyledSideBarWrapper>

        </StyledSideBarContainer>
    );
};

// export default SideBar;
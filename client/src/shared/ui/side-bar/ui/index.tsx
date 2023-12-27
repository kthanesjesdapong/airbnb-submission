import { Bars3Icon } from "@heroicons/react/24/solid";
import { SidebarContainer, SidebarWrapper } from "./Sidebar.styled";
import { SideUnorderedList, ListItem, LinkElement, ListItemLink } from "@shared/ui";
import { useToggle } from "@shared/lib/hooks";
import { SidebarConfig } from "..";
import { position } from "polished";


type SideBarProps = {
    linkTitles: string[];
    links?: string[];
    menuItems: string[];
    role?: string;
};


export const Sidebar = ({ linkTitles, links, role, menuItems }: SideBarProps) => {

    const { start, end, marginRight, top, width, height, fontSize, color } = SidebarConfig;

    const { status: expand, toggleStatus: toggleExpand, toggleOff } = useToggle();



    return (
        <SidebarContainer
            role={role}
            style={expand ? { zIndex: '199', position: 'fixed', left: 0, right: 0, bottom: 0, top: 0 } : {}}
        >

            <SidebarWrapper >
                <Bars3Icon onClick={toggleExpand} style={!expand ? { zIndex: '200' } : { zIndex: '100' }} />
                <SideUnorderedList
                    $visible={expand}
                    $start={start}
                    $end={end}
                    $marginRight={marginRight}
                    $top={top}
                    $width={width}
                    $height={height}
                >
                    <span onClick={toggleOff} style={{ color: 'white', fontSize: '2em' }}>x</span>
                    {links && linkTitles.map((linkTitle, i) => (
                        (linkTitle !== 'Explore' ? (
                            <ListItem
                                key={'key' + linkTitle}
                                fontSize={fontSize}
                                color={color}
                                style={{ paddingLeft: '3em', }}
                                fontFamily="content"
                            >
                                <LinkElement
                                    to={'/' + links[i]}
                                >
                                    {linkTitle}
                                </LinkElement>
                            </ListItem>

                        ) : (
                            <ListItem
                                key={'key' + linkTitle}
                                fontSize={fontSize}
                                color={color}
                                style={{ paddingLeft: '3em', }}
                                fontFamily="content"
                            >
                                <LinkElement
                                    to={'/' + links[i]}
                                >
                                    {linkTitle}
                                </LinkElement>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {menuItems.map((menuItem, mIKey) => (

                                        <ListItemLink
                                            style={{ fontSize: '.8em', color: '808080' }}
                                            key={mIKey.toString()}
                                            to={`/explore/${menuItem.toLowerCase()}`}
                                        >
                                            {menuItem}
                                        </ListItemLink>
                                    ))}
                                </div>
                            </ListItem>
                        ))
                    ))}
                </SideUnorderedList>
            </SidebarWrapper>

        </SidebarContainer>
    );
};
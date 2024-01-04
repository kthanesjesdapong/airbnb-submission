import { useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { SidebarContainer, SidebarWrapper } from "./Sidebar.styled";
import { SideUnorderedList, ListItem, LinkElement, ListItemLink } from "@shared/ui";
import { useToggle } from "@shared/lib/hooks";
import { SidebarConfig } from "..";
import { useLocation } from "react-router-dom";


type SideBarProps = {
    linkTitles: string[];
    links?: string[];
    menuItems: string[];
    role?: string;

};


export const Sidebar = ({ linkTitles, links, role, menuItems }: SideBarProps) => {

    const { start, end, marginRight, top, width, height, fontSize, color } = SidebarConfig;

    const { status: expand, toggleStatus: toggleExpand, toggleOff } = useToggle();

    const location = useLocation();

    useEffect(() => {
        toggleOff();
    }, [location]);

    return (
        <SidebarContainer
            role={role}
            $expand={expand ? expand.toString() : undefined}
        >

            <SidebarWrapper >
                <Bars3Icon onClick={toggleExpand} style={!expand ? { zIndex: '200' } : { zIndex: '150', opacity: 0 }} />
                <SideUnorderedList
                    $visible={expand}
                    $start={start}
                    $end={end}
                    $marginRight={marginRight}
                    $top={top}
                    $width={width}
                    $height={height}
                    $expand={expand ? expand.toString() : undefined}
                    className={expand ? 'show' : 'hide'}
                >
                    <span onClick={toggleOff} style={{ color: 'white', fontSize: '2em', marginLeft: '.5em', marginTop: '5em' }}>X</span>
                    {links && linkTitles.map((linkTitle, i) => (
                        (linkTitle !== 'Explore' ? (
                            <ListItem
                                key={'key' + linkTitle}
                                fontSize={fontSize}
                                color={color}
                                style={{ paddingLeft: '3em', }}
                                fontFamily="content"
                                className={expand ? '' : 'hide'}
                            >
                                <LinkElement
                                    to={'/' + links[i]}
                                    className={expand ? '' : 'hide'}
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
                                className={expand ? '' : 'hide'}
                            >
                                <LinkElement
                                    to={'/' + links[i]}
                                    className={expand ? '' : 'hide'}
                                >
                                    {linkTitle}
                                </LinkElement>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {menuItems.map((menuItem, mIKey) => (

                                        <ListItemLink
                                            style={{ fontSize: '.8em', color: '808080' }}
                                            key={mIKey.toString()}
                                            to={`/explore/${menuItem.toLowerCase()}`}
                                            className={expand ? '' : 'hide'}
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
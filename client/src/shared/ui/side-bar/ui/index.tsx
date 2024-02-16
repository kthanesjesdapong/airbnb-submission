import { useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import {
  SidebarContainer,
  SidebarWrapper,
  CancelButton,
  LinkText,
} from './Sidebar.styled';
import {
  SideUnorderedList,
  ListItem,
  LinkElement,
  ListItemLink,
} from '@shared/ui';
import { useToggle, useAppSelector } from '@shared/lib/hooks';
import { RootState } from '@shared/store';
import { SidebarConfig } from '..';
import { useLocation } from 'react-router-dom';

import { DropDownArrow } from '@shared/ui';

type SideBarProps = {
  linkTitles: string[];
  links?: string[];
  menuItems: string[];
  role?: string;
};

export const Sidebar = ({
  linkTitles,
  links,
  role,
  menuItems,
}: SideBarProps) => {
  const currentUser = useAppSelector((state: RootState) => state.user);
  const { userName } = currentUser;

  const { start, end, marginRight, top, width, height, fontSize, color } =
    SidebarConfig;

  const { status: expand, toggleStatus: toggleExpand, toggleOff } = useToggle();
  const { status: dropDownExpand, toggleStatus: toggleDropDownArrow } =
    useToggle();

  const location = useLocation();

  useEffect(() => {
    toggleOff();
  }, [location]);

  return (
    <SidebarContainer
      role={role}
      $expand={expand ? expand.toString() : undefined}
    >
      <SidebarWrapper>
        <Bars3Icon
          onClick={toggleExpand}
          style={!expand ? { zIndex: '200' } : { zIndex: '150', opacity: 0 }}
        />
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
          <CancelButton onClick={toggleOff}>X</CancelButton>
          {userName ? <h1 style={{ color: 'white' }}>{userName}</h1> : <></>}
          {links &&
            linkTitles.map((linkTitle, i) =>
              linkTitle !== 'Explore' ? (
                <div>
                  <ListItem
                    key={'key' + linkTitle}
                    fontSize={fontSize}
                    color={color}
                    style={{ paddingLeft: '3em' }}
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
                </div>
              ) : (
                <ListItem
                  key={'key' + linkTitle}
                  fontSize={fontSize}
                  color={color}
                  style={{ paddingLeft: '3em' }}
                  fontFamily="content"
                  className={expand ? '' : 'hide'}
                >
                  <div
                    onClick={() => toggleDropDownArrow()}
                    className="flex-row-align-items-center"
                  >
                    <LinkText className={expand ? '' : 'hide'}>
                      {linkTitle}
                    </LinkText>
                    <DropDownArrow
                      width={'1.2em'}
                      display={'inline-block'}
                      active={dropDownExpand ? 'active' : undefined}
                    />
                  </div>
                  <div
                    className={
                      dropDownExpand
                        ? 'flex-column expanded'
                        : 'flex-column collapsed'
                    }
                  >
                    {menuItems.map((menuItem, mIKey) => (
                      <ListItemLink
                        style={{ fontSize: '.8em', color: '808080' }}
                        key={mIKey.toString()}
                        to={`/explore/${menuItem.toLowerCase()}`}
                      >
                        {'- ' + menuItem}
                      </ListItemLink>
                    ))}
                  </div>
                </ListItem>
              )
            )}
          {userName ? (
            <></>
          ) : (
            <>
              <div>
                <ListItem
                  fontSize={fontSize}
                  color={color}
                  style={{ paddingLeft: '3em' }}
                  fontFamily="content"
                  className={expand ? '' : 'hide'}
                >
                  <LinkText>Login</LinkText>
                </ListItem>
              </div>
              <div>
                <ListItem
                  fontSize={fontSize}
                  color={color}
                  style={{ paddingLeft: '3em' }}
                  fontFamily="content"
                  className={expand ? '' : 'hide'}
                >
                  <LinkText>SignUp</LinkText>
                </ListItem>
              </div>
            </>
          )}
        </SideUnorderedList>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

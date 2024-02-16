import { LinksContainer, LinkWrapper, UserActionText } from './Topbar.styled';
import { useToggle, useAppSelector } from '@shared/lib/hooks';
import { LinkElement, UserSuite } from '@shared/ui';
import { DropDown } from './Dropdown';
import { TopbarConfig } from '..';
import { MouseEvent } from 'react';

import { RootState } from '@shared/store';

type TopbarProps = {
  linkTitles: string[];
  links: string[];
  menuItems: string[];
  userActionButtonRole: string[];
  userActionButtonTitle: string[];
  handleActive: () => void;
  handleCurrentUserAction: (action: string) => void;
};
//handleActive,
export const Topbar = ({
  linkTitles,
  links,
  menuItems,
  userActionButtonRole,
  userActionButtonTitle,
  handleActive,
  handleCurrentUserAction,
}: TopbarProps) => {
  const currentUser = useAppSelector((state: RootState) => state.user);
  const { userName } = currentUser;

  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  const { start, end, dropDownArrowWidth, dropDownArrowDisplay } = TopbarConfig;

  const handleSetActives = (event: MouseEvent<HTMLDivElement>) => {
    handleActive();
    handleCurrentUserAction(event.currentTarget.textContent!);
  };

  return (
    <LinksContainer>
      {linkTitles.map((linkTitle, i) =>
        linkTitle !== 'Explore' ? (
          <LinkWrapper key={linkTitle + ' key'}>
            <LinkElement to={'/' + links[i]}>{linkTitle}</LinkElement>
          </LinkWrapper>
        ) : (
          <DropDown
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
        )
      )}

      {userName === null ? (
        userActionButtonRole.map((buttonRole, i) => (
          <LinkWrapper role={buttonRole} key={buttonRole + '' + i}>
            <UserActionText onClick={handleSetActives}>
              {userActionButtonTitle[i]}
            </UserActionText>
          </LinkWrapper>
        ))
      ) : (
        <UserSuite
          imgUrl={
            'https://ih1.redbubble.net/image.5184662015.9367/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp'
          }
          imgWidth={'35px'}
          imgHeight={'35px'}
          userName={userName}
        />
      )}
    </LinksContainer>
  );
};

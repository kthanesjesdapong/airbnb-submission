import { FC, MouseEventHandler } from 'react';
import { UnorderedList, ListItemLink, LinkElement, } from '@shared/ui';
import { DropDownWrapper } from './Dropdown.styled';
import { DropDownArrow } from '@shared/ui';


type DropDownProps = {
    title?: string;
    to: string;
    menuItems: string[];
    callBack: MouseEventHandler<HTMLDivElement>;
    state: boolean;
    start: number;
    end: number;
    dropDownArrowWidth: string;
    dropDownArrowDisplay: string;
};

export const DropDown: FC<DropDownProps> = ({ title, to, menuItems, callBack, state, start, end, dropDownArrowWidth, dropDownArrowDisplay }) => {
    return (
        <DropDownWrapper
            onClick={callBack} className="trigger-button">
            <LinkElement
                to={to}
            >{title}
            </LinkElement>
            <DropDownArrow
                width={dropDownArrowWidth}
                display={dropDownArrowDisplay}
                active={state ? 'active' : undefined} />
            <UnorderedList $visible={state}
                $start={start}
                $end={end}
            >
                {menuItems.map((menuItem, mIKey) => (

                    <ListItemLink
                        key={mIKey.toString()}
                        to={`/explore/${menuItem.toLowerCase()}`}
                    >
                        {menuItem}
                    </ListItemLink>

                ))}
            </UnorderedList>
        </DropDownWrapper>);
};
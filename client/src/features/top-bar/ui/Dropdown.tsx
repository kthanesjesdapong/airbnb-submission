import { FC, MouseEventHandler } from 'react';
import { UnorderedList, ListItemLink, LinkElement, } from '@shared/ui';
import { DropDownWrapper } from './Dropdown.styled';
import { type ChevronDownIcon } from '@heroicons/react/20/solid';


//Component Rendered in Link.

type DropDownProps = {
    title?: string;
    to: string;
    menuItems: string[];
    callBack: MouseEventHandler<HTMLDivElement>;
    IconSVG: typeof ChevronDownIcon;
    state: boolean;
    start: number;
    end: number;
};

export const DropDown: FC<DropDownProps> = ({ title, to, menuItems, callBack, IconSVG, state, start, end, }) => {
    return (
        <DropDownWrapper
            $visible={state}
            onClick={callBack} className="trigger-button">
            <LinkElement
                to={to}
            >{title}
            </LinkElement>
            <IconSVG className={state ? 'downArrow' : '.rotateUp'} />
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
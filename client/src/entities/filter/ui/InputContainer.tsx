import { ReactElement, cloneElement } from "react";
import { DropDownArrow } from "@shared/ui";
import { useToggle } from "@shared/lib/hooks";
import { useWindowDimensions } from "@shared/lib/hooks";

type CheckBoxProps = {
    filterTitle: string;
    dAWidth: string;
    dADisplay: string;
    children: ReactElement;
    inputContainerActive: boolean;
};


export const InputContainer = ({ filterTitle, dAWidth, dADisplay, children, inputContainerActive }: CheckBoxProps) => {


    const { width } = useWindowDimensions();

    const { status: active, toggleStatus: toggleActive } = useToggle();


    return (
        <div className="filter-wrapper" style={{ display: inputContainerActive || width >= 1024 ? '' : 'none' }}>
            <div className='filter-title-wrapper' onClick={toggleActive}>
                <h4 >{filterTitle}</h4>
                <DropDownArrow
                    width={dAWidth}
                    display={dADisplay}
                    active={active ? active.toString() : undefined}
                />
            </div>

            {cloneElement(children, { active: active })}

        </div>
    );
};
import { ReactElement, cloneElement } from "react";
import { DropDownArrow } from "@shared/ui";
import { useToggle } from "@shared/lib/hooks";

type InputContainer = {
    filterTitle: string;
    dAWidth: string;
    dADisplay: string;
    children: ReactElement;
    inputContainerActive: boolean;
    className?: string;
    currentWindowWidth: number;
};


export const InputContainer = ({ filterTitle, dAWidth, dADisplay, children, inputContainerActive, className, currentWindowWidth }: InputContainer) => {




    const { status: active, toggleStatus: toggleActive } = useToggle();


    return (
        <div className={`filter-wrapper ${className}`} style={{ maxHeight: inputContainerActive || currentWindowWidth >= 1024 ? '500px' : '0' }}>
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
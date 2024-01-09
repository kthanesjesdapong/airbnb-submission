import { StyledInput, StyledLabel } from './UserActionForm.styled';

type UserLabelInputProps = {
    labelTitle: string;
    inputType: string;
    inputName: string;
};

export const UserLabelInput = ({ labelTitle, inputType, inputName }: UserLabelInputProps) => {
    return (
        <>
            <StyledLabel>{labelTitle}</StyledLabel>
            <StyledInput type={inputType} name={inputName} />
        </>
    );
};
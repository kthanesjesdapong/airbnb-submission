import { UserActionForm } from "./UserActionForm";
import { StyledModal } from "./UserActionForm.styled";
import { FormEvent, useState } from "react";
import { loginButtonRoles, signupButtonRole, loginLabelInputs, signUpLabelInputs } from '../';


type UserActionProps = {
    active: boolean;
    activeAction: string;
    handleActive: () => void;
};

export const UserAction = ({ active, activeAction, handleActive }: UserActionProps) => {

    const [currentActiveAction, setActiveAction] = useState(activeAction);

    const setActiveSignUp = () => {
        setActiveAction('Sign Up');
    };

    const activeString = active ? 'true' : '';

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        for (let [key, value] of formData.entries()) {
            console.log(`${key} ${value}`);
        }
    };


    return (
        <>
            <StyledModal $active={activeString}
                onClick={handleActive}
            />
            {currentActiveAction === 'Sign Up' ? (
                <UserActionForm
                    callBack={handleSubmit}
                    labelInputs={signUpLabelInputs}
                    buttonRoles={signupButtonRole}
                    active={active}
                />
            ) : (
                <UserActionForm
                    callBack={handleSubmit}
                    labelInputs={loginLabelInputs}
                    buttonRoles={loginButtonRoles}
                    active={active}
                    setNewActive={setActiveSignUp}
                />

            )}
        </>
    );
};
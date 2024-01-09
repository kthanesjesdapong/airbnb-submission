import { UserActionForm } from "./UserActionForm";
import { StyledModal } from "./UserActionForm.styled";
import { FormEvent } from "react";
import { loginButtonRoles, signupButtonRole, loginLabelInputs, signUpLabelInputs } from '../';



type UserActionProps = {
    activeAction: string;
    setActive: () => void;
    setSignUpAsActive: () => void;
    isActiveString: string;

};

export const UserAction = ({ activeAction, setActive, setSignUpAsActive, isActiveString }: UserActionProps) => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        for (let [key, value] of formData.entries()) {
            console.log(`${key} ${value}`);
        }
    };





    return (
        <>
            <StyledModal $active={isActiveString}
                onClick={setActive}
            />
            {activeAction === 'Sign Up' ? (
                <UserActionForm
                    callBack={handleSubmit}
                    labelInputs={signUpLabelInputs}
                    buttonRoles={signupButtonRole}
                    isActiveStr={isActiveString}

                />
            ) : (
                <UserActionForm
                    callBack={handleSubmit}
                    labelInputs={loginLabelInputs}
                    buttonRoles={loginButtonRoles}
                    isActiveStr={isActiveString}
                    setSignUpAsActive={setSignUpAsActive}
                />

            )}
        </>
    );
};
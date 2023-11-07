import { HeaderContainer } from "./Header.styled";


type HeaderProps = {
    content: string;
    size?: string;
    active?: string;
};

export const Header = ({ content, active }: HeaderProps) => {
    return (
        <HeaderContainer $visible={active === content}>
            <h1>
                {content}
            </h1>
        </HeaderContainer>
    );

};

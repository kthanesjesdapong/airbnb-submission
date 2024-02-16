import { UserSuiteContainer, UserText } from './UserSuite.styled';

type UserSuiteProps = {
  imgUrl?: string;
  userName: string;
  imgHeight: string;
  imgWidth: string;
};

export const UserSuite = ({
  imgUrl,
  userName,
  imgWidth,
  imgHeight,
}: UserSuiteProps) => {
  return (
    <UserSuiteContainer>
      <img
        src={imgUrl}
        alt={`${userName} profile img`}
        style={{
          width: imgWidth,
          height: imgHeight,
          border: '1px',
          borderRadius: '50%',
        }}
      />
      <UserText>{userName}</UserText>
    </UserSuiteContainer>
  );
};

import { userInfoStore } from '../../store/store';

const UserCard = () => {
  const user = userInfoStore((state) => state.user);

  return (
    <>
      <div>
        <h2>이름: {user.name}</h2>
        <p>나이: {user.age}</p>
        <p>언어: {user.preferences.language}</p>
        <p>테마: {user.preferences.theme}</p>
      </div>
    </>
  );
};

export default UserCard;

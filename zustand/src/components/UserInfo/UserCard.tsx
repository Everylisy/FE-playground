import { userInfoStore } from '../../store/store';

const UserCard = () => {
  const { user, updateUser, updatePreferences } = userInfoStore();

  const updateNameHandler = () => updateUser({ name: '하니' });
  const updateAgeHandler = () => updateUser({ age: 18 });
  const updatepreferencesHandler = () => {
    updatePreferences({ theme: 'light', language: 'en' });
  };

  return (
    <>
      <div>
        <h2>이름: {user.name}</h2>
        <p>나이: {user.age}</p>
        <p>언어: {user.preferences.language}</p>
        <p>테마: {user.preferences.theme}</p>
      </div>
      <div>
        <button onClick={updateNameHandler}>이름 바꾸기</button>
        <button onClick={updateAgeHandler}>나이 바꾸기</button>
        <button onClick={updatepreferencesHandler}>설정 바꾸기</button>
      </div>
    </>
  );
};

export default UserCard;

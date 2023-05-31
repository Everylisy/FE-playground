import { userInfoStore } from '../../store/store';

const InfoChangeButtons = () => {
  const updateUser = userInfoStore((state) => state.updateUser);
  const updatePreferences = userInfoStore((state) => state.updatePreferences);

  const updateNameHandler = () => updateUser({ name: '하니' });
  const updateAgeHandler = () => updateUser({ age: 18 });
  const updatepreferencesHandler = () => {
    updatePreferences({ theme: 'light', language: 'en' });
  };

  return (
    <div>
      <button onClick={updateNameHandler}>이름 바꾸기</button>
      <button onClick={updateAgeHandler}>나이 바꾸기</button>
      <button onClick={updatepreferencesHandler}>설정 바꾸기</button>
    </div>
  );
};

export default InfoChangeButtons;

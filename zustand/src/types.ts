import { Draft } from "immer";

export interface MoneyState {
  money: number;
  increaseMoney: () => void;
  decreaseMoney: () => void;
}

export interface UserInfo {
  name: string;
  age: number;
  preferences: {
    theme: string;
    language: string;
  };
}

export interface UserStore {
  user: UserInfo;
  updateUser: (newUser: Partial<UserInfo>) => void;
  updatePreferences: (
    newPreferences: Partial<Draft<UserStore['updatePreferences']>>
  ) => void;
}

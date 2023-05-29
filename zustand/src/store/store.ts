import { create } from 'zustand';
import { MoneyState, UserStore } from '../types';
import { produce } from 'immer';

const TEN_THOUSAND_WON = 10000;

export const useMoneyStore = create<MoneyState>()((set) => ({
  money: 0,
  increaseMoney: () =>
    set((state) => ({ money: state.money + TEN_THOUSAND_WON })),
  decreaseMoney: () =>
    set((state) => ({ money: state.money - TEN_THOUSAND_WON })),
}));

export const userInfoStore = create<UserStore>((set) => ({
  user: {
    name: '해린',
    age: 17,
    preferences: {
      theme: 'dark',
      language: 'kor',
    },
  },
  // Flat update
  updateUser: (newUser) =>
    set((state) => ({ user: { ...state.user, ...newUser } })),

  // Deep update with immer
  updatePreferences: (newPreferences) =>
    set(
      produce((state) => {
        state.user.preferences = {
          ...state.user.preferences,
          ...newPreferences,
        };
      })
    ),
}));

import { create } from 'zustand';
const TEN_THOUSAND_WON = 10000;

interface MoneyState {
  money: number;
  increaseMoney: () => void;
  decreaseMoney: () => void;
}

export const useMoneyStore = create<MoneyState>()((set) => ({
  money: 0,
  increaseMoney: () =>
    set((state) => ({ money: state.money + TEN_THOUSAND_WON })),
  decreaseMoney: () =>
    set((state) => ({ money: state.money - TEN_THOUSAND_WON })),
}));

import { useMoneyStore } from '../../store/store';

function Counter() {
  const money = useMoneyStore((state) => state.money);
  return <h1>잔고는 {money.toLocaleString()}원 입니다.</h1>;
}

export default Counter;

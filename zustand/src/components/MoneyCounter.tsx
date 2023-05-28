import { useMoneyStore } from '../App';

function Counter() {
  const { money } = useMoneyStore();
  return <h1>잔고는 {money.toLocaleString()}원 입니다.</h1>;
}

export default Counter;

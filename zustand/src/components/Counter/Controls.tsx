import { useMoneyStore } from '../../store/store';

const ControlPercent = () => {
  const increaseMoney = useMoneyStore((state) => state.increaseMoney);
  const decreaseMoney = useMoneyStore((state) => state.decreaseMoney);
  return (
    <div>
      <button onClick={() => increaseMoney()}>10000원 증가</button>
      <button onClick={() => decreaseMoney()}>10000원 감소</button>
    </div>
  );
};

export default ControlPercent;

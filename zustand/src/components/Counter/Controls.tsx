import { useMoneyStore } from '../../store/store';

const ControlPercent = () => {
  const { increaseMoney, decreaseMoney } = useMoneyStore();
  return (
    <div>
      <button onClick={() => increaseMoney()}>10000원 증가</button>
      <button onClick={() => decreaseMoney()}>10000원 감소</button>
    </div>
  );
};

export default ControlPercent;

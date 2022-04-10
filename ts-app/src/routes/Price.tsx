import { useOutletContext } from "react-router";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";

const Overview = styled.div<IDarkProps>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isDark ? "rgba(0, 0, 0, 0.5)" : "white"};
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const PriceTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PriceSubTitle = styled.span`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
`;

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface IDarkProps {
  isDark: boolean;
}

function Price() {
  const data = useOutletContext<IPriceData>();
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <PriceTitle>percent change</PriceTitle>
      <Overview isDark={isDark}>
        <PriceSubTitle>hour</PriceSubTitle>
        <OverviewItem>
          <span>6H</span>
          <span>{data?.quotes.USD.percent_change_6h}</span>
        </OverviewItem>
        <OverviewItem>
          <span>12H</span>
          <span>{data?.quotes.USD.percent_change_12h}</span>
        </OverviewItem>
        <OverviewItem>
          <span>24H</span>
          <span>{data?.quotes.USD.percent_change_24h}</span>
        </OverviewItem>
      </Overview>
      <Overview isDark={isDark}>
        <PriceSubTitle>
          <p>date</p>
        </PriceSubTitle>
        <OverviewItem>
          <span>7d</span>
          <span>{data?.quotes.USD.percent_change_7d}</span>
        </OverviewItem>
        <OverviewItem>
          <span>30d</span>
          <span>{data?.quotes.USD.percent_change_30d}</span>
        </OverviewItem>
        <OverviewItem>
          <span>1y</span>
          <span>{data?.quotes.USD.percent_change_1y.toFixed(2)}</span>
        </OverviewItem>
      </Overview>
      <PriceTitle>ETC</PriceTitle>
      <Overview isDark={isDark}>
        <OverviewItem>
          <span>ath price</span>
          <span>{data?.quotes.USD.ath_price.toFixed(3)}</span>
        </OverviewItem>
        <OverviewItem>
          <span>ath date</span>
          <span>{data?.quotes.USD.ath_date.slice(0, 10)}</span>
        </OverviewItem>
        <OverviewItem>
          <span>volume 24h</span>
          <span>{data?.quotes.USD.volume_24h_change_24h}</span>
        </OverviewItem>
      </Overview>
    </>
  );
}

export default Price;

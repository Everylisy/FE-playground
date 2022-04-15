import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
  font-size: 20px;
`;

const Overview = styled.div<IDarkProps>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isDark ? "rgba(0, 0, 0, 0.5)" : "white"};
  margin-top: 5px;
  padding: 10px 20px;
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
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  margin-bottom: 20px;
  gap: 10px;
`;

const Tab = styled.span<IIsActive>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isDark ? "rgba(0, 0, 0, 0.5)" : "white"};
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
    padding: 7px 0px;
  }
`;

interface IDarkProps {
  isDark: boolean;
}

interface IIsActive {
  isActive: boolean;
  isDark: boolean;
}

interface RouterState {
  state: string;
}

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

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

function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation() as RouterState;
  const chartMatch = useMatch("/:coinId/chart");
  const priceMatch = useMatch("/:coinId/price");
  const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<IPriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  const isDark = useRecoilValue(isDarkAtom);

  const loading = infoLoading || tickersLoading;
  return (
    <Container>
      <Helmet>
        <title>{state ? state : loading ? "Loading.." : infoData?.name}</title>
      </Helmet>
      <Header>
        <Title>{state ? state : loading ? "Loading.." : infoData?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Link to={"/"} style={{ color: "#8c7ae6" }}>
            &larr; Back to Home
          </Link>
          <Overview isDark={isDark}>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>{"$" + tickersData?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview isDark={isDark}>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isDark={isDark} isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>chart</Link>
            </Tab>
            <Tab isDark={isDark} isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>price</Link>
            </Tab>
          </Tabs>
          <Outlet context={tickersData} />
        </>
      )}
    </Container>
  );
}

export default Coin;

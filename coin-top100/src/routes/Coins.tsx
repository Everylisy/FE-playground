import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchAllCoinTickers } from "../api";
import { isDarkAtom } from "../atoms";
import { IPriceData } from "./Coin";
import MoonIcon from "../assets/MoonIcon";
import SunIcon from "../assets/SunIcon";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    font-weight: 500;
    transition: color 0.2s ease-in-out;
    padding: 10px 10px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
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

const Rank = styled.span`
  margin-right: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.greyTextColor};
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 20px;
`;

const CoinInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const CoinName = styled.div`
  display: flex;
  flex-direction: column;
`;

const CoinPrice = styled(CoinName)`
  text-align: right;
`;

const Symbol = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.greyTextColor};
`;

const Volume = styled(Symbol)<VolumeProp>`
  color: ${(props) => {
    if (props.percent >= 0) {
      return "#2ecc71";
    } else {
      return "#eb2f06";
    }
  }};
  font-size: 14px;
  font-weight: 500;
`;

const DarkModeBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 20%;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 0.25rem;
  color: ${(props) => props.theme.textColor};
  position: relative;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

interface VolumeProp {
  percent: number;
}

function Coins() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data: tickersData } = useQuery<IPriceData[]>(
    ["allTickers"],
    fetchAllCoinTickers
  );

  return (
    <Container>
      <Helmet>
        <title>COIN</title>
      </Helmet>
      <Header>
        <Title>COIN</Title>
        <DarkModeBtn onClick={toggleDarkAtom}>
          {isDark ? <MoonIcon /> : <SunIcon />}
        </DarkModeBtn>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {tickersData?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={coin.name}>
                <Rank>{coin.rank}</Rank>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                <CoinInfo>
                  <CoinName>
                    {coin.name}
                    <Symbol>{coin.symbol}</Symbol>
                  </CoinName>
                  <CoinPrice>
                    {coin.quotes.USD.price.toFixed(2)}
                    <Volume percent={coin.quotes.USD.percent_change_24h}>
                      {coin.quotes.USD.percent_change_24h + "%"}
                    </Volume>
                  </CoinPrice>
                </CoinInfo>
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;

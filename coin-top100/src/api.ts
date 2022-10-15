const BASE_URL = `https://api.coinpaprika.com/v1`;
const NOMAD_URL = `https://ohlcv-api.nomadcoders.workers.dev`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export function fetchCoinInfo(coinId: string | undefined) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}

export function fetchAllCoinTickers() {
  return fetch(`${BASE_URL}/tickers`).then((res) => res.json());
}

export function fetchCoinTickers(coinId: string | undefined) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}

export function fetchCoinHistory(coinId: string | undefined) {
  return fetch(`${NOMAD_URL}?coinId=${coinId}`).then((res) => res.json());
}

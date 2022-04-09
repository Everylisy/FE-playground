import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface IChartProps {
  isDark: boolean;
}

function Chart({ isDark }: IChartProps) {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart.."
      ) : (
        <ReactApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close) as number[],
            },
          ]}
          options={{
            theme: { mode: isDark ? "dark" : "light" },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: { show: false },
            xaxis: {
              axisTicks: { show: true },
              axisBorder: { show: true },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#9980FA"], stops: [0, 100] },
            },
            colors: ["#FDA7DF"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;

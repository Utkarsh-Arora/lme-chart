import "./App.css";
import BarChart from "./components/BarChart";
import BarChart2 from "./components/BarChart2";
import LineChartCommodity from "./components/LineChart";
import NavBar from "./components/NavBar";
import CommodityTable from "./components/Table";

function App() {
  return (
    <>
      <NavBar />
      <p className="text">Average Monthly Prices for Commodity</p>
      <div className="charts">
        <BarChart />
        <BarChart2 />
      </div>
      <p className="text">
        Data for commodity for past six months (monthly Averages) (Jan-2022 to
        Jun-2022)
      </p>
      <LineChartCommodity />
      <p className="text">Today's Commodity Prices</p>
      <CommodityTable />
    </>
  );
}

export default App;

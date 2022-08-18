
import './App.css';
import BarChart from './components/BarChart';
import BarChart2 from './components/BarChart2';
import NavBar from './components/NavBar';
import CommodityTable from './components/Table';


function App() {
  return (
    <> 
    <NavBar />
    <p className="text">Average Monthly Prices for Commodity</p>
    <div className="charts">
      <BarChart />
      <BarChart2 />
    </div>
    <p className="text">Today's Commodity Prices</p>
    <CommodityTable />
    </>
  );
}

export default App;

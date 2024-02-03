import AdminProfile from "./component/AdminProfile";
import Graphdata from "./component/Graphdata";
import PieChartComponent from "./component/PieChartComponent ";
import TableData from "./component/TableData";

function App() {
  return (
    <div className="m-auto" style={{ backgroundColor: '#BBE2EC' }}>
      <h4>Good Morning 🌞</h4>
      <div className="col-12 row  d-flex justify-content-between">
        <div className="col-7 bg-light shadow rounded">
          <PieChartComponent />
        </div>
        <div className="col-4 bg-light shadow rounded">
          <Graphdata />
        </div>
        <div className="col-12  d-flex gap-3 m-2">
          <div className="col-9 bg-light shadow rounded">
            <TableData />
          </div>
          <div className="col-3 bg-dark">
            <AdminProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

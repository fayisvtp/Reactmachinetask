import AdminProfile from "./component/AdminProfile";
import Graphdata from "./component/Graphdata";
import PieChartComponent from "./component/PieChartComponent ";
import TableData from "./component/TableData";
import './App.css'

function App() {
  return (
    <div className=" main-container" style={{ backgroundColor: '#BBE2EC' }}>
      
      <div className="col-12 row d-flex justify-content-between">
        <div className="col-7 bg-light shadow m-auto rounded"style={{ width: "100%", maxWidth: "700px"}}>
          <PieChartComponent />
        </div>
        <div className="col-4 bg-light shadow rounded" >
          <Graphdata />
        </div>
        <div className="col-12 d-flex gap-3 m-2">
          <div className="col-9 bg-light shadow rounded m-auto" style={{ width: "100%", maxWidth: "700px"}}>
            <TableData />
          </div>
          <div className="col-3 rounded">
            <AdminProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

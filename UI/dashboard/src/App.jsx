import AdminProfile from "./component/AdminProfile"
import Graphdata from "./component/Graphdata"
import PieChartComponent from "./component/PieChartComponent "
import TableData from "./component/TableData"


function App() {


  return (
    <div className="bg-success">
      <div className="col-12 row d-flex">
        <div className="col-7 bg-danger">
        <PieChartComponent/>
        </div>
        <div className="col-5 bg-wanrning">
        <Graphdata/>
        </div>
        <div className="col-9 ">
        <TableData/>
        <div className="col-3  bg-dark">
          fsfskjjhgkjsh
        </div>
        </div>
      </div>

     
   
    </div>
  )
}

export default App

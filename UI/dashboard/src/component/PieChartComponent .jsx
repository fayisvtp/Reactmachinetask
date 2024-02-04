import React, { useEffect, useState } from "react";
import axios from "axios";

const PieChartComponent = () => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/pie-chart");
        console.log("faf", response.data);
        setPieChartData(response.data.chart);
      } catch (error) {
        console.error("Error fetching pie chart data:", error);
      }
    };

    fetchData();
  }, []);

  var xValues = [];
  var yValues = [];
  var barColors = ["#439A97", "#59C1BD", "#A0E4CB", "#8EC3B0", "#68B984"];

  pieChartData.map((item) => {
    xValues.push(item.label);
    yValues.push(item.value);
  });
  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
       
      },
    },
  });

  return (
    <div>
      <h4>Good Morning 🌞 </h4>
      <canvas id="myChart" style={{ width: "100%", maxWidth: "650px"}}>
        {" "}
      </canvas>
    </div>
  );
};

export default PieChartComponent;

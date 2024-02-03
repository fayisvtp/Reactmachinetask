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
  var barColors = ["red", "green", "blue", "orange", "brown"];

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
        text: "PieChartData",
      },
    },
  });

  return (
    <div>
      <canvas id="myChart" style={{ width: "100%", maxWidth: "900px" }}>
        {" "}
      </canvas>
    </div>
  );
};

export default PieChartComponent;

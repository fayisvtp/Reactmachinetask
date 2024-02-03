import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';  // Import Chart library

export default function Graphdata() {
  const [graphData, setGraphData] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/graph");
        console.log("Graph", response.data);
        setGraphData(response.data.graph);
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (graphData.length > 0 && canvasRef.current) {
      const xValues = graphData.map(item => item.x);
      const yValues = graphData.map(item => item.y);
      const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

      new Chart(canvasRef.current, {
        type: "pie",
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
          title: {
            display: true,
            text: "Graph Data",
          },
        },
      });
    }
  }, [graphData]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ width: '100%', maxWidth: '500px' }} />
    </div>
  );
}
import { Bar, Line } from 'react-chartjs-2';
import './App.css'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);
import revenue from "./assets/revenueData.json"

function App() {

  return (
    <>
      <div className="div">
        
        <div className="data revenue">
        <Line
          data={{
            labels: revenue.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenue.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: revenue.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          />
        </div>

        <div className="data customer">
          <Bar
            data = {{
              labels: ['A', 'B', 'C'],
              datasets: [
                {
                  label: 'Revenue',
                  data: [200, 300, 400],
                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
                {
                  label: 'Loss',
                  data: [90, 80, 70],
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ],
            }}
          />
        </div>

        <div className="data category">Chart 3 </div>
      </div>
    </>
  )
}

export default App;

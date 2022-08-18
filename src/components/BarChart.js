import React from 'react';

import {Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
   
    const state = {
        labels: [ 'Copper', 'Nickel', 'Tin',
                 'Cobalt'],
        datasets: [
          {
            label: 'Contract Average Price ($)',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [ 9033.13, 25837.5, 31776.75, 72077.75]
          }
        ]
      }
      
    return (
        <div style={{width: "500px",
            height: "150px"}}>
          <Bar
            data={state}
            options={{
              responsive: true,
              title:{
                display:true,
                text:'LME indexes',
                fontSize:20
              },
              legend:{
                display:true,
                position:'center'
              },
              scales: {
            y: {
                suggestedMin: 0,
                stepSize: 5000,
                suggestedMax: 80000
            }
        }
            }}
          />
        </div>
      );
}





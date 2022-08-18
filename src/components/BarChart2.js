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

export default function BarChart2() {
   
    const state = {
        labels: ['Aluminium', 'Aluminium Alloy', 'Lead', 'Zinc',
                 'Steel Rebar', 'Steel Scrap'],
        datasets: [
          {
            label: 'Contract Average Price ($)',
            backgroundColor: "#6970d5" ,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [2562.93, 1801, 2067.38, 3643.95, 704.67, 392.1]
          }
        ]
      }
      
    return (
        <div style={{width: "550px",
            height: "300px", marginLeft:"50px"}}>
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
                suggestedMax: 8000
            }
        }
            }}
          />
        </div>
      );
}





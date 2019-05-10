import React from 'react';
import {Pie} from 'react-chartjs-2';

function PieChart(props) {
        return (
            <div className="pie-chart">
                <Pie 
                    data={{
                        labels: ['PAC Contributions', 'Individual Contributions'],
                        datasets: [{
                            data: props.financeData,
                            backgroundColor: ["#e83641", "#427a9e"],
                            borderColor: "white",
                            borderWidth: 1
                        }]
                    }}
                    options={{
                        responsive: false,
                        title:{
                            display:true,
                            text: "Campaign Finance Sources",
                            fontSize: 16,
                            padding: 1
                        },
                        legend:{
                            position: 'bottom',
                            fullWidth: false,
                            labels:{
                                boxWidth: 20,
                            }
                        }
                    }}
                />
            </div>
        );
    
}

export default PieChart;
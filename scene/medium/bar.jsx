import {Bar} from "react-chartjs-2";
import {
    Chart as Chartjs, CategoryScale, LinearScale, BarElement,Title, Tooltip, Legend
} from "chart.js";
import { barChartData } from "../../data/data";
import {Typography} from "@mui/material";
import { KeyboardArrowDownSharp } from "@mui/icons-material";

Chartjs.register(
     CategoryScale, LinearScale,BarElement,Title, Tooltip, Legend)

export const BarCharts = ()=>{
    
    const options ={
        responsive:true,
        plugins: {
            legend: {
                display: false,
            },
            title:{
                display:false,
            },
            scales:{
              x: {
                grid:{
                  display:false,
                  drawTicks:false,
              }
              }
            }
         
        
        }
    };
    return<div  style={{display:"flex",alignItems:'center',justifyContent:'center',width:"650px",bottom:"0", height:"220px", left:'-5%', position:"absolute"}}> 
    <Typography fontWeight="bolder" position="absolute" fontSize="20px" left="14%" top="-10%">
    Statistics
    <Typography fontWeight="bolder" position="absolute" fontSize="20px" right="-598%" width="84px" height="34px" top="-6%" borderRadius="20px" bgcolor="white" display="flex" alignItems="center" justifyContent="space-around">
        Year <KeyboardArrowDownSharp />
    </Typography>
    </Typography> <Bar options={options} data={barChartData} />  </div>
}

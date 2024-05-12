import {Bar} from "react-chartjs-2";
import {
    Chart as Chartjs, CategoryScale, LinearScale, BarElement,Title, Tooltip, Legend
} from "chart.js";
import { barChartData } from "../../data/data";
import {Typography,Box} from "@mui/material";


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
    return<Box gridTemplateColumns="repeat(auto-fit, minmax (250px 1fr))" style={{display:"flex",alignItems:'center',justifyContent:'center',width:"650px",bottom:"0", height:"220px", left:'-5%', position:"absolute"}}> 
    <Typography fontWeight="bolder" position="absolute" fontSize="20px" m="auto" left="4%" top="-10%">
    <Typography m="auto" fontWeight="bolder" position="absolute" fontSize="30px" left="4%" top="-72%">Statistics</Typography>
    
    <Typography fontWeight="bolder" position="absolute" fontSize="20px" left="29rem" m="auto" width="84px" height="34px" top="-66%" borderRadius="20px" bgcolor="white" display="flex" alignItems="center" justifyContent="space-around">
    
        
        <select  defaultValue={"year"} name="year" id="" style={{fontSize:"20px"}}>
<option value="2024">Year</option>
<option value="2024" style={{fontSize:"14px"}}>2024</option>
<option value="2023" style={{fontSize:"14px"}}>2023</option>
<option value="2022" style={{fontSize:"14px"}}>2022</option>
<option value="2022" style={{fontSize:"14px"}}>2022</option>
        </select>
    
         
    </Typography>
    </Typography> <Bar options={options} data={barChartData} />  </Box>
}

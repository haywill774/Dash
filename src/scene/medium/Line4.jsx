import {Line} from "react-chartjs-2";
import {
    Chart as Chartjs, CategoryScale, LinearScale,PointElement,LineElement
} from "chart.js";
import {Typography} from "@mui/material";

Chartjs.register(
     CategoryScale, LinearScale,PointElement,LineElement)


const Line4 = () => {
    const data = {
        labels:["",'',"",""],
        datasets: [{
            data:[8,'4',7,9],
            backgroundColor:'grey',
        borderColor:'#888',
        pointBorderColor:'transparent',
        pointBorderwidth:4,
        tension:0.5
        }],
        
    }
    const options ={
        plugins:{
            legend:false
        },
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                min:0,
                max:8,
                ticks:{
                    stepSize:5,
                    // callback:(value) => value +"k"
                },
                grid:{
                    display:false,
                    
                }
            }
        }
    }

  return (
    <div  style={{display:"flex",alignItems:'center',justifyContent:'center',width:"230px", height:"300px", marginLeft:'38px',marginBottom:"-120px",  position:"absolute"}}> 
    <Typography style={{fontWeight:"lighter"}} sx={{position:"absolute", top:"-14px", color:"grey"}}>
        ORDERS
        <Typography sx={{fontWeight:"bolder", color:"blue", fontSize:"23px"}} >
            2,980
        </Typography>
    </Typography>
    <Line data={data} options={options} > 
    
    </Line> </div>
  )
}

export default Line4
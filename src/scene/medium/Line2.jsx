import {Line} from "react-chartjs-2";
import {
    Chart as Chartjs, CategoryScale, LinearScale,PointElement,LineElement
} from "chart.js";
import {Typography} from "@mui/material";

Chartjs.register(
     CategoryScale, LinearScale,PointElement,LineElement)


const Line2 = () => {
    const data = {
        labels:["",'',"","","","","",""],
        datasets: [{
            data:[30,10,10,20,20,18,28],
            backgroundColor:'transparent',
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
                max:30,
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
    <div  style={{display:"flex",alignItems:'center',justifyContent:'center',width:"340px", height:"110px", marginLeft:'-0px',marginBottom:"-130px", position:"absolute"}}> 
    <Typography style={{fontWeight:"lighter"}} sx={{position:"absolute", left:"110px", top:"-124px", color:"grey"}}>
        CUSTOMERS
       
    </Typography>
    <Typography sx={{fontWeight:"bolder", color:"blue", fontSize:"23px",position:"absolute", left:"125px", top:"-104px"}} >
          4,628
        </Typography>
    <Line data={data} options={options}> </Line> </div>
  )
}

export default Line2
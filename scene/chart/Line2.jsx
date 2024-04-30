import {Line} from "react-chartjs-2";
import {
    Chart as Chartjs, CategoryScale, LinearScale,PointElement,LineElement
} from "chart.js";


Chartjs.register(
     CategoryScale, LinearScale,PointElement,LineElement)


const Line2 = () => {
    const data = {
        labels:["",'',"",""],
        datasets: [{
            data:[2,'8',7,6],
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
                max:10,
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
    <div  style={{display:"flex",alignItems:'center',justifyContent:'center',width:"140px", height:"90px", marginLeft:'-90px', position:"absolute"}}> <Line data={data} options={options}> </Line> </div>
  )
}

export default Line2
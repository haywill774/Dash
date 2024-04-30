import {Line} from "react-chartjs-2";
import {
    Chart as Chartjs, CategoryScale, LinearScale,PointElement,LineElement
} from "chart.js";


Chartjs.register(
     CategoryScale, LinearScale,PointElement,LineElement)


const Lines = () => {
    const data = {
        labels:["Sun",'',"mon","","tue",'', "wed",'',"thur",'', "fri",'', "sat"],
        datasets: [{
            data:[2,'3',7,7,5,5,8,8,5,5,8,9],
                    backgroundColor:'transparent',
        borderColor:'red',
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
                
                ticks:{
                    stepSize:5,
                    backgroundColor:"red"
                    // callback:(value) => value +"k"
                },
                grid:{
                    display:false,
                    
                }
            }
        }
    }

  return (
    <div  style={{display:"flex",alignItems:'center',justifyContent:'center',width:"320px", height:"300px", marginLeft:'-30px'}}> <Line data={data} options={options}> </Line> </div>
  )
}

export default Lines
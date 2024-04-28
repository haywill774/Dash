export const lineGraphData ={
    labels:[
            "sun", "mon", "tue","wed","thur", "fri", "sat"
    ],
    datasets:[
        {
            label: "steps",
            data:[300,400,500,600,700,800],
            borderColor:"red",
            backgroundColor:["red"],
        }
    ]
};

export const barChartData ={
    labels: [
       "", "Nov","", "Dec", " ", "jan","", "feb","", "mar", "","apr","", "may","", "jun"
    ],
    datasets:[
        {
            label: "Expenses",
            data: [4000, 5000, 2000,1000,2000,4000, 5000, 2000,1000,2000,4000, 5000, 2000,1000,2000,],
            borderColor:["green"],
            backgroundColor:["white","green","blue","blue","red","blue"],
            borderWidth:0.4,
            pointBorderColor:'transparent',
        pointBorderwidth:4,
        tension:0.5
            
            
        }
        
        
    ]
}

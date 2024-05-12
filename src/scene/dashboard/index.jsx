import {Box,useTheme,Typography,Button} from "@mui/material";
import { tokens } from "../../../theme";
import Lines from "../chart/Line";
import { BarCharts } from "../chart/bar";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { AccessTimeFilled, AddBoxSharp, KeyboardArrowRightSharp, MoreHorizSharp, PlayCircleFilled, ShoppingBag, Star,  TaxiAlert,  } from "@mui/icons-material";
import { RiNetflixFill } from "react-icons/ri";
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import Line2 from "../chart/Line2";
import Line3 from "../chart/Line3"

// import { Scrollbar } from 'react-scrollbars-custom';



const Dashboard = () => {

    const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
    
  return (
    
    <Box display={"grid"} gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="178px" gap="10px" ml="8%">
  {/* <Scrollbar style={{ width: 250, height: 100 }}> */}

    {/* ROW 1 */}
    <Box position="relative" gridColumn="span 3" bgcolor={colors.white[600]} display="flex" borderRadius="10px" justifyContent="space-around" alignItems="center" sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)",display:{xs:"none",md:"none",lg:"flex"} }}>
      <Lines  />
      <Typography position="absolute" right="5%" color="grey" fontSize="10px">
        VISITORS
        <Typography fontWeight="bolder">
        10,320
      </Typography>
      </Typography>
    </Box>
    <Box gridColumn="span 3" bgcolor={colors.white[600]} display="flex" justifyContent="center" borderRadius="10px" alignItems="center" sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)",  display:{xs:"none",md:"none",lg:"flex"}}}>
    <Line2  />
    <Typography position="absolute" left="43%" color="grey" fontSize="10px">
        VISITORS
        <Typography fontWeight="bolder">
        4,628
      </Typography>
      </Typography>
</Box>
  <Box gridColumn="span 3" bgcolor={colors.red[600]} display="flex" justifyContent="center" alignItems="center" borderRadius="10px" sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)", display:{xs:"none",md:"none",lg:"flex"}}} >
  <Lines  />
  <Typography position="absolute" left="63%" color="lightGrey" fontSize="12px">
        ORDERS
        <Typography fontWeight="bolder" color="white">
        2,980
      </Typography>
      </Typography>
</Box>

              {/* external */}

            <Box gridColumn="span 3" gridRow="span 4" bgcolor={colors.white[100]} display="flex" justifyContent="center" alignItems="center" position="relative" mb="0rem" borderRadius="15px" mr={-6} width="18rem" sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)", display:{xs:"none",md:"none",lg:"flex"}}}  >
      <Box >
        <Box position="relative" m="0">
        <DriveFileRenameOutlineSharpIcon style={{color:"grey", position:"absolute", right:'20', top:"-80px"}} />
        <Button  style={{position:"absolute", right:"-18px",background:colors.purple[800], borderRadius:"15%",top:"-20px" }}>
                      $10,000
                    </Button>
                    <Stack position="relative" spacing={2} direction="row">
                    <Button  style={{background:colors.white[200], display:"flex",alignItems:"center", top:"-10px",justifyContent:"center",width:"90px",height:"90px", borderRadius:"50%", position:"absolute", left:"33%", boxShadow: "inset 3px 3px 21.5px 2px #fffcfc"}}>

                    <Button  style={{background:colors.white[200], width:"40px",height:"60px", borderRadius:"50%",fontWeight:"bolder", fontSize:"20px", boxShadow: "inset 3px 3px 21.5px 2px #fffcfc"}}>
                      38%
                      </Button>
                      
                    </Button>
                    <CircularProgress size="6rem" variant="determinate" style={{position:"absolute", left:"26%", top:"-9px",color:"blue"}} value={65} />
                    </Stack>
       
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" position="relative" marginTop="100px">
        
        <Typography style={{position:"absolute", left:"10px",top:"1px" ,fontWeight:"bolder", fontSize:"20px", }} >
        My card 
        </Typography>
        
                    <MoreHorizSharp style={{position:"absolute", right:"25px", top:"1px"}} />
                    <img src="../../../assets/atm2.jpg" width="60%" height="60%" style={{margin:"35px", borderRadius:"10%"}} alt="" />
          </Box>

          <Box position="relative" mb="-10px">
          <Box display="flex" ml="10px" mb="-90px" >
          <Typography style={{fontWeight:"bolder", fontSize:"15px"}}>
                    Transaction 
                    <AddBoxSharp style={{position:"absolute", right:"20px", color:"red", borderRadius:"40px" }}/>
              
                    <Typography position="relative" mt="23px" style={{width:"40px", height:"40px", backgroundColor:"white", borderRadius:"10px",display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <TaxiAlert style={{color:"red"}} />
                    <Typography position="absolute" style={{top:"1px", left:"39px", fontWeight:"bolder"}}>
                    Taxi 
                    <Typography fontSize="11px" color="grey" ml="5px">
                      01:21pm
                      </Typography>
                      <Box>
                      <Typography position="absolute" style={{top:"10px", right:"-165px",fontWeight:"bolder"}}>
                      -$9.25 
                    </Typography>
                    </Box>
                    </Typography>
                    </Typography>

                    <Typography  position="relative" mt="35px" style={{width:"40px", height:"40px", backgroundColor:"white", borderRadius:"10px",display:"flex", justifyContent:"center", alignItems:"center"}}> 
                    <ShoppingBag style={{color:"red"}} />
                    <Typography position="absolute" style={{top:"1px", left:"39px", fontWeight:"bolder"}}>
                    Shopping 
                    <Typography fontSize="11px" color="grey" ml="5px">
                      01:21pm 
                      </Typography>
                      <Typography  position="absolute" style={{top:"10px", right:"-150px",fontWeight:"bolder"}}>
                      -$142.00
                    </Typography>
                    </Typography>
                    </Typography>

                    <Typography position="relative" mt="35px" style={{width:"40px", height:"40px", backgroundColor:"white", borderRadius:"10px",display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <RiNetflixFill style={{color:"red"}} />
                    <Typography  position="absolute" style={{top:"1px", left:"39px", fontWeight:"bolder"}}>
                    Netflix
                    <Typography fontSize="11px" color="grey" ml="5px">
                      01:21pm 
                      </Typography>
                      <Typography  position="absolute" style={{top:"10px", right:"-165px",fontWeight:"bolder"}}>
                      -$24.99
                    </Typography>
                    </Typography>
                    </Typography>
                    
        </Typography>
          </Box>
          </Box>
          </Box>
</Box>

      

        {/* ROW 2 */}
        <Box gridColumn="span 9" gridRow="span 2" bgcolor={colors.white[600]} display="flex" justifyContent="center" alignItems="center" 
         sx={{display:{xs:"none",md:"none",lg:"flex"}}}>
      
    <BarCharts  />
</Box>
            {/* ROW 3 */}
          
            <Box gridColumn="span 5"  bgcolor={colors.white[600]} display="flex" justifyContent="center" mt="-4px"  alignItems="center" mr={"10px"} sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)", display:{xs:"none",md:"none",lg:"flex", }}} >
            
            <Line3 />
            </Box>

  <Box  gridColumn="span 4" bgcolor={colors.white[600]}  justifyContent="center" alignItems="center"  
   m="2px" sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)", display:{xs:"none",md:"none",lg:"flex"}}} >
    <Box>
      <Box container display="flex" justifyContent="flex-start" mt="-4px"  >
      <img src="../../../assets/profile2.jpg" width="40px" height={40} style={{margin:"5px", borderRadius:"50%"}} alt="" />
        <Typography style={{margin:"5px 1px 5px 1px", fontWeight:"bolder"}}>
          Lilly donovan
          <Typography color="grey">business trainer</Typography>
        </Typography>
        </Box>
        <Typography fontWeight="bold" m="1px">
          how to properly manage your personal budget?
        </Typography>
        <Box display="flex" justifyContent="space-around" ml="-20px" mt="-6px" alignItems="center">
        <Button sx={{textTransform:"lowercase",color:"grey", alignItems:"center", display:"flex", justifyContent:"center"}}> 
        <PlayCircleFilled  style={{color:"purple"}}/> 
        <Typography>video</Typography>
      </Button>
      <Button sx={{textTransform:"lowercase",color:"grey", alignItems:"center", display:"flex", justifyContent:"center"}}>
        <AccessTimeFilled style={{color:"Blue"}} />
        <Typography fontSize="13px">15 mins</Typography> 
      </Button>  
        <Button sx={{textTransform:"lowercase",color:"grey", alignItems:"center", display:"flex", justifyContent:"center"}}>
        <Star style={{color:"red", }} />
        <Typography fontSize="13px">12 likes</Typography> 
        </Button>
        </Box>
<Box display="flex" justifyContent="space-between" alignItems="center " position="relative" mt="-1px">
      <Typography>
        5 days ago
      </Typography>
      <Button  size="small" sx={{backgroundColor:colors.purple[800], borderRadius:"10px", height:"25px", width:"100px",color:"white",display:"flex", justifyContent:"center", alignItems:"center", mt:"-7px", ":hover":{color:"white", background:"purple"} }}>
      Connect <KeyboardArrowRightSharp  />
      </Button>
</Box>
</Box>
      </Box>

</Box>

                
   
  )
}

export default Dashboard
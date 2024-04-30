import {Box, Badge,IconButton,useTheme,styled,Typography,Button} from "@mui/material";

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

import { AiFillPieChart } from "react-icons/ai";
import { RiChatSmileFill } from "react-icons/ri";

import {MoreHorizSharp} from '@mui/icons-material';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { PiChatTeardropFill } from "react-icons/pi";
import SignalCellularAltSharpIcon from '@mui/icons-material/SignalCellularAltSharp';
import { RiGalleryFill } from "react-icons/ri";
import { tokens } from "../../../theme";


const StyledIcon = styled(Box)(()=>({
  display:"flex",
  alignItems:"center",
  flex:1,
}))

const Mobile = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <Box display="flex" justifyContent="space-around" gap="20px" ml="8%" bgcolor={colors.white[100]}  position="relative" height="100vh"  mb="-3rem"  borderRadius="1%" sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)", display:{xs:"flex",sm:"none",md:"none",lg:"none"}}}>

        <Box>
        <IconButton >
    <PiChatTeardropFill  style = {{transform: 'rotate(270deg)', color:"purple", display:"flex", marginLeft:"-92px",boxShadow: " 3px 3px 21.5px 2px #fffcfc", position:"absolute", left:"10px",top:"6px"}}  />
    </IconButton>

    <StyledIcon  position="absolute" display="flex" sx={{top:"2px", left:"79%"}}>
      <IconButton>
          <Badge badgeContent={1} color="error" variant="dot">
            <NotificationsOutlinedIcon />
            </Badge>  
          </IconButton>
      <IconButton >
            <img 
            style={{width:30, borderRadius:"9px"}}
            src="../../../assets/profile.jpg" 
            alt="" />
       </IconButton>
      </StyledIcon>
        </Box>

        <Box>
        <Box sx={{bgcolor:"none"}}  position="absolute" left="40%" top="4rem" >
       <Button sx={{bgcolor:"white", borderRadius:'10px', height:"27px", zIndex:"1"}}>
        <SignalCellularAltSharpIcon  />
       </Button>
       <Button  sx={{borderRadius:'10px',bgcolor:"skyBlue",height:"27px",left:"-5px"}}>
        <RiGalleryFill />
       </Button>

      <Typography mt="20px" ml="10px" variant="h6">
        Total Sales
      </Typography>

      <Button sx={{width:"60px", display:"flex", justifyContent:"center", flex:1,height:"40px", bgcolor:"purple", borderRadius:"15%",color:"white", ml:"138%",}} >
        $10,600
      </Button>

      <Box>
                    <Stack position="relative" spacing={2} direction="row">
                    <Button  style={{background:colors.white[200], display:"flex",alignItems:"center",justifyContent:"center",width:"90px",height:"90px", borderRadius:"50%", position:"absolute", left:"8%", boxShadow: "inset 3px 3px 21.5px 2px #fffcfc",top:"1px"}}>

                    <Button  style={{background:colors.white[200], width:"40px",height:"60px", borderRadius:"50%",fontWeight:"bolder", fontSize:"20px", boxShadow: "inset 3px 3px 21.5px 2px #fffcfc", bottom:"1px"}}>
                      38%
                      </Button>
                      
                    </Button>
                    <CircularProgress size="6rem" variant="determinate" style={{position:"absolute", left:"2%", top:"1px",color:"blue"}} value={65} />
                    </Stack>
        </Box>

        <Box position="relative" marginTop="10rem" left="-15rem">
        
        <Typography style={{position:"absolute", left:"8%",top:"-4rem" ,fontWeight:"bolder", fontSize:"20px", }} >
        My card
        </Typography>
        <MoreHorizSharp  sx={{ position:"absolute",  left:"32rem", top:"-4rem"}} />
                    
                    <IconButton >
                    <img src="../../../assets/atm2.jpg" 
                     style={{ position:"absolute", maxWidth:"435px", height:"250px", borderRadius:"10%",left:"10rem", top:"-1.5rem" }}
                     alt="atm" />
                    </IconButton>
                   
          </Box>

          
            <Box >
            <Box position="absolute" gridColumn="span 3" bgcolor={colors.white[600]} display="flex" bottom="-18rem" borderRadius="40px" height="4.5rem"  justifyContent="space-around" alignItems="center" sx={{ bgcolor:"purple", width:"36rem", left:"-14.5rem"}}>
        <Stack direction="row" spacing={10} display="flex" >
          <IconButton sx={{width:"40px", bgcolor:"white", borderRadius:"10px", top:"-35px",boxShadow: "5px 5px 1px #f0f0f0", left:"-22%"}}>
          <HomeSharpIcon  sx={{color:"red" }}  />
          </IconButton>
          <IconButton sx={{left:"-25%"}}>
           <AiFillPieChart sx={{color:"red" }} />
          </IconButton>
          <IconButton sx={{left:"-11%"}}>
            <RiChatSmileFill  />
          </IconButton>
          <IconButton sx={{left:"-1%"}}>
                <RiChatSmileFill  />
          </IconButton>
        </Stack>
</Box>
           
          </Box>

       </Box>
        </Box>


{/* external small screen */}
{/* <Box gridColumn="span 9" gridRow="span 4" bgcolor={colors.white[100]} display="flex" justifyContent="center" alignItems="center" position="relative" left="90px" mb="-3rem" mt="1rem" borderRadius="15px" sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)", display:{xs:"none",sm:"flex",md:"none",lg:"none"}}}  >
    
     

   

   
        
        <Box display="flex" justifyContent="center" alignItems="center" position="relative" marginTop="100px">
        
        <Typography style={{position:"absolute", left:"5%",top:"-30px" ,fontWeight:"bolder", fontSize:"20px", }} >
        My card 
        
        </Typography>
        <MoreHorizSharp  sx={{ position:"absolute",  left:"90%", bottom:"26%"}} />
                    
                    <Box display="flex" justifyContent="center" sx={{margin:"5px",  marginBottom:"-20rem"}}>
                    <img src="../../../assets/atm2.jpg" width="40%" height="40%" 
                     style={{ borderRadius:"10%", }}
                     alt="" />
                    </Box>
                    
          </Box>


          </Box>
</Box> */}


    </Box>
  )
}

export default Mobile
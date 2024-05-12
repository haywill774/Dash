import {Box, Badge,IconButton,useTheme,styled,Typography,Button, Grid} from "@mui/material";

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
import useMediaQuery from '@mui/material/useMediaQuery'





const StyledIcon = styled(Box)(()=>({
  display:"flex",
  alignItems:"center",
  flex:1,

}))


const Mobile = () => {

  const isMatch = useMediaQuery("(min-width:300px) and (max-width:600px)")
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

   
  return (
      <>   
      <Grid gridTemplateColumns="repeat(auto-fit, minmax(500px,1fr))" item xs={"auto"} tm={"none"}>
      {isMatch ? (
       <Box   className="display:flex justify-center  bg-gray-200 " gap="20px"   position="relative" width="100vw" height="125vh" bottom={-4}  borderRadius="2%" sx={{ boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)", }}>
        <Box>
        <IconButton >
    <PiChatTeardropFill  style = {{transform: 'rotate(270deg)', color:"purple", display:"flex", marginLeft:"-95px",boxShadow: " 3px 3px 21.5px 2px #fffcfc", position:"absolute", left:"120px",top:"6px"}}/>
    </IconButton>

    <StyledIcon  position="absolute" display="flex" sx={{top:"2px", right:"5%"}}>
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

        <Box >
        <Box sx={{bgcolor:"none"}}  position="absolute" left="28%" top="6rem" >
       <Button sx={{bgcolor:"white", borderRadius:'10px', height:"27px", ml:"30px"}}>
        <SignalCellularAltSharpIcon  />
       </Button>
       <Button  sx={{borderRadius:'10px',bgcolor:"skyBlue",height:"27px",left:"-5px"}}>
        <RiGalleryFill />
       </Button>
       </Box>

      <Typography sx={{position:"absolute", top:"9.5rem", fontWeight:"bolder",left:"36%" }}>
        Total Sales
      </Typography>

      <Button sx={{width:"60px", display:"flex", justifyContent:"center", flex:1,height:"40px", bgcolor:"purple", borderRadius:"15%",color:"white", right:"-2%", position:"absolute", zIndex:"1", top:"14rem"}} >
        $10,600
      </Button>

      <Box>
                    <Stack position="relative" spacing={2} direction="row" left="39%">
                    <Button  style={{background:colors.white[200], display:"flex",alignItems:"center",justifyContent:"center",width:"90px",height:"90px", borderRadius:"50%", position:"absolute", boxShadow: "inset 3px 3px 21.5px 2px #fffcfc",top:"16rem"}}>

                    <Button  style={{background:colors.white[200], width:"40px",height:"60px", borderRadius:"50%",fontWeight:"bolder", fontSize:"20px", boxShadow: "inset 3px 3px 21.5px 2px #fffcfc", bottom:"1px"}}>
                      38%
                      </Button>
                      
                    </Button>
                    <CircularProgress size="6rem" variant="determinate" style={{position:"absolute", left:"-9px", top:"16rem",color:"blue"}} value={65} />
                    </Stack>
        </Box>

        <Box position="relative" marginTop="10rem" left="40%">
        
        <Typography style={{position:"absolute", left:"-36%",top:"15.2rem" ,fontWeight:"bolder", fontSize:"20px", }} >
        My card
        <MoreHorizSharp  sx={{ mr:"30%" , position:"absolute",  right:"-190%"}} />
        </Typography>
        
                    
                    <IconButton >
                    <img src="../../../assets/atm2.jpg" width="229px" 
                     style={{  borderRadius:"10%", marginLeft:"-80%", marginTop:"154%",
                     marginBottom:"15px"  }}
                     alt="atm" />
                    </IconButton>
                   
          </Box>

          
            <Box >
            <Grid   bgcolor={colors.white[600]} display="flex" marginBottom="-3.5rem" borderRadius="40px" height="4.5rem"  justifyContent="space-around" alignItems="center"  sx={{ bgcolor:"purple", zIndex:"-1"}}>
        <Stack direction="row" spacing={4} display="flex" >
          <IconButton sx={{width:"40px", bgcolor:"white", borderRadius:"10px", top:"-33px",boxShadow: "5px 5px 1px #f0f0f0", left:"4%"}}>
          <HomeSharpIcon  sx={{color:"red", position:"absolute" }}  />
          </IconButton>
          <IconButton sx={{left:"5%"}}>
           <AiFillPieChart sx={{color:"red" }} />
          </IconButton>
          <IconButton sx={{left:"4%"}}>
            <RiChatSmileFill  />
          </IconButton>
          <IconButton sx={{left:"6%"}}>
                <RiChatSmileFill  />
          </IconButton>
        </Stack>
</Grid>
           
          </Box>

       </Box>
        </Box>   
      ):(
        <Grid item xs={"none"}>
          <Box display={"none"}>

          </Box>
        </Grid>
      )}
        </Grid>
        </>

  )
}

export default Mobile
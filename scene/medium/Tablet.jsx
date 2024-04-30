
import {Box, Badge,IconButton, styled,useTheme,Button} from "@mui/material";
import { tokens } from "../../../theme";
import Lines from "./Line";
import { BarCharts } from "./bar";
import Stack from '@mui/material/Stack';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { AiFillPieChart } from "react-icons/ai";
import { RiChatSmileFill } from "react-icons/ri";
import Line2 from "./Line2";
import Lines4 from "./Line4";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { PiChatTeardropFill } from "react-icons/pi";
import SignalCellularAltSharpIcon from '@mui/icons-material/SignalCellularAltSharp';
import { RiGalleryFill } from "react-icons/ri";


const StyledIcon = styled(Box)(()=>({
  display:"flex",
  alignItems:"center",
  flex:1,
}))

const Tablet = () => {

  const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <div>

<Box display={"grid"} gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="170px" gap="20px" ml="8%" bgcolor={colors.white[100]}  position="relative" height="100vh"  mb="-3rem"  borderRadius="1%" sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)", display:{xs:"none",sm:"none",md:"flex",lg:"none"}}}  >
   
      <Box>

      <IconButton >
    <PiChatTeardropFill  style = {{transform: 'rotate(270deg)', color:"purple", display:"flex", marginLeft:"20",boxShadow: " 3px 3px 21.5px 2px #fffcfc", position:"absolute", left:"10px"}}  />
    </IconButton>

    <StyledIcon  position="absolute" display="flex" sx={{top:"1px", left:"85%"}}>
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

        <Box>
        <Box sx={{bgcolor:"none"}}  position="absolute" left="35%" top="4rem" >
       <Button sx={{bgcolor:"skyBlue", borderRadius:'10px', height:"27px", zIndex:"1"}}>
        <SignalCellularAltSharpIcon  />
       </Button>
       <Button  sx={{borderRadius:'10px',bgcolor:"#fcfcfc",height:"27px",left:"-5px"}}>
        <RiGalleryFill />
       </Button>
       </Box>
        </Box>

        <Box>
          <Box>
          <Box  position="absolute" gridColumn="span 3" bgcolor={colors.white[600]} display="flex" top="7.7rem" borderRadius="10px" width="18rem" height="10rem" overflow="hidden" justifyContent="space-around"  alignItems="center" sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)"}}>
           <Lines  />
</Box>

<Box  position="absolute" gridColumn="span 3" bgcolor={colors.white[600]} display="flex" top="7.7rem" borderRadius="10px" width="18rem" height="10rem"   left="40%" overflow="hidden" justifyContent="space-around" alignItems="center" sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)"}}>
           <Line2  />
</Box>

<Box  position="absolute" gridColumn="span 3" bgcolor={colors.white[600]} display="flex" top="7.7rem" borderRadius="10px" width="13rem" height="10rem" left="78%" justifyContent="space-around" overflow="hidden" alignItems="center" sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)", backgroundColor:"red"}}>
           <Lines4 />
</Box>

<Box  position="absolute" gridColumn="span 3" bgcolor={colors.white[600]} display="flex" top="18.4rem" borderRadius="10px" width="96%" height="16rem"  left="2%" justifyContent="space-around" alignItems="center" sx={{boxShadow: "1px 9px 8px 5px rgba(240,229,229,1)"}}>
           <BarCharts  />
</Box>

          </Box>
        </Box>

        <Box >
            <Box >
            <Stack position="absolute" gridColumn="span 3" bgcolor={colors.white[600]} display="flex" bottom="21px" borderRadius="40px" width="101%" height="4.5rem"  justifyContent="space-around" alignItems="center" sx={{ bgcolor:"purple"}}>
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
</Stack>
            </Box>
          </Box>

      </Box>



</Box>
    </div>
  )
}

export default Tablet



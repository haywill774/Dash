import {Box, IconButton,useTheme, styled, Stack } from "@mui/material";
// import Container from '@mui/material/Container'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { IoWallet } from "react-icons/io5";
import { AiFillPieChart } from "react-icons/ai";
import { RiChatSmileFill } from "react-icons/ri";
import { tokens } from "../../../theme";

import { PiChatTeardropFill } from "react-icons/pi";





const Icon = styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  flex:1,
  borderRadius:"20px 0 0 20px ",
  height:"auto",
  [theme.breakpoints.up("sm")]:{
    display:"flex",
  }
}))




const Sidebar = () => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);


  return (
    <Box m={0}>
    <Icon 
     position={"fixed"} top={"5px"} left={1}
    backgroundColor={colors.pink[800]}  sx={{height:"98%", width:"300px", display:{xs:"none", lg:"block",md:"none", sm:"none"}} }
    >
    <IconButton sx={{display:"flex", justifyContent:"center", }}>
    <PiChatTeardropFill  style = {{transform: 'rotate(270deg)', boxShadow:"5px 5px 1px grey",color:"white", display:"flex", marginLeft:"20"}}  />
    </IconButton>
  
  <Box width={150} >
  <Box mt={50} display="flex" justifyContent="center" alignItems="center" position="relative">
   <Stack  sx={{display:"flex", position:"absolute", justifyContent:"center", alignItems:"center"}} direction="column" spacing={7}>

  <Box style={{zIndex:"11"}} sx={{width:"60px", height:"40px",left:"5px",borderRadius:"10px", position:"absolute",boxShadow:"1px 2px 9px 2px rgba(0,0,0,0.5)",bgcolor:"white", top:"-15%"}}>
    <IconButton >
      <HomeSharpIcon sx={{color:"red",zIndex:"23" }}   />
    </IconButton>
</Box>
   <Box>
    <IconButton  >
      <AiFillPieChart  sx={{color:"red", }} />
    </IconButton>
   </Box>

   <Box>
    <IconButton>
      <RiChatSmileFill  />
    </IconButton>
   </Box>

   <Box>
    <IconButton>
      <IoWallet sx={{color:"red" }} />
    </IconButton>
   </Box>
   </Stack>
   </Box>
  </Box>
  
    </Icon>

    <Box sx={{ display:{xs:"none", lg:"none", md:"none",sm:"flex"}}}>
      <Stack bgcolor={"purple"} height="85px" position={"absolute"} top="44.5rem" display="flex" justifyContent="space-evenly" alignItems="center" borderRadius="20px" left="27%" zIndex={10} sx={{width:{sm:400, xs:900}}}>
        <Stack direction="row" spacing={10} display="flex" >
          <IconButton sx={{width:"40px", bgcolor:"white", borderRadius:"10px", top:"-30px", left:"10%"}}>
          <HomeSharpIcon  sx={{color:"red" }}  />
          </IconButton>
          <IconButton>
           <AiFillPieChart sx={{color:"red" }} />
          </IconButton>
          <IconButton>
            <RiChatSmileFill  />
          </IconButton>
          <IconButton>
                <RiChatSmileFill  />
          </IconButton>
        </Stack>
      </Stack>
    </Box>

</Box>

  )
}

export default Sidebar
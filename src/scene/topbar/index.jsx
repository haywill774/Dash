// import { useContext } from "react";
import {Box, IconButton,useTheme,Typography, Badge, styled} from "@mui/material";
import { tokens } from "../../../theme";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import InputBase from "@mui/material/InputBase";



const Icon = styled(Box)(({theme})=>({
    display:"none",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
      display:"flex",
      justifyContent:"end"
    }
  }))

  const StyledIcon = styled(Box)(()=>({
    display:"flex",
    alignItems:"center",
    flex:1,
      justifyContent:"end",
      right:-1,
      gap:0,
    
  }))
  const Top = styled(Box)(()=>({
    display:"flex",
     justifyContent:"space-evenly", alignItems:"center",
      p:1,
      marginLeft:90,
      marginTop:0,
     
  }))


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const colorMode = useContext(ColorModeContext);
  

    return (
      <Top position={"relative"} >

      
        {/* SEARCH BAR */}
        <Icon
          display="flex" borderRadius="20px" backgroundColor={colors.white[800]} width="50%" height="30px"  sx={{display:{xs:"none",md:"none",lg:"flex"}}}
        >
          
            <IconButton style={{ borderColor:"gray", border:"none"}} >
            <SearchIcon style={{width:20, height:15}} />
            
            </IconButton>
            <InputBase variant="h6"  sx={{ ml: 2, flex: 1 }} placeholder="search" style={{ background:"none", outline:"none"}} />
        </Icon>
        
        {/* pages */}
        <Icon sx={{ ml: 5, display:{xs:"none",md:"none",lg:"flex"}}} >
        <IconButton >           
         <Typography variant="h6" >
                FeedBack
            </Typography>  
            </IconButton> 

            <IconButton >        
         <Typography variant="h6" >
                Contacts
            </Typography>
            </IconButton>

            <IconButton >
         <Typography variant="h6" >
                Help
            </Typography>
            </IconButton>
        </Icon>
        
        {/* ICONS */}
        <StyledIcon display="flex" sx={{cursor:"pointer", display:{xs:"none",md:"none",lg:"flex"}}} >
          <IconButton sx={{position:"relative", mr:"-12px"}}>
          <NotificationsOutlinedIcon sx={{fontSize:"22px"}} />
          <Badge sx={{mr:"-8px",position:"absolute", top:"12px"}}  badgeContent={1} color="error" variant="dot">
           
            </Badge>
          </IconButton>
          {/* profile */}         
          <IconButton>
            <img 
            style={{width:30, borderRadius:10, marginRight:"-2px"}}
            src="../../../assets/profile.jpg" 
            alt=""  />
       </IconButton>
    </StyledIcon>
        
      
       
      </Top>
    );
  };
  
  export default Topbar;
  
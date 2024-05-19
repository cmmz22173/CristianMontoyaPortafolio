import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import maybeMe from "./../img/maybe-me.png"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Chip, Stack } from "@mui/material";
import hondurasLogo from "./../assets/honduras-logo.png"
import inglesLogo from "./../assets/ingles-logo.png"
import spainLogo from "./../assets/spain-logo.png"
import academicLogo from "./../assets/academic-logo.png"
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  //transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function AcademicCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ 
        maxWidth: "100dvh",
        maxHeight: "70dvh",
        margin:"7%",
        marginBottom:"10%",
        overflow:"auto", 
        bgcolor:"#3D3B40"}}>
      
      <CardMedia
        component="img"
        height="100dvh"
        image={academicLogo}
        sx={{bgcolor:"#91C8E4",objectFit:"contain"}}
        
      />
      
      <CardActions sx={{bgcolor:"#3D3B40"}}  disableSpacing>
        <Typography ml={1} color={"white"} fontFamily={"Lato"} fontWeight={1000}>Académico</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx=
            {{  color:"black",
                bgcolor:"#749BC2",
                '&:hover': {
                    bgcolor: "#91C8E4"
                }
            }}
        >
            {!expanded?<PlayArrowIcon /> : <PauseIcon/>}
          
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color={"#F2F1EB"} fontWeight={500} paragraph>Estudios: Universidad Nacional Autonoma de Honduras (UNAH)</Typography>
          <Stack direction="row"  alignItems="center"  mr={0.5}>

            
          <Typography color={"#F2F1EB"} fontWeight={500} paragraph mr={1}>
              
              Carrera: 
            </Typography>
         

             
            <Typography color={"whitesmoke"} paragraph>
              
              Ingenieria en Sistemas
            </Typography>
         
          </Stack>
           

          
          <Stack direction="row" spacing={1}>
          <Typography fontWeight={500} color={"whitesmoke"} paragraph>
            Estado:
          </Typography>
            <Typography color={"whitesmoke"} paragraph>
            <Chip size='small'   label="En practica" sx={{background:"#E5D283"}} />
            </Typography>
          </Stack>
          
          
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default AcademicCard;
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import  CardMedia  from "@mui/material/CardMedia";
import cJimg1 from "./../img/CleanJazzEx1.png"
import cJimg2 from "./../img/CleanJazzEx2.png"
import cJimg3 from "./../img/CleanJazzEx3.png"
import cJimg4 from "./../img/CleanJazzEx4.png"
import cJimg5 from "./../img/CleanJazzEx5.png"
import cJimg6 from "./../img/CleanJazzBackEx1.png"
import cJimg7 from "./../img/CleanJazzBackEx2.png"
import cJimg8 from "./../img/CleanJazzBackEx3.png"
import cJimg9 from "./../img/CleanJazzBackEx4.png"
import vlsmImg1 from "./../img/vlsmEx1.jpg"
import vlsmImg2 from "./../img/vlsmEx2.jpg"
import fish1 from "./../img/Fish1.png"
import fish2 from "./../img/Fish2.png"
import fish3 from "./../img/Fish3.png"
import fish4 from "./../img/Fish4.png"
import fish5 from "./../img/Fish5.png"
import fish6 from "./../img/Fish6.png"
import fish7 from "./../img/Fish7.png"
import fish8 from "./../img/Fish8.png"
import fish9 from "./../img/Fish9.png"
import rh1 from "./../img/RHfinal.PNG"
import rh2 from "./../img/RHlogin.PNG"
import rh3 from "./../img/RHmenu_principal.PNG"
import rh4 from "./../img/RHasistencia1.PNG"
import rh5 from "./../img/RHasistencia2.PNG"
import rh6 from "./../img/RHasistencia3.PNG"
import rh7 from "./../img/RHeditar1.PNG"
import rh8 from "./../img/RHeditar2.PNG"
import rh9 from "./../img/RHgestion1.PNG"
import rh10 from "./../img/RHgestion2.PNG"
import rh11 from "./../img/RHmonitoreo1.PNG"
import rh12 from "./../img/RHmonitoreo2.PNG"
import rh13 from "./../img/RHmonitoreo3.PNG"
import rh14 from "./../img/RHmonitoreo4.PNG"
import rh15 from "./../img/RHPAA1.PNG"
import rh16 from "./../img/RHPAA2.PNG"
import portEx1 from "./../img/portafolioEx.png"









const steps = [
    
[ 
    {
        description: 'RH',
      imgPath:
      rh1,
    },
    {
      description: 'RH',
    imgPath:
    rh2,
    },
    {
      description: 'RH',
    imgPath:
    rh3,
    },
    {
      description: 'RH',
    imgPath:
    rh4,
    },
    {
      description: 'RH',
    imgPath:
    rh5,
    },
    {
      description: 'RH',
    imgPath:
    rh6,
    },
    {
      description: 'RH',
    imgPath:
    rh7,
    },
    {
      description: 'RH',
    imgPath:
    rh8,
    },
    {
      description: 'RH',
    imgPath:
    rh9,
    },
    {
      description: 'RH',
    imgPath:
    rh10,
    },
    {
      description: 'RH',
    imgPath:
    rh11,
    },
    {
      description: 'RH',
    imgPath:
    rh12,
    },
    {
      description: 'RH',
    imgPath:
    rh13,
    },
    {
      description: 'RH',
    imgPath:
    rh14,
    },
    {
      description: 'RH',
    imgPath:
    rh15,
    },
    {
      description: 'RH',
    imgPath:
    rh16,
    }
    
     
    

],

[
    {
        description: 'CleanJazz app',
      imgPath:
        cJimg5,
    },
    {
      description: 'CleanJazz app',
      imgPath:
      cJimg1,
    },
    {
      description: 'CleanJazz app',
    imgPath:
      cJimg2,
    },
    {
      description: 'CleanJazz app',
    imgPath:
      cJimg3,
    },
    {
      description: 'CleanJazz app',
    imgPath:
      cJimg4,
    },
    
    {
      description: 'CleanJazz Backoffice',
    imgPath:
      cJimg7,
    },
    {
      description: 'CleanJazz Backoffice',
    imgPath:
      cJimg6,
    },
   
    {
      description: 'CleanJazz Backoffice',
    imgPath:
      cJimg8,
    },
    {
      description: 'CleanJazz Backoffice',
    imgPath:
      cJimg9,
    },
  

],

[
  {
      description: 'portafolio',
    imgPath:
    portEx1,
  },
  

],

[
  {
      description: 'VLSM',
    imgPath:
    vlsmImg1,
  },
  {
      description: 'VLSM',
    imgPath:
      vlsmImg2
  },
   
  

],

[
  {
      description: 'Fishgo',
    imgPath:
    fish1,
  },
  {
      description: 'Fishgo',
    imgPath:
      fish2,
  },
  {
    description: 'Fishgo',
  imgPath:
    fish3,
},
{
  description: 'Fishgo',
imgPath:
  fish4,
},
{
  description: 'Fishgo',
imgPath:
  fish5,
},
{
  description: 'Fishgo',
imgPath:
  fish6,
},
{
  description: 'Fishgo',
imgPath:
  fish7,
},
{
  description: 'Fishgo',
imgPath:
  fish8,
},
{
  description: 'Fishgo',
imgPath:
  fish9,
},
  
   
  

],

];

function ProjectCarousel(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps[props.id].length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'background.default', 
        }}
      >
        <Typography>{steps[props.id][activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%' }} >
      <CardMedia
            sx={{borderRadius:"5%"}}
            component="img" 
            image={steps[props.id][activeStep].imgPath}
            />
        {}
      </Box>
      <MobileStepper
        sx={{backgroundColor:"#0f0e0e" ,borderRadius:"10px"}}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{color:"#1ed760", backgroundColor:"#0f0e0e"}}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{color:"#1ed760", backgroundColor:"#0f0e0e"}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
export default ProjectCarousel; 
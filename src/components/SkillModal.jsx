import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chip, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import  Avatar  from "@mui/material/Avatar";
import { content } from "../content/content"


const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:"60%",sm:"50%",md:"40%",lg:"40%"},
    bgcolor: '#121212',
    borderRadius: '10px',
    p: 4

  };


function SkillModal(props){

    
    return(
         <div>
   
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" color={"white"} variant="h6" component="h2">
            {content[props.id].title}
          </Typography>
          <Typography id="modal-modal-description" color={"white"} sx={{ mt: 2 ,mb:2, textAlign:"justify"}}>
          {content[props.id].description}
          </Typography>
          
         


          <Stack direction={"row"} spacing={1} useFlexGap flexWrap="wrap">
           {content[props.id].img1 && (  
          <Chip size='small'  avatar={<Avatar src={content[props.id].img1} />} label={content[props.id].log1} sx={{background:"white"}} />)}
          
          {content[props.id].img2 && (
          <Chip size='small'  avatar={<Avatar src={content[props.id].img2} />} label={content[props.id].log2} sx={{background:"white"}} />)}

          {content[props.id].img3 && (
          <Chip size='small'  avatar={<Avatar src={content[props.id].img3} />} label={content[props.id].log3} sx={{background:"white"}} />)}
          
          {content[props.id].img4 && (
          <Chip size='small'  avatar={<Avatar src={content[props.id].img4} />} label={content[props.id].log4} sx={{background:"white"}} />)}

          {content[props.id].img5 && (
          <Chip size='small'  avatar={<Avatar src={content[props.id].img5} />} label={content[props.id].log5} sx={{background:"white"}} />)}
          </Stack>

          {content[props.id].description2 && (  
            <Typography id="modal-modal-description" color={"white"} sx={{ mt: 2 ,mb:2}}>
            {content[props.id].description2}
            </Typography>
          )}

         <Stack direction={"row"} spacing={1} useFlexGap flexWrap="wrap">
           {content[props.id].imgI1 && (  
          <Chip size='small'  avatar={<Avatar src={content[props.id].imgI1} />} label={content[props.id].logI1} sx={{background:"white"}} />)}
          
          {content[props.id].imgI2 && (
          <Chip size='small'  avatar={<Avatar src={content[props.id].imgI2} />} label={content[props.id].logI2} sx={{background:"white"}} />)}

          {content[props.id].imgI3 && (
          <Chip size='small'  avatar={<Avatar src={content[props.id].imgI3} />} label={content[props.id].logI3} sx={{background:"white"}} />)}
          
          {content[props.id].imgI4 && (
          <Chip size='small'  avatar={<Avatar src={content[props.id].imgI4} />} label={content[props.id].logI4} sx={{background:"white"}} />)}
          
          {content[props.id].imgI5 && (
          <Chip size='small'  avatar={<Avatar src={content[props.id].imgI5} />} label={content[props.id].logI5} sx={{background:"white"}} />)}
         
          
          </Stack>



          <Button color="error" onClick={props.onClose} sx={{float:"right"}}>Cerrar</Button>
        </Box>
      </Modal>
    </div>
    );
}

export default SkillModal;
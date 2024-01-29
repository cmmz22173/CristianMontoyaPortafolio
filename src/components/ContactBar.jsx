import React,{useState} from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Typography } from '@mui/material';

import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

const content=

    {
        title:"Descargo de Responsabilidad",
        description:
        `
        El diseño de la interfaz de usuario (UI) presentado en este portafolio está inspirado
         en la plataforma Spotify y ha sido creado con propósitos educativos y de demostración
          de habilidades como desarrollador. No pretende ser una reproducción exacta de la interfaz de
           usuario de Spotify ni está asociado oficialmente con la marca Spotify.

        Los iconos utilizados en este diseño son de origen gratuito y requieren atribución según los
        términos de licencia de sus respectivos creadores. Se ha hecho un esfuerzo por proporcionar
        la atribución adecuada a los creadores de los iconos utilizados en este proyecto.

        Es importante destacar que este proyecto es parte de mi portafolio personal y no se debe interpretar
        como un trabajo oficial de Spotify ni de ninguna otra entidad asociada. Todos los derechos de autor
        y marcas registradas relacionadas con Spotify y los iconos utilizados pertenecen a sus respectivos
        propietarios.
        
        
        `

    }


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

function ContactBar(){

    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
  
      };

    return(
        <>
        <Stack ml={3} mr={4} mt={3}  spacing={3} direction="row" justifyContent="space-between">
			<Stack direction="row" spacing={2} >
				<IconButton sx={{background:"#272829"}} size='medium' href="https://www.linkedin.com/in/cristian-manuel-montoya-zelaya-8b4658216/">
					<LinkedInIcon sx={{color:"white"}} fontSize='large'/>	
				</IconButton >

			    <IconButton sx={{background:"#272829"}} size='medium' href="https://github.com/cmmz22173">
					<GitHubIcon sx={{color:"white"}} fontSize='large'/>
				</IconButton>

                <IconButton sx={{background:"#272829"}} size='medium' href="mailto:cmmz22173@gmail.com">
					<GoogleIcon sx={{color:"white"}} fontSize='large'/>
				</IconButton>
			</Stack>

			
            <Stack direction="row" spacing={3} 
                
                alignItems="center">
                <IconButton 
                size="small"
                href="https://drive.google.com/drive/folders/1cpAp0YdxZYbSn_8I7WlrVIyEewMSyaxL"
            
                sx={{
                       bgcolor:"white",
                       borderRadius:"20px",
                       '&:hover':{
                        bgcolor:"white",
                        transform:"scale(1.01)"
                       }
                    }}
                >
                    <Typography color={"black"} fontFamily={"Lato"} ml={1} mr={1} fontWeight={900} fontSize={13}>Descargar CV</Typography>
                </IconButton> 

                <IconButton onClick={()=>{openModal()}} sx={{background:"#272829"}} size='medium'>
					<InfoRoundedIcon sx={{color:"white"}} fontSize='large'/>
				</IconButton>   
            </Stack>
		</Stack>



        <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
                <Typography id="modal-modal-title" color={"white"} mb={3} variant="h5" component="h2" fontWeight={700}>
                    {content.title}
                </Typography>
          <Stack spacing={5} direction={{xs:"column",sm:"column",md:"row",lg:"row",xl:"row"}}>
        
					<Typography id="modal-modal-description" textAlign="justify" color={"white"} sx={{ mt: 0 ,float:"right", maxWidth:"800px"}}>
					{content.description}
					</Typography>
		
            </Stack>
            <Button color="error" onClick={closeModal} sx={{float:"right"}}>Cerrar</Button>
        </Box>

      </Modal> 

</>
    );
} export default ContactBar;
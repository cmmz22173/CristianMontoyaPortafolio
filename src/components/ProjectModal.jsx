import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProjectCarousel from "./ProjectCarousel";
import { Button, Stack } from "@mui/material";

const content=[
    {
    title: 'Sistema RH UNAH',
    description: `El sistema RH UNAH fue un proyecto para los de recursos humanos de la UNAH, que les permitiera manejar una gran
    variedad de modulos como la asistencia de docentes, constancias, empleados, y PAA entre otras cosas. No se llego a implementar por su gran complejidad y falta de recursos, sin embargo,
    sirvio como una gran fuente de aprendizaje y experiencia para la asignacion de tareas, toma de requerimientos, distribucion de recursos, y el uso de metodologias agiles en general.`,
    db:"MySQL (AWS)",
    caracter:"Grupal",              
    year:2022
    },

    {
    title: 'CleanJazz',
    description: `CleanJazz fue un intento de replicar un SaaS y que tuviera la caracteristica de funcionar como una PWA para la clase de industria de software.
    El proyecto consistio en crear un SaaS orientado a carwash, que le permitiera al cliente verificar sus fechas de lavado, ofertas, entre otras cosas. Ademas
    debia contar con su respectivo backoffice para que la empresa que contrate el servicio pueda manejar sus recursos.`,
    db:"MySQL (AWS)",
    caracter:"Grupal",  
    year: 2023,
    
    },

    {
        title: 'Portafolio',
        description: `Inspirado en la UI de Spotify, porque suelo escuchar musica al realizar cualquier actividad para concentrarme. Decidi desarrollar mi portafolio para mostrar parte de mi experiencia 
        relevante en el area de desarrollo. Tambien con el proposito de practicar y adquirir nuevos conocimientos mientras lo creaba.`,
        db:"N/A",
        caracter:"Individual",  
        year:2024
    },
    {
      title: 'Calculadora VLSM IPV4',
      description: `Como parte de la clase de Redes 2, se dio la libertad de escoger entre una variedad de proyectos
      entre los cuales se encontraba realizar una calculadora VLSM para IPV4.`,
      db:"MySQL (AWS)",
      caracter:"Grupal",  
      year:2022
    },

    {
      title: 'Sistema de Pescaderia',
      description: `Mi primer proyecto grande creado para la clase de programación orientada a objetos,
                   consistia en ser una especie de ERP para orientado a un empresa que se dedica al a venta de pescados.
                   
                   `,
      db:"MySQL (Local)",
      caracter:"Individual",  
      year:2020
    }

];


const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:"70%",sm:"50%",md:"70%",lg:"60%",xl:"45%"},
    maxHeight:"80%",
    bgcolor: '#121212',
    borderRadius: '10px',
    p: 4,
    overflow:"auto"
    

  };


function ProjectModal(props){
    
    
    return(
         <div>
   
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
            <Typography id="modal-modal-title" color={"white"} mb={3} variant="h5" component="h2" fontWeight={700}>
            {content[props.id].title}
          </Typography>
          <Stack spacing={5} direction={{xs:"column",sm:"column",md:"row",lg:"row",xl:"row"}}>
          
         
          <ProjectCarousel id={props.id} />
				<Stack>
					
					<Typography id="modal-modal-description" textAlign="justify" color={"white"} sx={{ mt: 0 ,float:"right", maxWidth:"400px"}}>
					{content[props.id].description}
					</Typography>

          <Typography id="modal-modal-description" color={"white"} sx={{ mt: 2 ,float:"right", maxWidth:"400px"}}>
					Base de datos: {content[props.id].db}
					</Typography>

          <Typography id="modal-modal-description" color={"white"} sx={{ mt: 2 ,float:"right", maxWidth:"400px"}}>
					Caracter: {content[props.id].caracter}
					</Typography>


					<Typography id="modal-modal-description" color={"white"} sx={{ mt: 2 ,float:"right", maxWidth:"400px"}}>
					Año de creación: {content[props.id].year}
					</Typography>


				</Stack>	
            </Stack>
            <Button color="error" onClick={props.onClose} sx={{float:"right"}}>Cerrar</Button>
        </Box>
      </Modal>
    </div>
    );
}

export default ProjectModal;
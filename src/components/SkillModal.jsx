import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chip, Stack } from "@mui/material";
import htmlLogo from "./../assets/html-logo.png"
import cssLogo from "./../assets/css-logo.png"
import javascriptLogo from "./../assets/javascript-logo.png"
import reactLogo from "./../assets/react-logo.png"
import vueLogo from "./../assets/vue-logo.png"
import materialLogo from "./../assets/materialui-logo.png"
import quasarLogo from "./../assets/quasar-logo.png"
import javaLogo from "./../assets/java-logo.png"
import phpLogo from "./../assets/php-logo.png"
import cplusLogo from "./../assets/cplus-logo.png"
import pythonLogo from "./../assets/python-logo.png"
import drawioLogo from "./../assets/drawio-logo.png"
import figmaLogo from "./../assets/figma-logo.png"
import colorhuntLogo from "./../assets/colorhunt-logo.png"
import googlefontLogo from "./../assets/googlefonts-logo.jpg"
import springLogo from "./../assets/spring-logo.png"
import jupyterLogo from "./../assets/jupyter-logo.png"
import mysqlLogo from "./../assets/mysql-logo.png"
import sqlserverLogo from "./../assets/sqlserver-logo.png"
import oracleLogo from "./../assets/oracle-logo.png"
import azureLogo from "./../assets/azure-logo.png"
import awsLogo from "./../assets/aws-logo.png"
import Button from "@mui/material/Button";
import  Avatar  from "@mui/material/Avatar";
const content=[
    {
    title: 'React',
    description: "Utilizado para crear la interfaz de usuario de este portafolio.",
    img1:""
    },

    {
    title: 'Figma',
    description: "Ultimamente utilizado para practicar y crear mockups.",
    img1:""
    },

    {
        title: 'Material UI',
        description: `Utilizado para crear los componentes del portafolio.`,
        img1:""
    },

    {
        title: 'Visual Studio Code',
        description: `Herramienta preferida para desarrollo por su flexibilidad y adaptabilidad.`,
        img1:""
    }
    ,

    {
        title: 'Bases de Datos',
        description: "Conocimientos en bases de datos relacionales:",
        description2: "Familiaridad para gestion de bases de datos en la nube:",
        log1:"MySQL",
        log2:"SQLServer",
        log3:"Oracle DB",
        img1:mysqlLogo,
        img2:sqlserverLogo,
        img3:oracleLogo,
        logI1:"Azure",
        logI2:"AWS",
       
        imgI1:azureLogo,
        imgI2:awsLogo,
       
    
    }
    ,

    {
        title: 'Desarrollo Web',
        description: "Conocimientos basicos:",
        description2: "Frameworks que he utilizado:",
        log1:"HTML5",
        log2:"CSS",
        log3:"JS",
        img1:htmlLogo,
        img2:cssLogo,
        img3:javascriptLogo,
        logI1:"React",
        logI2:"Vue",
        logI3:"Quasar",
        logI4:"MUI",
        imgI1:reactLogo,
        imgI2:vueLogo,
        imgI3:quasarLogo,
        imgI4:materialLogo,
    }
    ,

    {
        title: 'UI / UX',
        description: "Creacion de wireframes & mockups:",
        description2: "Herramientas para seleccion de colores y fonts:",
        log1:"Draw.io",
        log2:"Figma",
        
        img1:drawioLogo,
        img2:figmaLogo,
        
        logI1:"Colorhunt",
        logI2:"Google fonts",
        
        imgI1:colorhuntLogo,
        imgI2:googlefontLogo,
       
    }
    ,

    {
        title: 'Programacion en general',
        description: "Familiaridad con lenguajes:",
        description2: "Familiaridad con entornos de desarrollo especializados:",
        log1:"Java",
        log2:"PHP",
        log3:"JS",
        log4:"Python",
        log5:"C++",
        img1:javaLogo,
        img2:phpLogo,
        img3:javascriptLogo,
        img4:pythonLogo,
        img5:cplusLogo,
        logI1:"Spring tools",
        logI2:"Jupyter",
       
        imgI1:springLogo,
        imgI2:jupyterLogo,
      
    }
    ,

    {
        title: 'Creatividad',
        description: `Me permite pensar de manera innovadora y encontrar
         soluciones únicas y poco usuales para desafíos complejos. Mi capacidad para pensar
          de manera creativa me ha permitido generar ideas originales y 
          adaptarme a entornos cambiantes, contribuyendo así a la creación de soluciones. `,
        img1:""
    }
    ,

    {
        title: 'Voluntad de aprender',
        description: `Mi actitud proactiva y mi compromiso con el aprendizaje continuo
            me permiten adaptarme rápidamente a nuevos entornos y desafíos, y me impulsan
            a buscar constantemente formas de mejorar y crecer tanto a nivel profesional
            como personal.`,
        img1:""
    },

    {
        title: 'Adaptabilidad',
        description: ` Estoy cómodo trabajando en equipos multidisciplinarios y en contextos
          diversos, lo que me permite colaborar efectivamente con personas de diferentes
          antecedentes y perspectivas. Ademas siempre estoy dispuesto a aprender nuevas habilidades
           y tecnologías, y a ajustar mi enfoque según las circunstancias.`,
        img1:""
    },

    {
        title: 'Comunicacion Activa',
        description: ` Me destaco por mi habilidad para escuchar activamente las opiniones
            y perspectivas de los demás. Esto me permite fomentar un diálogo abierto y constructivo,
            facilitando la resolución de problemas y la toma de decisiones informadas.
            Además, mi habilidad para adaptar mi estilo de comunicación según la audiencia
            me permite transmitir información técnica de manera accesible y comprensible 
            para personas con diversos niveles de conocimiento en tecnología. `,
        img1:""
    }


];

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
          </Stack>



          <Button color="error" onClick={props.onClose} sx={{float:"right"}}>Cerrar</Button>
        </Box>
      </Modal>
    </div>
    );
}

export default SkillModal;
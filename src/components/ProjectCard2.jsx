import React from "react";
import './../App.css';
import  Card  from "@mui/material/Card";
import  CardActionArea  from "@mui/material/CardActionArea";
import  CardMedia  from "@mui/material/CardMedia";
import  CardContent  from "@mui/material/CardContent";
import  Stack  from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import  Avatar  from "@mui/material/Avatar";

function ProjectCard2(props){



    return(
        <Card className='Project-cards'>
									
        <CardActionArea sx={{display:"flex", alignItems:"center", justifyContent:"flex-start"}} onClick={props.onClick}>
            <CardMedia
            className='Project-small-image'
            component="img" 
            image={props.image}
            />
            <CardContent >
                <Typography sx={{mb:"12px"}} className='Font-title4'>{props.name}</Typography>
                <Stack direction={'row'} spacing={1}>
                    <Chip size='small'  avatar={<Avatar src={props.tecno1} />} label={props.tecnoName1} sx={{background:"white"}} />
                    <Chip size='small'  avatar={<Avatar src={props.tecno2} />} label={props.tecnoName2} sx={{background:"white"}} />
                    <Chip size='small'  avatar={<Avatar src={props.tecno3} />} label={props.tecnoName3} sx={{background:"white"}} />
                    
                </Stack>
                
            </CardContent>
            
        </CardActionArea>
        
    </Card>
    );
}

export default ProjectCard2;
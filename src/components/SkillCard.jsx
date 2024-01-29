import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import  Typography  from "@mui/material/Typography";
function SkillCard(props){
    return(
    
    <Card className='Card-content' >
		<CardMedia
		className='Card-image'
		component="img" 
		image={props.img}
		loading="lazy"
		sx={{objectFit:"contain"}}
		/>
		<IconButton variant='contained' className='Play-button' onClick={props.onClick}>
			<PlayArrowIcon fontSize='large'/>
		</IconButton>
		<Typography variant='' mt={1.5} className='Font-title3'>{props.name}</Typography>	
	</Card>
    );
}

export default SkillCard;
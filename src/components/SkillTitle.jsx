import React from "react";
import { Grid } from "@mui/material";

function SkillTitle(props){

    return(
    <Grid item xs={12} pl={"5dvh"}>
		<h4 className='Font-title'>{props.name}</h4>
	</Grid>
    );
}

export default SkillTitle;
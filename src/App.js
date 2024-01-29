import React, { useState } from "react";
import './App.css';
import Avatar from '@mui/material/Avatar';
import { Button, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Chip from '@mui/material/Chip';
import reactLogo from './assets/react-logo.png'
import quasarLogo from './assets/quasar-logo.png'
import figmaLogo from './assets/figma-logo.png'
import vueLogo from './assets/vue-logo.png'
import prograLogo from './assets/lenguaje-de-codificacion.png'
import materialLogo from './assets/material2-logo.png'
import visualLogo from './assets/vs-logo.jpg'
import dbLogo from './assets/base-de-datos.png'
import disenoLogo from './assets/diseno-grafico.png'
import uiLogo from './assets/disposicion.png'
import adaptLogo from './assets/adaptacion.png'
import aprendizajeLogo from './assets/cerebro.png'
import creativaLogo from './assets/creatividad.png'
import comunicaLogo from './assets/conversacion.png'
import nodeLogo from './assets/node-logo.png'
import RHUNAH from './img/RH-UNAH.png'
import portafolioLogo from './img/portafolio-logo.jpg'
import yo from './img/yo.jpg'
import cleanJazzLogo from './img/CleanJazz.png'
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import SkillTitle from './components/SkillTitle';
import ProjectCard2 from './components/ProjectCard2';
import ProjectModal from "./components/ProjectModal";
import SkillModal from "./components/SkillModal";
import InfoCard from "./components/InfoCard";
import ContactBar from "./components/ContactBar";
import nestLogo from './assets/nestjs_logo.png'
import calcVLSM from './img/Calculadora-vlsm.png'
import phpLogo from './assets/php-logo.png'
import htmlLogo from './assets/html-logo.png'
import cssLogo from './assets/css-logo.png'
import springLogo from "./assets/spring-logo.png"
import bootsLogo from "./assets/bootstrap-logo.png"
import pezLogo from "./assets/pez-logo.png"
import AcademicCard from "./components/AcademicCard";
function App() {

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
	  setIsModalOpen(true);
	};
  
	const closeModal = () => {
	  setIsModalOpen(false);

	};

	const [isModalSkillOpen, setModalSkillOpen] = useState(false);

	const openModalSkill = () => {
	  setModalSkillOpen(true);
	};
  
	const closeModalSkill = () => {
	  setModalSkillOpen(false);

	};

	const [idContent,setIdContent]= useState(0);
	const [idContentSkill,setIdContentSkill]= useState(0);

  return (
    <div>
		<header className='App-header'>
			
				<Grid container  m={"inherit"} direction={{ xs: 'column', sm: 'column',md:'column' ,lg:'row',xl:'row'}}>
					
					<Grid  xs={12} sm={12} md={12} lg={3} xl={3} m={0.4}  >
						<Stack spacing={0} >
							<Grid container rowSpacing={0} pl={0}>
								<Grid className='Container-style' xs={12} mt={0} >
									<Grid container rowSpacing={0} pl={0.5} >
										<Grid className='Container-style' xs={8} mt={0}  pl={2} >
											<Typography mt={2} fontFamily="'Sawarabi Gothic', sans-serif" fontSize="18px" fontWeight={700} color="#999999">Cristian Montoya</Typography>
											
											
											
											<Typography 
											color={"white "} 
											sx={{'&:hover': 
											{
                    						color: "#1ed760"
                							}
											}}
											mt={0.5} mb={2} fontSize={"12px"}>cmmz22173@gmail.com</Typography>
											

											<Chip  size="small" label="EXP laboral:0%" sx={{background:"#FF6868"}} />
										</Grid>

										<Grid className='Container-style' xs={4} mt={0} >
											<Avatar
											alt="Remy Sharp"
											src={yo}
											sx={{ width: '12vh', height: '12vh' ,float:'right',margin:2 }}
											/>
										</Grid>
									</Grid>

								</Grid>

								<Grid className='Container-style' xs={12} sm={12} md={12} lg={12} xl={12} mt={1} mb={0} sx={{height:'74.8vh'}}
								direction="column"
								justifyContent="flex-start"
								alignItems="stretch"
								overflow="auto"
								>
									
									<Stack spacing={4} >
										<Grid container rowSpacing={1} p={2}>
											<Grid xs={1}>
												<LibraryBooksIcon />	
											</Grid>
											<Grid sx={{ display: { xs: 'block',sm:'block',md:'block', lg: 'block', xl: 'block' } }} xs={6} mt={0} ml={1}>
											<Typography sx={{float:"left"}} fontFamily="'Sawarabi Gothic', sans-serif" fontSize="18px" fontWeight={700} color="#999999">Proyectos</Typography>
											</Grid>
											
										</Grid>
											
									</Stack>
		
								<ProjectModal open={isModalOpen} onClose={closeModal} id={idContent}/>
								<ProjectCard2
									
									image={RHUNAH}
									name='Sistema RH UNAH'
									tecnoName1="Vue"
									tecnoName2="Quasar"
									tecnoName3="Node"
									tecno1={vueLogo}
									tecno2={quasarLogo}
									tecno3={nodeLogo}
									onClick={()=>{openModal();setIdContent(0)}}
								/>

								<ProjectCard2 
									image={cleanJazzLogo} 
									name="CleanJazz PWA" 
									tecnoName1="React"
									tecnoName2="MUI"
									tecnoName3="Nest"
									tecno1={reactLogo}
									tecno2={materialLogo}
									tecno3={nestLogo}
									onClick={()=>{openModal();setIdContent(1)}}
								/>
							
								<ProjectCard 
									image={portafolioLogo} 
									name="Portafolio Personal" 
									tecnoName1="React"
									tecnoName2="MUI"
									tecno1={reactLogo}
									tecno2={materialLogo}
									onClick={()=>{openModal();setIdContent(2)}}
								/>

									<ProjectCard2 
									image={calcVLSM} 
									name="Calculadora VLSM IPV4" 
									tecnoName1="PHP"
									tecnoName2="HTML"
									tecnoName3="CSS"
									tecno1={phpLogo}
									tecno2={htmlLogo}
									tecno3={cssLogo}
									onClick={()=>{openModal();setIdContent(3)}}
								/>

								<ProjectCard 
									image={pezLogo} 
									name="Sistema de Pescadería" 
									tecnoName1="Spring"
									tecnoName2="Bootstrap"
									tecno1={springLogo}
									tecno2={bootsLogo}
									onClick={()=>{openModal();setIdContent(4)}}
								/>

	

								</Grid>
							</Grid>
						</Stack>
					
					</Grid>

					<Grid className='Container-style2' xs={12} sm={12} md={12} lg={6} xl={6} m={0.4} >
						
						<ContactBar/>
		
						<SkillTitle name="Utilizados recientemente"/>

						<SkillModal open={isModalSkillOpen} onClose={closeModalSkill} id={idContentSkill}/>
						<Stack
						margin={2.8}
						direction={{ xs: 'row', sm: 'row',md:'row' }}
						spacing={{ xs: 2, sm: 2, md: 3 }}
						useFlexGap flexWrap="wrap"
						justifyContent="center"
						alignItems={{xs:'center',sm:'center',md:'flex-start'}}
						>
							

							<SkillCard
							name="React"
							img={reactLogo}
							onClick={()=>{openModalSkill();setIdContentSkill(0)}}
							/>	

							<SkillCard
							name="Figma"
							img={figmaLogo}
							onClick={()=>{openModalSkill();setIdContentSkill(1)}}
							/>	

							<SkillCard
							name="MUI"
							img={materialLogo}
							onClick={()=>{openModalSkill();setIdContentSkill(2)}}
							/>

							<SkillCard
							name="VS code"
							img={visualLogo}
							onClick={()=>{openModalSkill();setIdContentSkill(3)}}
							/>	

						</Stack>

						<SkillTitle name="Habilidades tecnicas"/>
						
						<Stack
						margin={2.8}
						direction={{ xs: 'row', sm: 'row' }}
						spacing={{ xs: 2, sm: 2, md: 3 }}
						useFlexGap flexWrap="wrap"
						justifyContent="center"
						
						>
							<SkillCard
							name="Bases de datos"
							img={dbLogo}
							onClick={()=>{openModalSkill();setIdContentSkill(4)}}
							/>

							<SkillCard
							name="Desarrollo web"
							img={disenoLogo}
							onClick={()=>{openModalSkill();setIdContentSkill(5)}}
							/>	
							
							
							<SkillCard
							name="UI / UX"
							img={uiLogo}
							onClick={()=>{openModalSkill();setIdContentSkill(6)}}
							/>	

							<SkillCard
							name="Programación"
							img={prograLogo}
							onClick={()=>{openModalSkill();setIdContentSkill(7)}}
							/>	
					
						</Stack>

						<SkillTitle name="Habilidades blandas"/>
					
						<Stack
							margin={2.8}
							direction={{ xs: 'row', sm: 'row' }}
							spacing={{ xs: 2, sm: 2, md: 3 }}
							useFlexGap flexWrap="wrap"
							justifyContent="center"
						>
							<SkillCard
							name="Creatividad"
							img={creativaLogo}
							onClick={()=>{openModalSkill();setIdContentSkill(8)}}
							/>	

							<SkillCard
							name="Voluntad de aprender"
							img={aprendizajeLogo}
							onClick={()=>{openModalSkill();setIdContentSkill(9)}}
							/>	

							<SkillCard
							name="Adaptabilidad"
							img={adaptLogo}
							onClick={()=>{openModalSkill();setIdContentSkill(10)}}
							/>	

							<SkillCard
							name="Comunicación activa"
							img={comunicaLogo}
							onClick={()=>{openModalSkill();setIdContentSkill(11)}}
							/>	

						</Stack>
						
					</Grid>
					
					<Grid item className='Container-style2' sx={{overflow:"auto"}} xs={1} sm={1} md={2.7} lg={2.75} xl={2.7} m={0.4}>
						<Stack
						direction="column"
						justifyContent="center"
						alignItems="stretch"
					
						>
							<InfoCard/>
							<AcademicCard/>
						</Stack>
					</Grid>
				</Grid>
    	</header>
    </div>
  );
}

export default App;

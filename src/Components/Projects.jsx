import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import React from "react";
import { InView } from "react-intersection-observer";

const TECHNOLOGIES = {
  REACT: "React.js",
  REACTNATIVE: "React Native",
  REDUX: "Redux",
  SASS: "Sass",
  MATERIAL: "Material UI",
  CHAKRA: "Chakra UI",
  EXPRESS: "Express",
  POSTGRESQL: "PostgreSQL",
  SEQUELIZE: "Sequelize",
  CALENDAR: "FullCalendar IO",
  NODEMAILER: "Nodemailer",
  FORM: "React-Hook-Form",
  MAP: "Leaflet",
  MOBX: "MobX-state-tree",
  TYPESCRIPT: "TypeScript",
  TYPEORM: "TypeORM",
  WEBSOCKET: "WebSocket",
  JIRA: "Jira",
};

const projects = [
  {
    id: 0,
    github: "",
    youtube: "",
    role: "FrontEnd Developer",
    title: "Incubator",
    duaration: "{ November 2022 - current }",
    technologies: [
      TECHNOLOGIES.REACTNATIVE,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.TYPESCRIPT,
      TECHNOLOGIES.MOBX,
      TECHNOLOGIES.TYPEORM,
      TECHNOLOGIES.WEBSOCKET,
    ],
    description: `I am part of the frontend team developing a Messaging App with Srum Methodology and Jira.
    
    
    Features included: (TODO: editar textos)
    · Cookie based auth (web app , JWT). 
    · Async-local-storage based auth (mobile app). 
    · Forgot password (NodeMailer and JWT).
    · CRUD for admins, guards, clients. 
    · FullCalendar assing-edit-delete events. 
    · Geolocation filters.
    · Maps (leaflet). 
    · Contact form (EmailJS). 
    · Offline mode available in mobile app.`,
    imagePath: "somepath.img",
    color: "#D0E37F",
  },
  {
    id: 1,
    github: "https://github.com/francavisok/SecurityNet-front",
    youtube: "",
    role: "FullStack Developer",
    title: "SecurityNet",
    duaration: "{ 4 weeks }",
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.REACTNATIVE,
      TECHNOLOGIES.REDUX,
      TECHNOLOGIES.MATERIAL,
      TECHNOLOGIES.CALENDAR,
      TECHNOLOGIES.FORM,
      TECHNOLOGIES.MAP,
      TECHNOLOGIES.EXPRESS,
      TECHNOLOGIES.POSTGRESQL,
      TECHNOLOGIES.SEQUELIZE,
      TECHNOLOGIES.NODEMAILER,
    ],
    description: `Security Guard Administration web, IOS and Android Geolocation Mobile App that corroborates guards presence at work. Five people Team Work with Scrum Methodology and Trello.

    Features included: 
    · Cookie based auth (web app , JWT). 
    · Async-local-storage based auth (mobile app). 
    · Forgot password (NodeMailer and JWT).
    · CRUD for admins, guards, clients. 
    · FullCalendar assing-edit-delete events. 
    · Geolocation filters.
    · Maps (leaflet). 
    · Contact form (EmailJS). 
    · Offline mode available in mobile app.`,
    imagePath: "somepath.img",
    color: "#FFB585",
  },
  {
    id: 2,
    github: "https://github.com/francavisok/vbook",
    youtube: "",
    role: "FrontEnd Developer",
    title: "VBook",
    duaration: "{ 2 weeks }",
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.REDUX,
      TECHNOLOGIES.CHAKRA,
      TECHNOLOGIES.FORM,
      TECHNOLOGIES.EXPRESS,
      TECHNOLOGIES.POSTGRESQL,
      TECHNOLOGIES.SEQUELIZE,
      TECHNOLOGIES.NODEMAILER,
    ],
    description: `Virtual book ecommerce web application. Five people Team Work with Scrum Methodology and Trello.
      
      Features included: 
      · Encrypted password (Bcrypt).
      · Cookie based authentication (JWT). 
      · Login with Google, Facebook and Github. 
      · Search input.
      · Filters by category. 
      · Favorites. 
      · Shopping cart. 
      · Reviews left by customers. 
      · Five star rating. 
      · Purchase history. 
      · Mail sale confirmation (Nodemailer).`,
    imagePath: "somepath.img",
    color: "#D0E37F",
  },
  {
    id: 3,
    github: "https://github.com/francavisok/TMDB",
    youtube: "",
    role: "FullStack Developer",
    title: "TMDB",
    duaration: "{ 1 week }",
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.REDUX,
      TECHNOLOGIES.SASS,
      TECHNOLOGIES.EXPRESS,
      TECHNOLOGIES.POSTGRESQL,
      TECHNOLOGIES.SEQUELIZE,
    ],
    description: `Movie and Tv show catalogue web application consuming TMDB's API. Solo project done with Trello.
      
      Features included:
      · Cookie based authentication (JWT). 
      · Search input. 
      · Filters 
      · Favorites 
      · Exploring other user profiles.`,
    imagePath: "somepath.img",
    color: "#FFB585",
  },
];

const Projects = () => {
  const isNotSmallerScreen = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={{
        padding: 4,
        paddingY: 8,
        display: "flex",
        flexDirection: "column",
        rowGap: 8,
        alignItems: "center",
        width: "100%",
      }}
    >
      {projects.map((project) => (
        <InView key={project.id} threshold={0.2}>
          {({ inView, ref, entry }) => (
            <Box
              ref={ref}
              padding={isNotSmallerScreen ? 8 : 4}
              sx={{
                maxWidth: "820px",
                border: `2px solid ${project.color}`,
                boxShadow: `8px 7px ${project.color}`,
                opacity: 0,
                animation: inView
                  ? "fade-in 1.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
                  : "",
                "@keyframes fade-in": {
                  "0%": {
                    opacity: 0,
                  },
                  "100%": {
                    opacity: 1,
                  },
                },
              }}
            >
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ textTransform: "uppercase" }}>
                    {project.role}
                  </Typography>
                  <Box sx={{ display: "flex", columnGap: "30px" }}>
                    <Box
                      component="a"
                      href={project.youtube}
                      target="_blank"
                      sx={{ textDecoration: "none" }}
                    >
                      <YouTubeIcon
                        sx={{
                          color: "#F5F4EB",
                          ":hover": {
                            color: `${project.color}`,
                            transition: "0.4s",
                          },
                        }}
                      />
                    </Box>
                    <Box
                      component="a"
                      href={project.github}
                      target="_blank"
                      sx={{ textDecoration: "none" }}
                    >
                      <GitHubIcon
                        sx={{
                          color: "#F5F4EB",
                          ":hover": {
                            color: `${project.color}`,
                            transition: "0.4s",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Typography variant="h4">{project.title}</Typography>

                <Typography
                  variant="caption"
                  color={project.color}
                  display="block"
                >
                  {project.duaration}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    columnGap: "20px",
                    rowGap: "15px",
                    flexWrap: "wrap",
                    paddingY: 4,
                  }}
                >
                  {project.technologies.map((tech, i) => (
                    <Box
                      key={i}
                      sx={{
                        fontSize: "0.75em",
                        color: "#F5F4EB",
                        paddingX: 2,
                        paddingY: 0.5,
                        border: `1px solid ${project.color}`,
                        boxShadow: `3px 2px ${project.color}`,
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>

                <Typography sx={{ whiteSpace: "pre-line" }}>
                  {project.description}
                </Typography>
              </Box>
            </Box>
          )}
        </InView>
      ))}
    </Box>
  );
};

export default Projects;

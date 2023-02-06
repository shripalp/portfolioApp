import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const projectLinks = [
  {
    name: "Contact me",
    link: "/#contact-me",
    id: "contactme",
  },
  {
    name: "Projects",
    link: "/#projects",
    id: "projects",
  },
]
const Header = () => {
  
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <ul style={{ listStyle: 'none'}}>
              <HStack spacing={8}>
              {
                socials.map((item)=> <li><a key={item.url} href={item.url}><FontAwesomeIcon icon={item.icon} size="2x" key={item.url}/></a></li>)
              }

              </HStack>
              
            </ul>
          </nav>
          <nav>
            <ul style= {{ listStyle: 'none'}}>
            <HStack spacing={8}>
              {projectLinks.map((item)=><li><a key={item.link} href={item.link} onClick={handleClick(item.id)}>{item.name}</a></li> )}
            </HStack>
            </ul>
            
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

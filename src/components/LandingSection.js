import React from "react";
import { Avatar, Heading, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Shripal!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const myPhoto = require("../assets/images/profile.jpg");

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Wrap>
      <WrapItem>
        <Avatar name="Shripal Parikh" size="2xl" src={myPhoto} />
      </WrapItem>
    </Wrap>
    <VStack spacing={16}>
      <Heading size="sm">{greeting}</Heading>

      <Heading>{bio1}</Heading>
    </VStack>

    <Heading>{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;

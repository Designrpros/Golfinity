"use client";

import styled from "styled-components";

const SidebarContainer = styled.nav`
  width: 200px;
  background: #ffffff; /* Pure white */
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border-right: 1px solid ${({ theme }) => theme.colors.backgroundLight}; /* Light gray */

  @media (max-width: 768px) {
    display: none; /* Hide on mobile, use toolbar menu */
  }
`;

const SidebarInner = styled.div`
  height: calc(100vh - 60px); /* Subtract toolbar height */
  padding: 1rem;
  padding-top: clamp(4rem, 5vw, 5rem); /* Offset for fixed toolbar */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.primary} #ffffff;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary}; /* Green */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #1b5e20; /* Darker green */
  }
`;

const SidebarLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.textDark}; /* Dark gray */
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  font-weight: 600;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundLight}; /* Light gray */
    color: ${({ theme }) => theme.colors.primary}; /* Green */
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarInner>
        <SidebarLink href="#welcome">Welcome</SidebarLink>
        <SidebarLink href="#grip-stance">Grip & Stance</SidebarLink>
        <SidebarLink href="#swing-mechanics">Swing Mechanics</SidebarLink>
        <SidebarLink href="#short-game">Short Game</SidebarLink>
        <SidebarLink href="#putting">Putting</SidebarLink>
        <SidebarLink href="#equipment-essentials">Equipment Essentials</SidebarLink>
        <SidebarLink href="#course-navigation">Course Navigation</SidebarLink>
        <SidebarLink href="#rules-etiquette">Rules & Etiquette</SidebarLink>
        <SidebarLink href="#course-types">Course Types</SidebarLink>
        <SidebarLink href="#practice-drills">Practice Drills</SidebarLink>
        <SidebarLink href="#mental-game">Mental Game</SidebarLink>
        <SidebarLink href="#online-resources">Online Resources</SidebarLink>
        <SidebarLink href="#mobile-apps">Mobile Apps</SidebarLink>
        <SidebarLink href="#golf-communities">Golf Communities</SidebarLink>
      </SidebarInner>
    </SidebarContainer>
  );
};

export default Sidebar;
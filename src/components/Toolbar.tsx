"use client";

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";

const ToolbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem);
  background-color: ${({ theme }) => theme.colors.backgroundContent}; /* Off-white */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%; /* Prevent overflow */
  z-index: 1000;
  box-sizing: border-box;
  min-height: 60px;

  @media (max-width: 768px) {
    padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem);
  }

  @media (max-width: 480px) {
    padding: clamp(0.4rem, 1vw, 0.5rem) clamp(0.5rem, 1.5vw, 0.75rem);
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 700;
  color: #000000; /* Black logo */
  transition: color 0.3s ease;
  flex-shrink: 0;
  z-index: 1001;

  &:hover {
    color: ${({ theme }) => theme.colors.primary}; /* Emerald green */
  }
`;

const NavLinks = styled.div`
  display: none; /* Always hidden, burger icon takes over */
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const NavLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark}; /* Dark gray */
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  white-space: nowrap;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary}; /* Emerald green */
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.4s ease, left 0.4s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const BurgerIcon = styled.div<{ $isOpen: boolean }>`
  display: flex; /* Always visible */
  flex-direction: column;
  gap: clamp(4px, 1vw, 5px);
  cursor: pointer;
  z-index: 1002; /* Above MobileMenu */
  padding: clamp(0.5rem, 1.5vw, 0.75rem); /* Larger tap area */

  div {
    width: clamp(20px, 4vw, 25px);
    height: clamp(2px, 0.5vw, 3px);
    background-color: ${({ theme }) => theme.colors.textDark}; /* Dark gray */
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  `}

  @media (max-width: 480px) {
    padding: clamp(0.4rem, 1vw, 0.5rem);
    div {
      width: 20px;
      height: 2px;
    }
  }

  @media (max-width: 360px) {
    padding: 0.4rem;
    div {
      width: 18px;
      height: 1.5px;
    }
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 60px; /* Below toolbar */
  left: 0;
  width: 100%;
  height: calc(100vh - 60px); /* Fill remaining screen */
  background: ${({ theme }) => theme.colors.backgroundContent}; /* Dark green */
  z-index: 999; /* Below BurgerIcon */
  padding: clamp(1.5rem, 4vw, 2rem) 0;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: 480px) {
    padding: clamp(1rem, 3vw, 1.5rem) 0;
  }

  @media (max-width: 360px) {
    padding: clamp(0.75rem, 2vw, 1rem) 0;
  }
`;

const MobileNavLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textDark}; /* White */
  text-decoration: none;
  padding: clamp(1rem, 3vw, 1.5rem); /* Better tap targets */
  transition: color 0.3s ease;
  text-align: center;
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.colors.primary}; /* Emerald green */
  }

  @media (max-width: 480px) {
    font-size: clamp(1.1rem, 3vw, 1.5rem);
    padding: clamp(0.75rem, 2vw, 1.25rem);
  }

  @media (max-width: 360px) {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    padding: clamp(0.5rem, 1.5vw, 0.75rem);
  }
`;

const Toolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu when clicking outside, excluding BurgerIcon
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".burger-icon")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <ToolbarContainer>
        <Logo href="/">Golfex</Logo>
        <NavLinks>
          <NavLink href="/basics">Basics</NavLink>
          <NavLink href="/techniques">Techniques</NavLink>
          <NavLink href="/equipment">Equipment</NavLink>
          <NavLink href="/courses">Courses</NavLink>
          <NavLink href="/resources">Resources</NavLink>
          <NavLink href="/index-page">Index</NavLink>
        </NavLinks>
        <BurgerIcon className="burger-icon" $isOpen={isOpen} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </BurgerIcon>
      </ToolbarContainer>
      <MobileMenu ref={menuRef} $isOpen={isOpen}>
        <MobileNavLink href="/basics" onClick={toggleMenu}>
          Basics
        </MobileNavLink>
        <MobileNavLink href="/techniques" onClick={toggleMenu}>
          Techniques
        </MobileNavLink>
        <MobileNavLink href="/equipment" onClick={toggleMenu}>
          Equipment
        </MobileNavLink>
        <MobileNavLink href="/courses" onClick={toggleMenu}>
          Courses
        </MobileNavLink>
        <MobileNavLink href="/resources" onClick={toggleMenu}>
          Resources
        </MobileNavLink>
        <MobileNavLink href="/index-page" onClick={toggleMenu}>
          Index
        </MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Toolbar;
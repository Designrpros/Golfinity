"use client";

import styled from "styled-components";

const Card = styled.div`
  background: #ffffff; /* Pure white */
  padding: clamp(1rem, 2vw, 1.5rem);
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary}; /* Green */
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  box-sizing: border-box;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundLight}; /* Light gray */
  }

  @media (max-width: 480px) {
    padding: clamp(0.75rem, 1.5vw, 1rem);
  }
`;

const Title = styled.h3`
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  color: ${({ theme }) => theme.colors.textDark}; /* Dark gray */
  margin: 0 0 0.5rem 0;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  }
`;

const Description = styled.div<{ $isOpen: boolean }>`
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  color: ${({ theme }) => theme.colors.textDark}; /* Dark gray */
  line-height: 1.6;
  margin: 0;
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;

  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  }
`;

const DiveDeeperContainer = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? "100px" : "0")};
  overflow: hidden;
  margin-top: clamp(0.5rem, 1vw, 0.75rem);
  transition: max-height 0.3s ease;

  @media (max-width: 480px) {
    margin-top: 0.5rem;
  }
`;

const DiveDeeperButton = styled.a`
  display: block;
  width: fit-content;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary}; /* Green */
  color: ${({ theme }) => theme.colors.textLight}; /* White */
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  transition: background 0.3s ease;

  &:hover {
    background: #1b5e20; /* Darker green */
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;

interface Props {
  title: string;
  description: string;
  deepDive?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function TopicCard({ title, description, deepDive, isOpen, onToggle }: Props) {
  return (
    <Card onClick={onToggle}>
      <Title>{title}</Title>
      <Description $isOpen={isOpen}>{description}</Description>
      {deepDive && (
        <DiveDeeperContainer $isOpen={isOpen}>
          <DiveDeeperButton href={deepDive} target="_blank" rel="noopener noreferrer">
            Dive Deeper
          </DiveDeeperButton>
        </DiveDeeperContainer>
      )}
    </Card>
  );
};
"use client";

import styled from "styled-components";
import Image from "next/image";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundContent}; // Off-white background
  color: ${({ theme }) => theme.colors.textDark}; // Dark gray text
  font-family: "Montserrat", sans-serif;
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundDark}; // Dark green hero background
`;

const HeroImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(20%); // Reduced grayscale for a fresher look
  opacity: 0.9; // Slightly higher opacity to blend with green
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textLight}; // White text
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.backgroundLight}; // Light gray for subtitle
  margin-top: 1rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.backgroundContent}; // Off-white content background
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary}; // Green border
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textDark}; // Dark gray title
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textDark}; // Dark gray text
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SectionList = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textDark}; // Dark gray text
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;

export default function Home() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroContainer>
        <HeroImage
          src="/images/Hero.jpg" // Replace with your golf-themed hero image
          alt="Golfex Hero"
          layout="fill"
          priority
        />
        <HeroText>
          <HeroTitle>Golfinity</HeroTitle>
          <HeroSubtitle>Your guide to mastering the game of golf</HeroSubtitle>
        </HeroText>
      </HeroContainer>

      {/* Content Section */}
      <ContentContainer>
        <Section>
          <SectionTitle>Welcome to Golfinity</SectionTitle>
          <SectionText>
            Golfex is your ultimate resource for learning and mastering golf, focusing on techniques, equipment, and course strategies. Whether you’re a beginner picking up a club for the first time or a seasoned player aiming to lower your handicap, our site offers clear, practical guides to elevate your game. Scroll down to explore what you’ll find on each page.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>What to Expect</SectionTitle>
          <SectionText>
            Golfinity is packed with actionable insights and tips to help you excel on the course. Here’s a quick overview of what you’ll find on each page:
          </SectionText>
          <SectionList>
            <ListItem>
              <strong>Basics</strong>: Learn the fundamentals of golf—grip, stance, swing mechanics, rules, and etiquette, with step-by-step guides and examples for beginners.
            </ListItem>
            <ListItem>
              <strong>Techniques</strong>: Follow a structured roadmap to improve your game, from driving and iron play to putting and short game, with drills and tips for every skill level.
            </ListItem>
            <ListItem>
              <strong>Equipment</strong>: Dive into choosing the right gear—clubs, balls, bags, and apparel—with detailed guides on club fitting, technology, and maintenance.
            </ListItem>
            <ListItem>
              <strong>Courses</strong>: Explore iconic golf courses, understand their layouts, and learn strategies for playing different types of holes, with subpages on famous venues and local gems.
            </ListItem>
            <ListItem>
              <strong>Resources</strong>: Discover curated tools, tutorials, and resources to boost your golfing skills, from training aids to apps and instructional videos.
            </ListItem>
            <ListItem>
              <strong>Index</strong>: Get a concise overview of everything on Golfex. This page summarizes key concepts in bite-sized sections, ideal for quick reference or review.
            </ListItem>
          </SectionList>
          <SectionText>
            Whether you’re here to learn the basics, refine your swing, or navigate the world’s best courses, Golfex has something for you. Start your journey today!
          </SectionText>
        </Section>
      </ContentContainer>
    </PageContainer>
  );
}
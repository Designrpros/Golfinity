"use client";

import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import TopicCard from "../../components/TopicCard";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundContent}; /* Off-white */
  color: ${({ theme }) => theme.colors.textDark}; /* Dark gray */
  font-family: "Montserrat", sans-serif;
  padding-top: 60px; /* Space for fixed toolbar */

  @media (max-width: 768px) {
    padding-top: 56px; /* Slightly smaller for mobile */
  }
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 85vh; /* Consistent with basics/techniques */
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundDark}; /* Dark green */

  @media (max-width: 768px) {
    height: 70vh;
  }

  @media (max-width: 480px) {
    height: 60vh;
  }
`;

const HeroImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(20%); /* Light grayscale for golf theme */
  opacity: 0.9;
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
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textLight}; /* White */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;

  @media (max-width: 480px) {
    font-size: clamp(2rem, 5vw, 3rem);
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: ${({ theme }) => theme.colors.backgroundLight}; /* Light gray */
  margin-top: 1rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 2vw, 1.2rem);
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(1.5rem, 3vw, 2rem);
  background: ${({ theme }) => theme.colors.backgroundContent}; /* Off-white */
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: clamp(1rem, 2vw, 1.5rem);
  }
`;

const Section = styled.section`
  margin-bottom: clamp(2rem, 4vw, 3rem);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary}; /* Green */
  padding-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
`;

const LargeText = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.colors.textDark}; /* Dark gray */
  line-height: 1.8;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  }
`;

export default function Equipment() {
  const [openTopics, setOpenTopics] = useState<{ [key: number]: boolean }>({});

  const toggleTopic = (index: number) => {
    setOpenTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: "Clubs Overview",
      largeText:
        "Golf clubs are the core of your equipment, each designed for specific shots. From drivers for long tee shots to putters for the green, understanding club types helps you build a functional set. Start with a beginner-friendly half-set and visit a golf shop to try different clubs.",
      topics: [
        {
          title: "Drivers",
          description:
            "Drivers are used for maximum distance off the tee, typically with lofts of 9-12 degrees. Choose a forgiving model (e.g., Callaway Big Bertha) with a large sweet spot. Test a driver at a fitting session to match your swing speed.",
          deepDive: "https://www.golfdigest.com/story/best-drivers-for-beginners",
        },
        {
          title: "Irons",
          description:
            "Irons (3-9) are versatile for fairway shots, approaches, and rough. Higher numbers (e.g., 9-iron) have more loft for shorter shots. Opt for cavity-back irons for forgiveness. Try hitting a 7-iron at a range to feel its balance.",
          deepDive: "https://www.pga.com/story/choosing-the-right-irons",
        },
        {
          title: "Wedges",
          description:
            "Wedges (pitching, sand, lob) are for short, high shots around the green. A 56-degree sand wedge is a must for bunkers. Practice 30-yard wedge shots to learn spin and control.",
          deepDive: "https://golf.com/gear/wedges/best-wedges-for-beginners/",
        },
        {
          title: "Putters",
          description:
            "Putters roll the ball on the green, with blade or mallet designs. Mallets are forgiving for beginners. Test a putter on a practice green, focusing on a comfortable grip and alignment aids.",
          deepDive: "https://www.golfdigest.com/story/best-putters-for-amateurs",
        },
      ],
    },
    {
      title: "Golf Balls",
      largeText:
        "Golf balls affect distance, spin, and feel, and choosing the right one can improve your game. Beginners should prioritize low-compression, durable balls for distance and forgiveness. Buy a dozen affordable balls and test them at a range to find your preference.",
      topics: [
        {
          title: "Ball Types",
          description:
            "Distance balls (e.g., Titleist Velocity) maximize yardage, while soft balls (e.g., Callaway Supersoft) offer better feel. Avoid high-spin balls for now. Hit 10 balls of each type at a range to compare distance and control.",
          deepDive: "https://www.golfdigest.com/story/best-golf-balls-for-beginners",
        },
        {
          title: "Compression",
          description:
            "Low-compression balls (50-70) are easier to compress for slower swings (under 90 mph), adding distance. Check your swing speed at a pro shop and pick a ball like Bridgestone e6 for a soft feel.",
          deepDive: "https://www.pga.com/story/golf-ball-compression-guide",
        },
        {
          title: "Personalization",
          description:
            "Mark your balls with a Sharpie (e.g., initials or dots) to identify them. Some brands offer custom logos or numbers. Practice with marked balls during a round to avoid confusion.",
          deepDive: "https://golf.com/gear/golf-balls/personalized-golf-balls/",
        },
      ],
    },
    {
      title: "Bags & Accessories",
      largeText:
        "A good golf bag and accessories keep you organized and comfortable on the course. Choose a lightweight bag with enough storage for your clubs and essentials. Invest in key accessories like gloves and tees to enhance your experience.",
      topics: [
        {
          title: "Golf Bags",
          description:
            "Carry bags are light (under 5 lbs) for walking, while cart bags are heavier for carts. Look for a stand bag with dual straps for comfort. Test a bag’s weight and pockets at a store before buying.",
          deepDive: "https://www.golfdigest.com/story/best-golf-bags-for-walking",
        },
        {
          title: "Gloves",
          description:
            "A glove improves grip, especially in wet conditions. Choose a leather or synthetic glove that fits snugly. Try a FootJoy WeatherSof glove and wear it during a range session to feel the difference.",
          deepDive: "https://www.pga.com/story/choosing-a-golf-glove",
        },
        {
          title: "Tees & Tools",
          description:
            "Use 2.75-inch tees for drivers, shorter ones for irons. A divot repair tool and ball marker are essential for greens. Buy a pack of wooden tees and a basic divot tool to start.",
          deepDive: "https://golf.com/gear/accessories/essential-golf-accessories/",
        },
      ],
    },
    {
      title: "Apparel & Footwear",
      largeText:
        "Golf apparel and footwear balance comfort, style, and function. Breathable polos, flexible pants, and spiked shoes are standard. Check course dress codes and prioritize gear that supports long rounds in varying weather.",
      topics: [
        {
          title: "Clothing",
          description:
            "Wear collared polos and moisture-wicking shorts or pants. Layer with a lightweight jacket for cool days. Try Under Armour or Nike golf apparel at a store to ensure a good fit.",
          deepDive: "https://www.golfdigest.com/story/best-golf-apparel-brands",
        },
        {
          title: "Shoes",
          description:
            "Spiked shoes offer traction; spikeless are versatile. Choose waterproof shoes with cushioning (e.g., Adidas Tour360). Walk 9 holes in new shoes to test comfort and grip.",
          deepDive: "https://www.pga.com/story/best-golf-shoes-for-beginners",
        },
        {
          title: "Weather Gear",
          description:
            "A golf umbrella and rain gloves prepare you for wet rounds. Pack a waterproof bag cover for sudden showers. Practice swinging in light rain gear to stay comfortable.",
          deepDive: "https://golf.com/gear/accessories/best-rain-gear-for-golf/",
        },
      ],
    },
    {
      title: "Club Fitting",
      largeText:
        "Club fitting tailors equipment to your body and swing, improving performance. Even beginners benefit from basic fittings for club length, lie angle, and shaft flex. Visit a pro shop or fitting center to get measured and optimize your set.",
      topics: [
        {
          title: "Shaft Flex",
          description:
            "Shaft flex (regular, stiff, senior) matches your swing speed. Slower swings (under 85 mph) need regular or senior flex. Get your swing speed measured at a fitting to choose the right shaft.",
          deepDive: "https://www.golfdigest.com/story/shaft-flex-explained",
        },
        {
          title: "Club Length",
          description:
            "Standard-length clubs suit most, but taller or shorter players need adjustments. Measure your wrist-to-floor distance for proper length. Try fitted clubs at a demo day to feel the difference.",
          deepDive: "https://www.pga.com/story/club-fitting-length-guide",
        },
        {
          title: "Lie Angle",
          description:
            "Lie angle affects shot direction. If your clubs’ soles don’t sit flat at address, adjust the lie. Test lie angle with impact tape at a fitting session to ensure accuracy.",
          deepDive: "https://golf.com/gear/clubs/lie-angle-fitting/",
        },
      ],
    },
    {
      title: "Technology & Gadgets",
      largeText:
        "Golf technology, like rangefinders and swing analyzers, can enhance your game and practice. Start with simple tools to track distances and monitor progress. Experiment with a budget gadget to see its impact before investing heavily.",
      topics: [
        {
          title: "Rangefinders",
          description:
            "Rangefinders measure distances to pins or hazards (e.g., 150 yards to the green). Laser models are precise; GPS apps are affordable. Try a Bushnell Tour V5 on a course to improve club selection.",
          deepDive: "https://www.golfdigest.com/story/best-rangefinders",
        },
        {
          title: "Swing Analyzers",
          description:
            "Analyzers (e.g., Arccos sensors) track swing speed, path, and stats. Attach one to your club and review data after a round. Use a free app like Golfshot to start tracking shots.",
          deepDive: "https://www.pga.com/story/best-golf-swing-analyzers",
        },
        {
          title: "Launch Monitors",
          description:
            "Launch monitors (e.g., SkyTrak) measure ball flight and spin, ideal for practice. Budget models start at $500. Test one at a golf store to see how data can guide your practice.",
          deepDive: "https://golf.com/gear/launch-monitors/best-launch-monitors/",
        },
      ],
    },
    {
      title: "Maintenance & Care",
      largeText:
        "Proper maintenance extends the life of your equipment and ensures performance. Clean clubs after rounds, store them properly, and check grips regularly. Set up a cleaning routine at home to keep your gear in top shape.",
      topics: [
        {
          title: "Club Cleaning",
          description:
            "Clean clubfaces with a brush, warm water, and dish soap after each round. Dry thoroughly to prevent rust. Clean your irons before a range session to see improved spin.",
          deepDive: "https://www.golfdigest.com/story/how-to-clean-golf-clubs",
        },
        {
          title: "Grip Maintenance",
          description:
            "Worn grips reduce control. Clean with soapy water or replace every 40 rounds. Check your grips’ texture and replace one at a shop to feel the difference.",
          deepDive: "https://www.pga.com/story/golf-grip-maintenance",
        },
        {
          title: "Storage",
          description:
            "Store clubs in a dry, cool place to avoid damage. Use headcovers for woods and keep your bag upright. Inspect your bag’s storage setup to protect your clubs.",
          deepDive: "https://golf.com/gear/clubs/how-to-store-golf-clubs/",
        },
      ],
    },
    {
      title: "Budget Options",
      largeText:
        "You don’t need expensive gear to enjoy golf. Budget-friendly clubs, balls, and accessories perform well for beginners. Shop used or discounted items to build a solid set without breaking the bank.",
      topics: [
        {
          title: "Used Clubs",
          description:
            "Buy pre-owned clubs from reputable sellers like GlobalGolf or 2nd Swing. Look for sets from 2-3 years ago for quality at lower prices. Test a used 7-iron at a shop to ensure it’s in good condition.",
          deepDive: "https://www.golfdigest.com/story/best-places-to-buy-used-clubs",
        },
        {
          title: "Affordable Balls",
          description:
            "Budget balls like Wilson Staff Duo Soft offer distance and durability for under $20/dozen. Avoid refurbished balls, which may be inconsistent. Buy a sleeve and test it against a premium ball.",
          deepDive: "https://www.pga.com/story/best-budget-golf-balls",
        },
        {
          title: "Discount Accessories",
          description:
            "Shop sales at Dick’s Sporting Goods or Amazon for gloves, tees, and bags. Look for last season’s models for deals. Check clearance racks at a golf store for budget finds.",
          deepDive: "https://golf.com/gear/accessories/budget-golf-accessories/",
        },
      ],
    },
    {
      title: "Customizations",
      largeText:
        "Customizing equipment adds personal flair and can improve performance. From grip sizes to shaft upgrades, small tweaks make a difference. Work with a fitter or pro shop to explore options as your game grows.",
      topics: [
        {
          title: "Grip Sizes",
          description:
            "Standard grips suit most, but larger or smaller grips can improve comfort. Midsize grips help with arthritis. Try different grip sizes at a fitting to find your preference.",
          deepDive: "https://www.golfdigest.com/story/golf-grip-size-guide",
        },
        {
          title: "Shaft Upgrades",
          description:
            "Aftermarket shafts (e.g., Project X) can enhance feel or distance. Upgrades cost $50-$200 per club. Test a new shaft in your driver at a fitting center to assess benefits.",
          deepDive: "https://www.pga.com/story/shaft-upgrade-guide",
        },
        {
          title: "Personalized Gear",
          description:
            "Engrave initials on clubs or add custom logos to bags. Some retailers offer free personalization. Order a custom ball marker online to add a personal touch.",
          deepDive: "https://golf.com/gear/personalized-golf-gear/",
        },
      ],
    },
    {
      title: "Buying Guide",
      largeText:
        "Buying golf equipment can be overwhelming, but a clear plan saves time and money. Research online, test gear in stores, and prioritize quality over brand hype. Visit a golf expo or demo day to try multiple options before purchasing.",
      topics: [
        {
          title: "Where to Buy",
          description:
            "Shop at PGA Tour Superstore, Golf Galaxy, or online at Rock Bottom Golf. Local pro shops offer fitting expertise. Compare prices online and visit a store to test a driver before buying.",
          deepDive: "https://www.golfdigest.com/story/best-places-to-buy-golf-equipment",
        },
        {
          title: "Testing Gear",
          description:
            "Hit clubs at a range or simulator before buying. Demo days let you try brands like TaylorMade or Ping. Spend 30 minutes testing a set of irons to ensure they suit your swing.",
          deepDive: "https://www.pga.com/story/how-to-test-golf-clubs",
        },
        {
          title: "Warranties & Returns",
          description:
            "Check return policies (e.g., 30 days at Dick’s) and warranties (1-2 years for clubs). Keep receipts and packaging. Buy a wedge from a retailer with a good return policy to test worry-free.",
          deepDive: "https://golf.com/gear/golf-equipment-buying-guide/",
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <HeroContainer>
        <HeroImage
          src="/images/golf-equipment-hero.jpg" // Golf equipment-themed image
          alt="Equipment Hero"
          layout="fill"
          priority
        />
        <HeroText>
          <HeroTitle>Equipment</HeroTitle>
          <HeroSubtitle>Choose the right gear to enhance your golf game</HeroSubtitle>
        </HeroText>
      </HeroContainer>

      <ContentContainer>
        {sections.map((section, sectionIndex) => (
          <Section key={sectionIndex}>
            <SectionTitle>{section.title}</SectionTitle>
            {section.largeText && <LargeText>{section.largeText}</LargeText>}
            {section.topics.map((topic, topicIndex) => {
              const globalIndex = sectionIndex * 100 + topicIndex; // Unique index
              return (
                <TopicCard
                  key={globalIndex}
                  title={topic.title}
                  description={topic.description}
                  deepDive={topic.deepDive}
                  isOpen={!!openTopics[globalIndex]}
                  onToggle={() => toggleTopic(globalIndex)}
                />
              );
            })}
          </Section>
        ))}
      </ContentContainer>
    </PageContainer>
  );
};
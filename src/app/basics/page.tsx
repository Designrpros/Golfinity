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
  height: 85vh; /* Slightly shorter for better mobile fit */
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

export default function Basics() {
  const [openTopics, setOpenTopics] = useState<{ [key: number]: boolean }>({});

  const toggleTopic = (index: number) => {
    setOpenTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: "Grip & Stance",
      largeText:
        "The grip and stance are the foundation of every golf shot. A proper grip ensures control and power, while a balanced stance sets you up for a consistent swing. Start by holding the club with a neutral grip—neither too tight nor too loose—and align your feet shoulder-width apart, knees slightly bent. Experiment with these basics at a driving range to feel how they affect your shots.",
      topics: [
        {
          title: "Neutral Grip",
          description:
            "Place the club in your left hand (for right-handed golfers) so it runs diagonally from the base of your index finger to the heel pad. Wrap your fingers around, then add your right hand, interlocking or overlapping the fingers. Check that the ‘V’ shapes formed by your thumbs point toward your right shoulder. Practice this grip to ensure a square clubface at impact.",
        },
        {
          title: "Proper Stance",
          description:
            "Stand with your feet shoulder-width apart, knees slightly flexed, and weight centered on the balls of your feet. Tilt your spine forward about 30 degrees, keeping it straight. Align your body parallel to the target line. Try this stance with a 7-iron to feel balanced and ready to swing.",
        },
        {
          title: "Grip Pressure",
          description:
            "Hold the club with a pressure of about 4 out of 10—firm but not tense. Too tight a grip restricts wrist hinge, reducing power; too loose risks losing control. Practice swinging with different pressures at a range to find your sweet spot.",
        },
      ],
    },
    {
      title: "Swing Mechanics",
      largeText:
        "The golf swing is a complex motion that combines rotation, leverage, and timing. It starts with a smooth takeaway, builds power through the backswing, and releases energy at impact. Focus on keeping your swing simple and repeatable, using your body’s natural motion. Record your swing at a range to spot areas for improvement.",
      topics: [
        {
          title: "Takeaway",
          description:
            "Begin your swing by moving the club back low and slow, keeping your left arm straight and wrists relaxed. Rotate your shoulders while keeping your lower body stable. Practice a one-piece takeaway with a wedge to groove a smooth start.",
        },
        {
          title: "Backswing",
          description:
            "Rotate your torso to load power, letting your hips turn slightly. Keep the club on plane by ensuring the shaft points at the target line halfway back. At the top, your left shoulder should be under your chin. Try a 3/4 backswing with a mid-iron to maintain control.",
        },
        {
          title: "Downswing & Impact",
          description:
            "Start the downswing by shifting your weight to your left foot and rotating your hips toward the target. Let your arms drop naturally, keeping the clubface square at impact. Practice hitting half-shots with a 9-iron to focus on clean contact.",
        },
      ],
    },
    {
      title: "Rules & Etiquette",
      largeText:
        "Golf is as much about respect as it is about skill. Understanding basic rules and etiquette ensures you play fairly and enhance the experience for others. Start by learning key rules like out-of-bounds and penalties, and practice etiquette like staying quiet during others’ shots. Visit a local course to observe these principles in action.",
      topics: [
        {
          title: "Basic Rules",
          description:
            "Play the ball as it lies, and don’t touch it unless allowed (e.g., on the green). Out-of-bounds (white stakes) means a one-stroke penalty and replay from the original spot. Learn the 14-club limit and how to take a drop. Review the USGA Rules app for quick reference.",
        },
        {
          title: "Course Etiquette",
          description:
            "Keep pace with the group ahead, repair divots, and rake bunkers. Stay silent and still when others are hitting, and shout ‘Fore!’ if your ball might hit someone. Practice these habits during a casual round to build good habits.",
        },
        {
          title: "Scoring Rules",
          description:
            "Count every stroke, including penalties. A ‘par’ is the expected score for a hole (e.g., 4). Bogeys (+1) and birdies (-1) are common terms. Keep a scorecard during a 9-hole round to practice honest scoring.",
        },
      ],
    },
    {
      title: "Equipment Basics",
      largeText:
        "Choosing the right equipment can make learning golf easier and more enjoyable. Beginners need a simple set—driver, irons, wedges, putter—and a comfortable bag. Focus on clubs that match your swing speed and skill level, and don’t overspend on high-end gear yet. Visit a golf shop to try different clubs before buying.",
      topics: [
        {
          title: "Club Types",
          description:
            "Drivers are for long shots off the tee, irons (3-9) for fairway or approach shots, wedges for short shots, and putters for the green. Start with a half-set (driver, 5-iron, 9-iron, wedge, putter) to keep things simple. Try hitting each club at a range to understand their roles.",
        },
        {
          title: "Golf Balls",
          description:
            "Beginner balls (e.g., Titleist TruFeel) are low-compression, offering distance and forgiveness. Avoid high-spin balls meant for pros. Buy a dozen affordable balls and mark them with a Sharpie to track yours during play.",
        },
        {
          title: "Club Fitting",
          description:
            "Fitting adjusts club length, lie angle, and shaft flex to your body and swing. Beginners can use standard clubs but consider a basic fitting if you’re tall or short. Visit a pro shop for a free swing analysis to guide your choice.",
        },
      ],
    },
    {
      title: "Course Navigation",
      largeText:
        "Understanding a golf course’s layout helps you plan shots and avoid trouble. Courses have 18 holes, each with a tee box, fairway, hazards (bunkers, water), and green. Learn to read yardage markers and aim for safe targets. Play a par-3 course to practice navigating holes without overwhelming distance.",
      topics: [
        {
          title: "Hole Layout",
          description:
            "A par-4 hole typically has a tee box, fairway, and green, with hazards like bunkers. Par-3s are shorter, par-5s longer. Study a course scorecard to learn hole distances and pars before playing.",
        },
        {
          title: "Yardage Markers",
          description:
            "Courses mark distances (e.g., 150 yards to the green) with stakes or plates. Use these to choose your club—e.g., a 7-iron for 150 yards. Practice estimating distances at a range to improve club selection.",
        },
        {
          title: "Hazards",
          description:
            "Bunkers and water are hazards that add penalty strokes if your ball lands in them. Aim for the fairway to avoid trouble. Practice bunker shots at a course’s practice area to build confidence.",
        },
      ],
    },
    {
      title: "Scoring & Terminology",
      largeText:
        "Golf scoring and terminology can seem daunting, but they’re straightforward once you practice. Terms like ‘birdie’ and ‘bogey’ describe your score relative to par, while ‘slice’ and ‘hook’ describe ball flight. Keep a scorecard during a round to familiarize yourself with scoring and lingo.",
      topics: [
        {
          title: "Scoring Terms",
          description:
            "Par is the standard score for a hole. A birdie is 1-under par, a bogey 1-over. An eagle is 2-under, rare for beginners. Track your score on a 9-hole round to learn these terms.",
        },
        {
          title: "Ball Flight Terms",
          description:
            "A slice curves right (for right-handers), a hook left. A straight shot is ideal but rare for beginners. Hit balls at a range and observe your ball flight to identify your tendencies.",
        },
        {
          title: "Handicap",
          description:
            "A handicap measures your skill level, letting you compete with better players. Beginners start with a high handicap (e.g., 36). Play a few rounds and use a golf app like GHIN to calculate yours.",
        },
      ],
    },
    {
      title: "Physical Conditioning",
      largeText:
        "Golf requires flexibility, strength, and endurance to swing consistently over 18 holes. Simple exercises like stretching, core workouts, and grip strength drills can boost your game. Start a basic routine at home to improve your swing power and prevent injury.",
      topics: [
        {
          title: "Flexibility",
          description:
            "Stretch your hips, shoulders, and back to improve swing rotation. Try a 10-minute yoga routine focusing on torso twists and hamstring stretches before playing.",
        },
        {
          title: "Core Strength",
          description:
            "A strong core stabilizes your swing. Do planks (30 seconds, 3 sets) and Russian twists to build core power. Practice these twice a week to see swing improvements.",
        },
        {
          title: "Endurance",
          description:
            "Walking 18 holes can cover 5-7 miles. Build stamina with 30-minute walks or light jogging 3 times a week. Carry your bag for a few holes to simulate course conditions.",
        },
      ],
    },
    {
      title: "Practice Drills",
      largeText:
        "Effective practice builds muscle memory and confidence. Focus on drills that target specific skills like putting, chipping, or driving. Spend 30 minutes at a range or practice green to work on one drill at a time, keeping it fun and focused.",
      topics: [
        {
          title: "Putting Drill",
          description:
            "Place 3 balls at 3, 6, and 9 feet from a hole on a practice green. Try to sink all 9 putts in a row. This builds confidence in short putts, crucial for scoring.",
        },
        {
          title: "Chipping Drill",
          description:
            "Set up a target (e.g., a towel) 10 yards away and chip 10 balls to land within 3 feet. Use a wedge and focus on a clean, upward strike. Practice this to improve your short game.",
        },
        {
          title: "Driving Drill",
          description:
            "At a range, aim for a 50-yard-wide fairway marker with your driver. Hit 20 balls, counting how many land in the target zone. This improves accuracy off the tee.",
        },
      ],
    },
    {
      title: "Mental Game",
      largeText:
        "Golf is as mental as it is physical. Staying calm, focused, and positive can lower your score. Develop routines to manage nerves and visualize shots before hitting. Practice mindfulness during a round to stay present and enjoy the game.",
      topics: [
        {
          title: "Pre-Shot Routine",
          description:
            "Create a consistent routine: stand behind the ball, visualize the shot, take one practice swing, then hit. Use this routine for every shot to build confidence and focus.",
        },
        {
          title: "Managing Frustration",
          description:
            "Bad shots happen. Take a deep breath, focus on the next shot, and avoid dwelling on mistakes. After a bad hole, walk slowly and reset mentally before the next tee.",
        },
        {
          title: "Visualization",
          description:
            "Before each shot, picture the ball’s flight and landing spot. Imagine a perfect 7-iron shot to a green. Practice this at a range to improve shot planning.",
        },
      ],
    },
    {
      title: "Getting Started",
      largeText:
        "Starting golf can feel overwhelming, but it’s about taking small steps. Find a local course, take a lesson, or join a beginner clinic. Play 9 holes with a friend to make it fun, and don’t worry about perfection—focus on enjoying the process.",
      topics: [
        {
          title: "First Lesson",
          description:
            "Book a lesson with a PGA pro to learn grip, stance, and swing basics. A 30-minute lesson can set you up for success. Ask about beginner packages at your local course.",
          resource: "https://www.pga.com/coach",
        },
        {
          title: "Finding a Course",
          description:
            "Look for a public or par-3 course nearby—they’re beginner-friendly and affordable. Check GolfNow.com for tee times and reviews. Start with 9 holes to keep it manageable.",
          resource: "https://www.golfnow.com",
        },
        {
          title: "Joining a Group",
          description:
            "Join a local golf league or clinic to meet other beginners. Many courses offer weekly groups for new players. Sign up for a clinic to learn in a social, low-pressure setting.",
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <HeroContainer>
        <HeroImage
          src="/images/golf-basics-hero.jpg" // Golf-themed image
          alt="Basics Hero"
          layout="fill"
          priority
        />
        <HeroText>
          <HeroTitle>Basics</HeroTitle>
          <HeroSubtitle>The foundation of your golf journey</HeroSubtitle>
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
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
  height: 85vh; /* Consistent with basics */
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

export default function Techniques() {
  const [openTopics, setOpenTopics] = useState<{ [key: number]: boolean }>({});

  const toggleTopic = (index: number) => {
    setOpenTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: "Full Swing",
      largeText:
        "The full swing is the cornerstone of golf, used for drives and long iron shots. It’s a blend of power, precision, and rhythm. Focus on a smooth tempo and maintaining balance throughout the swing. Record your swing at a driving range to analyze your form and make adjustments.",
      topics: [
        {
          title: "Swing Plane",
          description:
            "The swing plane is the path your club follows. A neutral plane keeps the clubhead on a consistent arc, improving accuracy. Use a mirror or alignment stick at a range to ensure your club stays on plane during the backswing and downswing.",
          deepDive: "https://www.golfdigest.com/story/how-to-find-the-perfect-swing-plane",
        },
        {
          title: "Weight Transfer",
          description:
            "Shift your weight from your back foot to your front foot during the downswing to generate power. Start with 60% of your weight on your back foot at the top of the backswing, then move it forward at impact. Practice with a 7-iron to feel the transfer.",
          deepDive: "https://www.pga.com/story/weight-shift-in-golf-swing",
        },
        {
          title: "Follow-Through",
          description:
            "A balanced follow-through ensures you’ve completed the swing correctly. Finish with your weight on your front foot, chest facing the target, and club over your shoulder. Try slow-motion swings with a driver to groove a full, balanced finish.",
          deepDive: "https://golf.com/instruction/follow-through-tips/",
        },
      ],
    },
    {
      title: "Short Game",
      largeText:
        "The short game—chipping, pitching, and flop shots—saves strokes around the green. Mastering these shots requires touch and creativity. Spend time on a practice green to develop feel and confidence with your wedges.",
      topics: [
        {
          title: "Chipping Technique",
          description:
            "Use a narrow stance and lean slightly toward the target. Keep your hands ahead of the ball and make a putting-like stroke with minimal wrist action. Practice chipping to a towel 10 yards away with a pitching wedge to improve accuracy.",
          deepDive: "https://www.golfdigest.com/story/short-game-chipping-tips",
        },
        {
          title: "Pitching",
          description:
            "Pitch shots are higher and shorter than chips, ideal for clearing hazards. Open your stance, hinge your wrists on the backswing, and accelerate through impact. Try pitching over a bunker to a pin 20 yards away to build control.",
          deepDive: "https://www.pga.com/story/pitching-techniques",
        },
        {
          title: "Flop Shots",
          description:
            "Flop shots create high, soft landings. Open the clubface, use a wide stance, and swing with a steep angle. Practice with a lob wedge to a tight pin, aiming to stop the ball quickly on the green.",
          deepDive: "https://golf.com/instruction/flop-shot-technique/",
        },
      ],
    },
    {
      title: "Putting",
      largeText:
        "Putting accounts for nearly half your strokes, so technique and confidence are key. Focus on a smooth stroke, reading greens, and distance control. Spend 30 minutes on a practice green to refine your putting skills and lower your scores.",
      topics: [
        {
          title: "Putting Stroke",
          description:
            "Use a pendulum-like stroke, keeping your wrists firm and shoulders rocking. Align the putter face square to your target line. Practice 6-foot putts to a coin-sized target to groove a consistent stroke.",
          deepDive: "https://www.golfdigest.com/story/putting-stroke-tips",
        },
        {
          title: "Reading Greens",
          description:
            "Assess the green’s slope and grain to predict the ball’s path. Look for high and low points from multiple angles. Practice reading a 10-foot putt and note how the ball breaks to improve your judgment.",
          deepDive: "https://www.pga.com/story/how-to-read-greens",
        },
        {
          title: "Distance Control",
          description:
            "Control putt distance by varying the length of your backswing, not the speed. Practice lag putting from 20 feet, aiming to stop the ball within a 3-foot circle of the hole to avoid three-putts.",
          deepDive: "https://golf.com/instruction/putting-distance-control/",
        },
      ],
    },
    {
      title: "Bunker Play",
      largeText:
        "Bunker shots can be intimidating, but with the right technique, they’re manageable. Use your sand wedge to splash the ball out by hitting the sand behind it. Practice in a bunker to build confidence and control.",
      topics: [
        {
          title: "Greenside Bunker",
          description:
            "Open your stance and clubface, dig your feet into the sand, and aim 2 inches behind the ball. Swing with an aggressive follow-through to splash the sand and ball out. Practice 10 shots to a pin 15 yards away.",
          deepDive: "https://www.golfdigest.com/story/bunker-shot-techniques",
        },
        {
          title: "Fairway Bunker",
          description:
            "Use a lofted iron (e.g., 7-iron), take a shallow stance, and hit the ball first, not the sand. Swing smoothly to avoid digging. Practice hitting clean shots from a fairway bunker to a 100-yard target.",
          deepDive: "https://www.pga.com/story/fairway-bunker-tips",
        },
        {
          title: "Buried Lies",
          description:
            "For a ball plugged in sand, close the clubface slightly and swing steeply, hitting closer to the ball. Expect less spin and more roll. Try 5 buried lie shots in a bunker to learn the feel.",
          deepDive: "https://golf.com/instruction/buried-bunker-lie/",
        },
      ],
    },
    {
      title: "Specialty Shots",
      largeText:
        "Specialty shots like fades, draws, and low punches help you navigate tough situations. These require adjusting your setup and swing path. Experiment on a range to add versatility to your game.",
      topics: [
        {
          title: "Fade",
          description:
            "A fade curves slightly left-to-right (for right-handers). Aim left, open your stance, and swing along your body line. Practice with a 6-iron, aiming to curve the ball 5-10 yards right.",
          deepDive: "https://www.golfdigest.com/story/how-to-hit-a-fade",
        },
        {
          title: "Draw",
          description:
            "A draw curves right-to-left. Aim right, close your stance, and swing inside-out. Try hitting a draw with a 5-iron, targeting a 5-10 yard left curve on a range.",
          deepDive: "https://www.pga.com/story/how-to-hit-a-draw",
        },
        {
          title: "Low Punch",
          description:
            "A low punch shot stays under wind or trees. Use a low-lofted club (e.g., 4-iron), play the ball back in your stance, and abbreviate the follow-through. Practice punching under an imaginary tree to a 120-yard target.",
          deepDive: "https://golf.com/instruction/low-punch-shot/",
        },
      ],
    },
    {
      title: "Swing Adjustments",
      largeText:
        "Adjusting your swing for different lies and conditions is crucial for consistency. Uneven lies, wind, and rough require specific tweaks. Practice these adjustments on a course or simulator to adapt to real-world challenges.",
      topics: [
        {
          title: "Uphill Lies",
          description:
            "Lean into the slope, align your shoulders with the hill, and take an extra club (e.g., 7-iron instead of 8). Swing along the slope’s angle. Practice 10 uphill shots on a sloped range bay.",
          deepDive: "https://www.golfdigest.com/story/uphill-lie-tips",
        },
        {
          title: "Downhill Lies",
          description:
            "Lean downhill, play the ball back, and use less loft (e.g., 6-iron instead of 7). Keep your weight forward and swing smoothly. Try 10 downhill shots to a 150-yard target.",
          deepDive: "https://www.pga.com/story/downhill-lie-techniques",
        },
        {
          title: "Playing in Wind",
          description:
            "In headwinds, use a lower trajectory and one more club; in tailwinds, less club. Swing smoothly to maintain control. Practice hitting into a fan or windy day to feel the adjustments.",
          deepDive: "https://golf.com/instruction/playing-in-wind/",
        },
      ],
    },
    {
      title: "Drills & Training Aids",
      largeText:
        "Drills and training aids accelerate skill development by reinforcing proper mechanics. Use simple tools like alignment sticks or mirrors to refine your technique. Dedicate 20 minutes per practice session to one drill for focused improvement.",
      topics: [
        {
          title: "Alignment Stick Drill",
          description:
            "Place an alignment stick on the ground to guide your stance and swing path. Practice 20 swings with a 7-iron, ensuring your club follows the stick’s line to improve accuracy.",
          deepDive: "https://www.golfdigest.com/story/alignment-stick-drills",
        },
        {
          title: "Impact Bag Drill",
          description:
            "Hit an impact bag to feel proper hand position and body alignment at impact. Swing slowly with a 9-iron, stopping at the bag to check your form. Do 10 reps per session.",
          deepDive: "https://www.pga.com/story/impact-bag-training",
        },
        {
          title: "Putting Gate Drill",
          description:
            "Set two tees just wider than your putter head, 3 feet from the hole. Putt through the gate to ensure a square stroke. Practice 10 putts to improve putting accuracy.",
          deepDive: "https://golf.com/instruction/putting-gate-drill/",
        },
      ],
    },
    {
      title: "Course Management",
      largeText:
        "Smart course management minimizes mistakes and maximizes scoring opportunities. Plan each shot based on your strengths, the hole’s layout, and conditions. Play a practice round focusing on strategy rather than score to build decision-making skills.",
      topics: [
        {
          title: "Club Selection",
          description:
            "Choose clubs based on distance, wind, and hazards. Know your average distances (e.g., 7-iron = 140 yards) and pick safe targets. Practice selecting clubs for 10 different shots on a range.",
          deepDive: "https://www.golfdigest.com/story/course-management-club-selection",
        },
        {
          title: "Risk Assessment",
          description:
            "Weigh risks vs. rewards—e.g., avoid cutting a dogleg if water lurks. Play to your strengths, like hitting a 5-iron to a fairway instead of a driver into trouble. Simulate tough shots on a course to practice.",
          deepDive: "https://www.pga.com/story/course-management-tips",
        },
        {
          title: "Shot Shaping",
          description:
            "Shape shots to match the hole’s design—e.g., a fade around a bunker. Adjust your setup and swing path. Practice shaping 10 shots with a 6-iron on a range to gain control.",
          deepDive: "https://golf.com/instruction/shot-shaping/",
        },
      ],
    },
    {
      title: "Consistency Building",
      largeText:
        "Consistency comes from repeatable mechanics and mental focus. Simplify your swing thoughts and practice regularly to groove habits. Track your progress over a month of range sessions to see improvements in ball striking.",
      topics: [
        {
          title: "Swing Tempo",
          description:
            "Maintain a 3:1 backswing-to-downswing ratio for smooth tempo. Count ‘1-2-3’ on the backswing, ‘1’ on the downswing. Practice with a metronome app set to 60 BPM for 20 swings.",
          deepDive: "https://www.golfdigest.com/story/swing-tempo-tips",
        },
        {
          title: "Pre-Shot Routine",
          description:
            "Use a consistent routine: visualize, align, practice swing, hit. This reduces variability. Practice your routine for 10 shots with a 5-iron to make it second nature.",
          deepDive: "https://www.pga.com/story/pre-shot-routine",
        },
        {
          title: "Ball Position",
          description:
            "Position the ball forward for drivers, center for irons, and back for wedges. Consistent ball placement improves contact. Mark positions with tees during a range session to test.",
          deepDive: "https://golf.com/instruction/ball-position-guide/",
        },
      ],
    },
    {
      title: "Advanced Techniques",
      largeText:
        "Advanced techniques like spin control and distance wedges elevate your game as you progress. These require practice and precision but can shave strokes off your score. Work with a coach or simulator to refine these skills safely.",
      topics: [
        {
          title: "Spin Control",
          description:
            "Generate backspin by hitting down with a clean clubface and high-lofted wedge. Practice 50-yard wedge shots, aiming to stop the ball within 5 feet of landing.",
          deepDive: "https://www.golfdigest.com/story/spin-control-wedges",
        },
        {
          title: "Distance Wedges",
          description:
            "Control wedge distances (50-100 yards) with partial swings. Use 1/2, 3/4, and full swings with a gap wedge, noting distances. Practice 10 shots per swing length on a range.",
          deepDive: "https://www.pga.com/story/distance-wedge-techniques",
        },
        {
          title: "Trajectory Control",
          description:
            "Vary shot height by adjusting ball position and club selection. Move the ball back for low shots, forward for high. Practice 10 high and low shots with an 8-iron.",
          deepDive: "https://golf.com/instruction/trajectory-control/",
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <HeroContainer>
        <HeroImage
          src="/images/golf-techniques-hero.jpg" // Golf-themed image
          alt="Techniques Hero"
          layout="fill"
          priority
        />
        <HeroText>
          <HeroTitle>Techniques</HeroTitle>
          <HeroSubtitle>Master the skills to elevate your golf game</HeroSubtitle>
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
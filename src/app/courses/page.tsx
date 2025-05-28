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
  height: 85vh; /* Consistent with other pages */
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

export default function Courses() {
  const [openTopics, setOpenTopics] = useState<{ [key: number]: boolean }>({});

  const toggleTopic = (index: number) => {
    setOpenTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: "Course Types",
      largeText:
        "Golf courses vary widely in design and purpose, from short par-3 layouts to championship links. Understanding course types helps you choose the right one for your skill level and goals. Visit a local course to experience different layouts and see what suits you best.",
      topics: [
        {
          title: "Par-3 Courses",
          description:
            "Par-3 courses have short holes (100-200 yards), ideal for beginners to practice iron shots and short game. They’re quick to play and forgiving. Try a 9-hole par-3 course to build confidence without long drives.",
          deepDive: "https://www.golfdigest.com/story/best-par-3-courses",
        },
        {
          title: "Executive Courses",
          description:
            "Executive courses mix par-3s and short par-4s, offering a balance of challenge and accessibility. They’re great for intermediates. Play an executive course to work on precision and scoring.",
          deepDive: "https://www.pga.com/story/what-is-an-executive-golf-course",
        },
        {
          title: "Regulation Courses",
          description:
            "Regulation courses (18 holes, par 70-72) include par-3s, par-4s, and par-5s, testing all skills. Start with a shorter course (under 6,000 yards). Book a tee time at a public regulation course to test your full game.",
          deepDive: "https://golf.com/lifestyle/best-public-golf-courses/",
        },
        {
          title: "Links Courses",
          description:
            "Links courses, often coastal, feature open terrain, wind, and firm fairways. They demand creative shot-making. Research a links course like Bandon Dunes and play a simulator to experience the style.",
          deepDive: "https://www.golfdigest.com/story/what-is-links-golf",
        },
      ],
    },
    {
      title: "Famous Courses",
      largeText:
        "Iconic golf courses inspire players with their history and challenge. From Augusta National to St Andrews, these venues set the standard. Study their layouts online or watch pro tournaments to learn strategic play.",
      topics: [
        {
          title: "Augusta National",
          description:
            "Home of the Masters, Augusta is known for its fast greens and dramatic holes like Amen Corner (11-13). Watch the Masters to see how pros navigate it. Study hole 12 (Golden Bell) to understand risk-reward.",
          deepDive: "https://www.golfdigest.com/story/augusta-national-hole-by-hole-guide",
        },
        {
          title: "St Andrews",
          description:
            "The Old Course at St Andrews, Scotland, is golf’s birthplace, with shared fairways and massive greens. Its Road Hole (17) is legendary. Explore its layout online and play a simulator version if possible.",
          deepDive: "https://www.pga.com/story/st-andrews-old-course-history",
        },
        {
          title: "Pebble Beach",
          description:
            "Pebble Beach in California offers stunning ocean views and tough par-3s like hole 7. Watch the AT&T Pebble Beach Pro-Am to learn its challenges. Check its scorecard to plan a dream round.",
          deepDive: "https://golf.com/lifestyle/pebble-beach-golf-links-guide/",
        },
      ],
    },
    {
      title: "Course Layouts",
      largeText:
        "Every golf course has a unique layout, with holes designed to test strategy and skill. Understanding tee boxes, fairways, greens, and hazards helps you plan shots. Review a course’s scorecard before playing to visualize its flow.",
      topics: [
        {
          title: "Tee Boxes",
          description:
            "Tee boxes offer multiple distances (e.g., white tees for amateurs, red for shorter hitters). Choose tees matching your driving distance (e.g., 200 yards = white tees). Play from forward tees for your first round to keep it fun.",
          deepDive: "https://www.golfdigest.com/story/choosing-the-right-tee-box",
        },
        {
          title: "Fairways",
          description:
            "Fairways are the mowed paths to the green, often flanked by rough or hazards. Aim for the center to avoid trouble. Practice hitting a 5-iron to a fairway marker at a range to improve accuracy.",
          deepDive: "https://www.pga.com/story/understanding-fairways",
        },
        {
          title: "Greens",
          description:
            "Greens are the putting surfaces, varying in size and slope. Study their contours to plan putts. Practice reading a green’s slope on a local course to improve your putting.",
          deepDive: "https://golf.com/instruction/reading-greens-guide/",
        },
      ],
    },
    {
      title: "Navigation Strategies",
      largeText:
        "Navigating a golf course requires planning and adaptability. Smart strategies, like aiming for safe zones and avoiding hazards, lower your score. Play a practice round focusing on course management to develop these skills.",
      topics: [
        {
          title: "Target Selection",
          description:
            "Aim for wide fairway areas or short of hazards, not always the pin. On a par-4, choose a 150-yard marker over a tight pin. Practice picking safe targets during a range session.",
          deepDive: "https://www.golfdigest.com/story/course-management-target-selection",
        },
        {
          title: "Hazard Avoidance",
          description:
            "Identify bunkers, water, and out-of-bounds before each shot. Lay up short of a water hazard on a par-5. Play a par-3 course to practice avoiding hazards strategically.",
          deepDive: "https://www.pga.com/story/avoiding-golf-course-hazards",
        },
        {
          title: "Doglegs",
          description:
            "Doglegs are holes that bend left or right. Position your tee shot to open the next shot (e.g., fade for a right dogleg). Study a dogleg hole’s layout on a scorecard and play it to test your plan.",
          deepDive: "https://golf.com/instruction/how-to-play-doglegs/",
        },
      ],
    },
    {
      title: "Playing Conditions",
      largeText:
        "Weather and course conditions affect your game, from wet fairways to windy days. Adjusting your strategy and equipment for these factors is key. Play in different conditions (e.g., morning dew, afternoon wind) to learn adaptability.",
      topics: [
        {
          title: "Wet Conditions",
          description:
            "Wet courses reduce roll, so use more club (e.g., 6-iron instead of 7). Clean your clubface between shots to maintain spin. Practice a wet round with a towel to keep gear dry.",
          deepDive: "https://www.golfdigest.com/story/playing-in-wet-conditions",
        },
        {
          title: "Windy Conditions",
          description:
            "In headwinds, swing smoother and take an extra club; in crosswinds, aim to let the wind carry your ball. Practice 10 shots in windy conditions to adjust your aim.",
          deepDive: "https://www.pga.com/story/playing-golf-in-wind",
        },
        {
          title: "Firm vs. Soft Turf",
          description:
            "Firm fairways add roll, soft ones stop shots quickly. Adjust your landing zones accordingly. Play a course after rain and again in dry conditions to compare turf effects.",
          deepDive: "https://golf.com/instruction/turf-conditions-guide/",
        },
      ],
    },
    {
      title: "Local Courses",
      largeText:
        "Local courses offer affordable, accessible play for all skill levels. Public and municipal courses are great for beginners, while private clubs may require membership. Use apps like GolfNow to find and book nearby courses.",
      topics: [
        {
          title: "Public Courses",
          description:
            "Public courses are open to all, often with reasonable green fees ($20-$50). Look for well-maintained municipal courses. Book a tee time at a local public course to start playing.",
          deepDive: "https://www.golfdigest.com/story/best-public-golf-courses-near-me",
        },
        {
          title: "Municipal Courses",
          description:
            "City-run municipal courses are budget-friendly and beginner-welcoming. They often have shorter layouts. Check your city’s parks department website for a nearby municipal course.",
          deepDive: "https://www.pga.com/story/what-is-a-municipal-golf-course",
        },
        {
          title: "Finding Courses",
          description:
            "Use GolfNow or the USGA course finder to locate courses by zip code. Filter for public access and par-3 options. Save 3 local courses to your GolfNow account for quick booking.",
          deepDive: "https://www.golfnow.com",
        },
      ],
    },
    {
      title: "Course Ratings",
      largeText:
        "Course ratings and slope numbers help you gauge a course’s difficulty and suitability. Ratings indicate expected scores for scratch golfers, while slope measures challenge for average players. Check a course’s rating before booking to match your skill level.",
      topics: [
        {
          title: "Course Rating",
          description:
            "A course rating (e.g., 70.5) is the expected score for a scratch golfer. Lower ratings are easier. Review a course’s rating on its website and choose one under 72 for beginners.",
          deepDive: "https://www.golfdigest.com/story/understanding-course-ratings",
        },
        {
          title: "Slope Rating",
          description:
            "Slope (55-155, 113 average) shows difficulty for bogey golfers. A slope under 120 is beginner-friendly. Check slope ratings on a scorecard and pick a course with a low slope.",
          deepDive: "https://www.pga.com/story/what-is-slope-rating",
        },
        {
          title: "Handicap Adjustments",
          description:
            "Course and slope ratings adjust your handicap for fair play. Use a golf app like GHIN to calculate your course handicap. Play a round and enter your score to see your adjusted handicap.",
          deepDive: "https://golf.com/instruction/course-handicap-explained/",
        },
      ],
    },
    {
      title: "Etiquette on Courses",
      largeText:
        "Course etiquette ensures a respectful, enjoyable experience for all players. From keeping pace to repairing divots, these practices are essential. Observe etiquette during a round to build good habits and respect for the game.",
      topics: [
        {
          title: "Pace of Play",
          description:
            "Keep up with the group ahead, taking no more than 15 minutes per hole. Be ready to hit when it’s your turn. Play a 9-hole round with a timer to practice staying on pace.",
          deepDive: "https://www.golfdigest.com/story/pace-of-play-tips",
        },
        {
          title: "Course Care",
          description:
            "Repair divots, rake bunkers, and fix ball marks on greens. Carry a divot tool and sand bottle if provided. Practice repairing a ball mark on a practice green to learn the technique.",
          deepDive: "https://www.pga.com/story/golf-course-care-etiquette",
        },
        {
          title: "Respecting Others",
          description:
            "Stay quiet during others’ shots, stand out of their line of sight, and shout ‘Fore!’ for errant shots. Play a round with friends and practice these courtesies to blend in.",
          deepDive: "https://golf.com/lifestyle/golf-etiquette-guide/",
        },
      ],
    },
    {
      title: "Planning a Golf Trip",
      largeText:
        "A golf trip is a great way to experience new courses and enjoy the game. Whether local or international, planning ensures a smooth experience. Research destinations and book tee times early to create a memorable trip.",
      topics: [
        {
          title: "Destination Research",
          description:
            "Choose destinations like Myrtle Beach or Scottsdale for diverse courses. Check resort packages for lodging and golf. Browse Golf Advisor for top golf trip destinations and pick one to explore.",
          deepDive: "https://www.golfdigest.com/story/best-golf-trip-destinations",
        },
        {
          title: "Booking Tee Times",
          description:
            "Reserve tee times online via GolfNow or directly with courses, ideally 30 days in advance. Group bookings may need deposits. Book a morning tee time for a local course to practice planning.",
          deepDive: "https://www.pga.com/story/how-to-book-tee-times",
        },
        {
          title: "Travel Gear",
          description:
            "Use a travel bag to protect clubs during flights. Pack essentials like extra balls and gloves. Test a travel bag’s fit with your clubs before a trip to ensure security.",
          deepDive: "https://golf.com/gear/golf-travel-bags-guide/",
        },
      ],
    },
    {
      title: "Course Practice",
      largeText:
        "Practicing on a course hones skills that range sessions can’t replicate. Focus on real-world scenarios like uneven lies and green reading. Play a twilight round or use a practice facility to simulate course conditions.",
      topics: [
        {
          title: "On-Course Drills",
          description:
            "Practice specific shots during a casual round—e.g., aim for a 150-yard marker with a 7-iron. Play 9 holes with one club (e.g., 5-iron) to improve versatility.",
          deepDive: "https://www.golfdigest.com/story/on-course-practice-drills",
        },
        {
          title: "Green Reading Practice",
          description:
            "Spend 15 minutes on a course’s practice green, reading slopes and putting from 10-20 feet. Note break directions to improve your feel for real greens.",
          deepDive: "https://www.pga.com/story/green-reading-practice",
        },
        {
          title: "Playing Twilight Rounds",
          description:
            "Twilight rates offer cheaper play after 3 PM, ideal for practice. Focus on strategy, not score. Book a twilight tee time at a local course to practice under relaxed conditions.",
          deepDive: "https://golf.com/lifestyle/twilight-golf-benefits/",
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <HeroContainer>
        <HeroImage
          src="/images/golf-courses-hero.jpg" // Golf course-themed image
          alt="Courses Hero"
          layout="fill"
          priority
        />
        <HeroText>
          <HeroTitle>Courses</HeroTitle>
          <HeroSubtitle>Explore and conquer the world’s golf courses</HeroSubtitle>
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
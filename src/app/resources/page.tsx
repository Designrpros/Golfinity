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

export default function Resources() {
  const [openTopics, setOpenTopics] = useState<{ [key: number]: boolean }>({});

  const toggleTopic = (index: number) => {
    setOpenTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: "Online Learning Platforms",
      largeText:
        "Online platforms offer structured golf lessons from pros, covering everything from swing mechanics to course strategy. These resources are accessible anytime, making them perfect for self-paced learning. Explore a platform to supplement your practice with expert guidance.",
      topics: [
        {
          title: "Skillest",
          description:
            "Skillest connects you with PGA coaches for personalized video lessons. Upload your swing and get feedback within 48 hours. Sign up for a free trial and submit a 7-iron swing for analysis.",
          deepDive: "https://www.skillest.com",
        },
        {
          title: "Golftec",
          description:
            "Golftec’s online portal offers swing analysis, drills, and lesson plans. Access their library of tips or book a virtual lesson. Try their free swing evaluation to identify areas for improvement.",
          deepDive: "https://www.golftec.com",
        },
        {
          title: "Me and My Golf",
          description:
            "Me and My Golf provides video courses on swing, short game, and fitness. Their step-by-step plans suit all levels. Watch their free putting videos and practice the drills on a green.",
          deepDive: "https://meandmygolf.com",
        },
      ],
    },
    {
      title: "Mobile Apps",
      largeText:
        "Golf apps track scores, analyze swings, and provide course data, enhancing your game on and off the course. From GPS to swing trackers, these tools are portable and user-friendly. Download one app to start tracking your progress during rounds.",
      topics: [
        {
          title: "Golfshot",
          description:
            "Golfshot offers GPS distances, score tracking, and swing analysis. Use it to map courses and review stats post-round. Track a 9-hole round with Golfshot to see your fairways hit and putts.",
          deepDive: "https://www.golfshot.com",
        },
        {
          title: "The Grint",
          description:
            "The Grint tracks scores, calculates handicaps, and offers a social platform. Its GPS shows hole layouts. Use The Grint during a round to log scores and check your handicap progress.",
          deepDive: "https://www.thegrint.com",
        },
        {
          title: "Arccos Golf",
          description:
            "Arccos uses club sensors to track shots and provide analytics, like distance averages. Pair it with your phone for real-time data. Try Arccos’ free app features for a round to test its insights.",
          deepDive: "https://www.arccosgolf.com",
        },
      ],
    },
    {
      title: "Books & Magazines",
      largeText:
        "Books and magazines provide in-depth knowledge on golf technique, history, and strategy. From classic instructional guides to modern tips, these resources are timeless. Pick up one book to deepen your understanding of the game.",
      topics: [
        {
          title: "Ben Hogan’s Five Lessons",
          description:
            "This classic book breaks down grip, stance, and swing with clear illustrations. Read the grip chapter and practice Hogan’s tips at a range to improve consistency.",
          deepDive: "https://www.golfdigest.com/story/ben-hogan-five-lessons-review",
        },
        {
          title: "Golf Digest Magazine",
          description:
            "Golf Digest offers monthly tips, gear reviews, and course guides. Its online articles are free and practical. Browse their website for a chipping tip and try it on a practice green.",
          deepDive: "https://www.golfdigest.com",
        },
        {
          title: "The Golfing Machine",
          description:
            "Homer Kelley’s book is a technical guide to swing mechanics, ideal for analytical players. Study one chapter and apply it during a range session to refine your swing.",
          deepDive: "https://www.pga.com/story/the-golfing-machine-overview",
        },
      ],
    },
    {
      title: "Training Aids",
      largeText:
        "Training aids help you practice specific skills, from alignment to putting. Affordable and portable, they’re great for home or range use. Test one aid to see how it improves your consistency.",
      topics: [
        {
          title: "Alignment Sticks",
          description:
            "Alignment sticks guide your stance and swing path. Place them on the ground to check aim and plane. Practice 20 swings with sticks at a range to groove proper alignment.",
          deepDive: "https://www.golfdigest.com/story/best-alignment-sticks",
        },
        {
          title: "Putting Mirrors",
          description:
            "Putting mirrors ensure eye alignment and stroke path. Use one on a flat surface to practice 6-foot putts. Try a mirror for 10 putts to correct your setup.",
          deepDive: "https://www.pga.com/story/putting-mirror-training-aid",
        },
        {
          title: "Swing Trainers",
          description:
            "Swing trainers like the Orange Whip improve tempo and strength. Swing one for 5 minutes before a round to warm up. Test a trainer at a golf shop to feel its balance.",
          deepDive: "https://golf.com/gear/training-aids/best-swing-trainers/",
        },
      ],
    },
    {
      title: "Video Tutorials",
      largeText:
        "Video tutorials offer visual instruction from top coaches, covering every aspect of golf. YouTube channels and paid courses provide free and premium content. Watch one video and apply its tips during practice.",
      topics: [
        {
          title: "Rick Shiels Golf",
          description:
            "Rick Shiels’ YouTube channel offers free lessons on swing, equipment, and strategy. Watch his driver tips and hit 10 drives at a range to test his advice.",
          deepDive: "https://www.youtube.com/c/RickShielsPGA",
        },
        {
          title: "Danny Maude",
          description:
            "Danny Maude’s videos simplify complex techniques, like chipping and bunker play. Follow his short game video and practice 10 chips to a towel.",
          deepDive: "https://www.youtube.com/c/DannyMaude",
        },
        {
          title: "PGA Coaching",
          description:
            "The PGA’s YouTube channel has pro-led tutorials on fundamentals. Watch their putting series and practice 10 putts to improve your stroke.",
          deepDive: "https://www.youtube.com/c/PGAAmerica",
        },
      ],
    },
    {
      title: "Golf Communities",
      largeText:
        "Golf communities connect you with players, coaches, and events, fostering learning and fun. Online forums and local clubs offer support and camaraderie. Join one community to share tips and find playing partners.",
      topics: [
        {
          title: "GolfWRX Forums",
          description:
            "GolfWRX is an online forum for gear, technique, and course discussions. Browse the instruction section and post a question about your swing to get feedback.",
          deepDive: "https://www.golfwrx.com",
        },
        {
          title: "Reddit r/golf",
          description:
            "The r/golf subreddit shares tips, videos, and stories. Read beginner threads and post a question about short game to engage with others.",
          deepDive: "https://www.reddit.com/r/golf/",
        },
        {
          title: "Local Golf Clubs",
          description:
            "Join a local club or league for group lessons and social rounds. Many offer beginner clinics. Check your course’s website for a weekly league and sign up.",
          deepDive: "https://www.pga.com/story/finding-local-golf-clubs",
        },
      ],
    },
    {
      title: "Podcasts & Blogs",
      largeText:
        "Podcasts and blogs deliver golf insights, stories, and tips in an engaging format. They’re perfect for learning on the go. Subscribe to one podcast or blog to stay inspired and informed.",
      topics: [
        {
          title: "The Sweet Spot Podcast",
          description:
            "Golf Digest’s podcast covers technique and trends with top pros. Listen to an episode on putting and practice its tips on a green.",
          deepDive: "https://www.golfdigest.com/podcasts/the-sweet-spot",
        },
        {
          title: "No Laying Up",
          description:
            "No Laying Up’s podcast and blog mix humor, course reviews, and strategy. Check their course architecture blog and apply a tip to your next round.",
          deepDive: "https://nolayingup.com",
        },
        {
          title: "MyGolfSpy",
          description:
            "MyGolfSpy’s blog tests gear and shares data-driven tips. Read their wedge guide and test a new wedge at a shop.",
          deepDive: "https://mygolfspy.com",
        },
      ],
    },
    {
      title: "Fitness Resources",
      largeText:
        "Golf fitness improves swing power, flexibility, and endurance. Online programs and apps target golf-specific strength. Start a 10-minute golf fitness routine at home to boost your game.",
      topics: [
        {
          title: "Fit for Golf",
          description:
            "Fit for Golf offers golf-specific workouts to improve mobility and strength. Follow their free warm-up routine before a round to feel looser.",
          deepDive: "https://fitforgolf.blog",
        },
        {
          title: "Golf Forever",
          description:
            "Golf Forever’s app provides personalized fitness plans for golfers. Try their free trial and do a 15-minute core workout to enhance stability.",
          deepDive: "https://golfforever.com",
        },
        {
          title: "Titleist Performance Institute",
          description:
            "TPI’s website shares exercises for golf fitness, like hip mobility drills. Do their 5-minute stretch routine daily to improve swing rotation.",
          deepDive: "https://www.mytpi.com",
        },
      ],
    },
    {
      title: "Rules & Regulations",
      largeText:
        "Understanding golf rules ensures fair play and confidence on the course. Official resources and apps clarify complex scenarios. Study one rule each week to build your knowledge.",
      topics: [
        {
          title: "USGA Rules App",
          description:
            "The USGA app explains rules with videos and quizzes. Look up the out-of-bounds rule and apply it during a practice round.",
          deepDive: "https://www.usga.org/rules-app",
        },
        {
          title: "R&A Rules",
          description:
            "The R&A’s website offers a rules explorer and quick guides. Study the penalty area rules and test your knowledge on a course with water hazards.",
          deepDive: "https://www.randa.org",
        },
        {
          title: "Rules of Golf Book",
          description:
            "The USGA’s Rules of Golf book is the official guide, available free online. Read the section on bunkers and practice a drop in a sand trap.",
          deepDive: "https://www.usga.org/rules/rules-of-golf.html",
        },
      ],
    },
    {
      title: "Skill Tracking Tools",
      largeText:
        "Tracking your golf skills helps measure progress and set goals. Apps and journals log stats like fairways hit and putts per round. Start tracking one round to identify strengths and weaknesses.",
      topics: [
        {
          title: "GHIN App",
          description:
            "GHIN tracks your handicap and scores, syncing with USGA courses. Enter a round’s scores to see your handicap trend over time.",
          deepDive: "https://www.ghin.com",
        },
        {
          title: "Shot Scope",
          description:
            "Shot Scope’s devices track shots and stats, like greens in regulation. Use their free app to log a round and review your data.",
          deepDive: "https://www.shotscope.com",
        },
        {
          title: "Golf Journal",
          description:
            "A physical or digital journal notes scores, shots, and goals. Record 5 rounds in a notebook, noting putts and fairways hit to spot patterns.",
          deepDive: "https://golf.com/instruction/golf-journal-benefits/",
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <HeroContainer>
        <HeroImage
          src="/images/golf-resources-hero.jpg" // Golf resource-themed image
          alt="Resources Hero"
          layout="fill"
          priority
        />
        <HeroText>
          <HeroTitle>Resources</HeroTitle>
          <HeroSubtitle>Discover tools and guides to boost your golf skills</HeroSubtitle>
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
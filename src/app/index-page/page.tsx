"use client";

import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundContent}; /* Off-white */
  color: ${({ theme }) => theme.colors.textDark}; /* Dark gray */
  font-family: "Montserrat", sans-serif;
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 200px; /* Space for sidebar */
  padding: clamp(4rem, 5vw, 5rem) 1rem 1rem 1rem; /* Account for fixed toolbar */

  @media (max-width: 768px) {
    margin-left: 0; /* No sidebar on mobile */
    padding: clamp(3.5rem, 4vw, 4rem) 0.75rem 0.75rem 0.75rem;
  }

  @media (max-width: 480px) {
    padding: clamp(3.5rem, 3vw, 3.75rem) 0.5rem 0.5rem 0.5rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Section = styled.section`
  margin-bottom: 0.5rem; /* Tighter spacing for density */
  scroll-margin-top: clamp(3.5rem, 4vw, 4rem); /* Ensure visibility under toolbar */
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}; /* Green */
  padding-bottom: 0.2rem;

  @media (max-width: 480px) {
    font-size: clamp(1rem, 1.8vw, 1.3rem);
  }
`;

const ToggleIcon = styled.span`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: ${({ theme }) => theme.colors.textDark}; /* Dark gray */
`;

const SectionText = styled.p`
  font-size: clamp(0.65rem, 1.2vw, 0.75rem);
  color: ${({ theme }) => theme.colors.textDark}; /* Dark gray */
  line-height: 1.4;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: clamp(0.6rem, 1vw, 0.7rem);
  }
`;

const SectionContent = styled.div<{ $isOpen: boolean }>`
  padding: ${({ $isOpen }) => ($isOpen ? "0.5rem 0" : "0")};
  height: ${({ $isOpen }) => ($isOpen ? "auto" : "0")};
  overflow: hidden;
`;

const SectionList = styled.ul`
  list-style-type: disc;
  padding-left: clamp(1rem, 2vw, 1.5rem);
  margin: 0;
`;

const ListItem = styled.li`
  font-size: clamp(0.65rem, 1.2vw, 0.75rem);
  color: ${({ theme }) => theme.colors.textDark}; /* Dark gray */
  line-height: 1.4;
  margin-bottom: 0.3rem;

  @media (max-width: 480px) {
    font-size: clamp(0.6rem, 1vw, 0.7rem);
  }
`;

const HighlightedText = styled.span`
  background-color: ${({ theme }) => theme.colors.backgroundLight}; /* Light gray */
  color: ${({ theme }) => theme.colors.textDark}; /* Dark gray */
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-weight: 600;
`;

export default function Index() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    welcome: false,
    "grip-stance": false,
    "swing-mechanics": false,
    "short-game": false,
    putting: false,
    "equipment-essentials": false,
    "course-navigation": false,
    "rules-etiquette": false,
    "course-types": false,
    "practice-drills": false,
    "mental-game": false,
    "online-resources": false,
    "mobile-apps": false,
    "golf-communities": false,
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <ContentContainer>
          <Section id="welcome">
            <SectionHeader onClick={() => toggleSection("welcome")}>
              <SectionTitle>Welcome</SectionTitle>
              <ToggleIcon>{openSections.welcome ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              A quick reference for your golf journey, summarizing key concepts in one place. Use the sidebar to navigate topics or toggle sections for bite-sized insights.
            </SectionText>
            <SectionContent $isOpen={openSections.welcome}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Overview:</HighlightedText> Concise summary of golf essentials.
                </ListItem>
                <ListItem>
                  <HighlightedText>Navigation:</HighlightedText> Use sidebar links (desktop) to jump to topics.
                </ListItem>
                <ListItem>Toggle sections for quick, bulleted insights.</ListItem>
                <ListItem>Ideal for refreshing knowledge before a round.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="grip-stance">
            <SectionHeader onClick={() => toggleSection("grip-stance")}>
              <SectionTitle>Grip & Stance</SectionTitle>
              <ToggleIcon>{openSections["grip-stance"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Neutral grip aligns the clubface; stance balances your swing. Hold the club with 4/10 pressure and stand shoulder-width apart, knees bent.
            </SectionText>
            <SectionContent $isOpen={openSections["grip-stance"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Neutral Grip:</HighlightedText> ‘V’ of thumbs points to right shoulder (right-handers).
                </ListItem>
                <ListItem>
                  <HighlightedText>Stance:</HighlightedText> Feet shoulder-width, knees flexed, weight centered.
                </ListItem>
                <ListItem>Grip pressure: 4/10, firm but relaxed.</ListItem>
                <ListItem>Spine tilt: Forward ~30 degrees for balance.</ListItem>
                <ListItem>Tip: Practice grip at home with a club to build muscle memory.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="swing-mechanics">
            <SectionHeader onClick={() => toggleSection("swing-mechanics")}>
              <SectionTitle>Swing Mechanics</SectionTitle>
              <ToggleIcon>{openSections["swing-mechanics"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Smooth takeaway, full backswing, and weight shift power the swing. Keep the club on plane and finish balanced.
            </SectionText>
            <SectionContent $isOpen={openSections["swing-mechanics"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Takeaway:</HighlightedText> Low and slow, left arm straight.
                </ListItem>
                <ListItem>
                  <HighlightedText>Backswing:</HighlightedText> Rotate torso, left shoulder under chin.
                </ListItem>
                <ListItem>Downswing: Shift weight to front foot, square clubface at impact.</ListItem>
                <ListItem>Follow-through: Chest faces target, weight on front foot.</ListItem>
                <ListItem>Tip: Record your swing to check plane and balance.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="short-game">
            <SectionHeader onClick={() => toggleSection("short-game")}>
              <SectionTitle>Short Game</SectionTitle>
              <ToggleIcon>{openSections["short-game"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Chips and pitches save strokes—narrow stance for chips, open clubface for flops. Practice around greens for touch.
            </SectionText>
            <SectionContent $isOpen={openSections["short-game"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Chipping:</HighlightedText> Narrow stance, hands ahead, putting stroke.
                </ListItem>
                <ListItem>
                  <HighlightedText>Pitching:</HighlightedText> Open stance, wrist hinge, high arc.
                </ListItem>
                <ListItem>Flop shot: Wide stance, open clubface, steep swing.</ListItem>
                <ListItem>Tip: Practice chips to a towel 10 yards away for accuracy.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="putting">
            <SectionHeader onClick={() => toggleSection("putting")}>
              <SectionTitle>Putting</SectionTitle>
              <ToggleIcon>{openSections.putting ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Pendulum stroke and green reading are key. Keep wrists firm, vary backswing for distance control.
            </SectionText>
            <SectionContent $isOpen={openSections.putting}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Stroke:</HighlightedText> Pendulum motion, firm wrists, shoulder rock.
                </ListItem>
                <ListItem>
                  <HighlightedText>Green Reading:</HighlightedText> Assess slope from multiple angles.
                </ListItem>
                <ListItem>Distance control: Longer backswing for longer putts.</ListItem>
                <ListItem>Tip: Practice 6-foot putts to a coin for precision.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="equipment-essentials">
            <SectionHeader onClick={() => toggleSection("equipment-essentials")}>
              <SectionTitle>Equipment Essentials</SectionTitle>
              <ToggleIcon>{openSections["equipment-essentials"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Drivers, irons, wedges, and putters form a basic set. Choose forgiving clubs and low-compression balls for beginners.
            </SectionText>
            <SectionContent $isOpen={openSections["equipment-essentials"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Clubs:</HighlightedText> Driver (tee shots), irons (fairway), wedges (short), putter (green).
                </ListItem>
                <ListItem>
                  <HighlightedText>Balls:</HighlightedText> Low-compression (e.g., Titleist TruFeel) for distance.
                </ListItem>
                <ListItem>Accessories: Glove for grip, tees (2.75” for driver), divot tool.</ListItem>
                <ListItem>Tip: Test a half-set at a shop to start simply.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="course-navigation">
            <SectionHeader onClick={() => toggleSection("course-navigation")}>
              <SectionTitle>Course Navigation</SectionTitle>
              <ToggleIcon>{openSections["course-navigation"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Plan shots using fairways and yard markers; avoid hazards. Aim for safe targets to stay in play.
            </SectionText>
            <SectionContent $isOpen={openSections["course-navigation"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Fairways:</HighlightedText> Aim for center to avoid rough.
                </ListItem>
                <ListItem>
                  <HighlightedText>Yard Markers:</HighlightedText> Use 150-yard markers for club choice (e.g., 7-iron).
                </ListItem>
                <ListItem>Hazards: Lay up short of bunkers or water.</ListItem>
                <ListItem>Tip: Study a scorecard to plan each hole.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="rules-etiquette">
            <SectionHeader onClick={() => toggleSection("rules-etiquette")}>
              <SectionTitle>Rules & Etiquette</SectionTitle>
              <ToggleIcon>{openSections["rules-etiquette"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Play the ball as it lies; repair divots and stay quiet. Count all strokes, including penalties.
            </SectionText>
            <SectionContent $isOpen={openSections["rules-etiquette"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Basic Rules:</HighlightedText> No touching ball unless allowed; 14-club limit.
                </ListItem>
                <ListItem>
                  <HighlightedText>Etiquette:</HighlightedText> Repair divots, rake bunkers, keep pace.
                </ListItem>
                <ListItem>Scoring: Par, bogey (+1), birdie (-1).</ListItem>
                <ListItem>Tip: Shout ‘Fore!’ for errant shots to warn others.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="course-types">
            <SectionHeader onClick={() => toggleSection("course-types")}>
              <SectionTitle>Course Types</SectionTitle>
              <ToggleIcon>{openSections["course-types"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Par-3 courses are short, regulation courses test all skills. Start with a par-3 for beginner-friendly play.
            </SectionText>
            <SectionContent $isOpen={openSections["course-types"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Par-3:</HighlightedText> Short holes (100-200 yards), beginner-friendly.
                </ListItem>
                <ListItem>
                  <HighlightedText>Executive:</HighlightedText> Mix of par-3s and short par-4s.
                </ListItem>
                <ListItem>Regulation: 18 holes, par 70-72, full challenge.</ListItem>
                <ListItem>Tip: Play a par-3 course to focus on irons and short game.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="practice-drills">
            <SectionHeader onClick={() => toggleSection("practice-drills")}>
              <SectionTitle>Practice Drills</SectionTitle>
              <ToggleIcon>{openSections["practice-drills"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Drills build skills—putt to a 3-foot circle, chip to a towel. Practice one drill per session for focus.
            </SectionText>
            <SectionContent $isOpen={openSections["practice-drills"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Putting Drill:</HighlightedText> Sink 9 putts from 3-9 feet.
                </ListItem>
                <ListItem>
                  <HighlightedText>Chipping Drill:</HighlightedText> Land 10 chips within 3 feet of a target.
                </ListItem>
                <ListItem>Driving Drill: Hit 20 drives to a 50-yard-wide fairway marker.</ListItem>
                <ListItem>Tip: Use a timer to keep practice sessions short and focused.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="mental-game">
            <SectionHeader onClick={() => toggleSection("mental-game")}>
              <SectionTitle>Mental Game</SectionTitle>
              <ToggleIcon>{openSections["mental-game"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Stay calm with a pre-shot routine; visualize shots. Focus on the next shot, not past mistakes.
            </SectionText>
            <SectionContent $isOpen={openSections["mental-game"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Pre-Shot Routine:</HighlightedText> Visualize, align, practice swing, hit.
                </ListItem>
                <ListItem>
                  <HighlightedText>Visualization:</HighlightedText> Picture the ball’s flight and landing.
                </ListItem>
                <ListItem>Frustration: Breathe deeply, reset after bad shots.</ListItem>
                <ListItem>Tip: Practice routine for 10 shots to make it automatic.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="online-resources">
            <SectionHeader onClick={() => toggleSection("online-resources")}>
              <SectionTitle>Online Resources</SectionTitle>
              <ToggleIcon>{openSections["online-resources"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Platforms like Skillest and Golftec offer video lessons. Explore one for swing feedback.
            </SectionText>
            <SectionContent $isOpen={openSections["online-resources"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Skillest:</HighlightedText> Personalized video lessons from PGA coaches.
                </ListItem>
                <ListItem>
                  <HighlightedText>Golftec:</HighlightedText> Swing analysis and drills online.
                </ListItem>
                <ListItem>Me and My Golf: Video courses for all skills.</ListItem>
                <ListItem>Tip: Submit a swing video for pro feedback.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="mobile-apps">
            <SectionHeader onClick={() => toggleSection("mobile-apps")}>
              <SectionTitle>Mobile Apps</SectionTitle>
              <ToggleIcon>{openSections["mobile-apps"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Golfshot and The Grint track scores and GPS. Use an app to log a round’s stats.
            </SectionText>
            <SectionContent $isOpen={openSections["mobile-apps"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Golfshot:</HighlightedText> GPS, score tracking, swing analysis.
                </ListItem>
                <ListItem>
                  <HighlightedText>The Grint:</HighlightedText> Handicap, social platform, GPS.
                </ListItem>
                <ListItem>Arccos: Shot tracking with club sensors.</ListItem>
                <ListItem>Tip: Track putts per round to spot weaknesses.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="golf-communities">
            <SectionHeader onClick={() => toggleSection("golf-communities")}>
              <SectionTitle>Golf Communities</SectionTitle>
              <ToggleIcon>{openSections["golf-communities"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              GolfWRX and r/golf connect players; local clubs offer leagues. Join a forum or club to share tips.
            </SectionText>
            <SectionContent $isOpen={openSections["golf-communities"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>GolfWRX:</HighlightedText> Online forum for gear and tips.
                </ListItem>
                <ListItem>
                  <HighlightedText>r/golf:</HighlightedText> Reddit community for advice and stories.
                </ListItem>
                <ListItem>Local clubs: Weekly leagues, beginner clinics.</ListItem>
                <ListItem>Tip: Post a swing question on GolfWRX for feedback.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>
        </ContentContainer>
      </MainContent>
    </PageContainer>
  );
};
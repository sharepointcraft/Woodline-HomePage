import * as React from 'react';
import styles from './HomePage.module.scss';
import type { IHomePageProps } from './IHomePageProps';

import { HeroSection } from './HeroSection';
import { QuickActions } from './QuickActions';
import { PodcastSection } from './PodcastSection';
import { UpcomingEvents } from './UpcomingEvents';
import { GlobalHolidays } from './GlobalHolidays';
import { FeaturedStories } from './FeaturedStories';
import { NewsCards } from './NewsCards';
import { EventGallery } from './EventGallery';
import { MostRead } from './MostRead';
import { WeeklyQuiz } from './WeeklyQuiz';
import { VideoLibrary } from './VideoLibrary';

export default class HomePage extends React.Component<IHomePageProps> {
  public render(): React.ReactElement<IHomePageProps> {
    const { showVideoLibrary = false } = this.props;

    return (
      <section className={styles.homePage}>
        {/* =====================================================
            HERO & WORLD CLOCK SECTION
        ====================================================== */}
        <HeroSection />

        {/* =====================================================
            QUICK ACTIONS SECTION
        ====================================================== */}
        <QuickActions />

        {/* =====================================================
            MAIN CONTENT AREA
        ====================================================== */}
        <section className={styles.mainContentSection}>
          <div className={styles.mainContent}>
            {/* ================= LEFT COLUMN ================= */}
            <aside className={styles.leftContent}>
              <PodcastSection />
              <UpcomingEvents />
              <GlobalHolidays />
            </aside>

            {/* ================= CENTER COLUMN ================= */}
            <main className={styles.centerContent}>
              <FeaturedStories />
              <NewsCards />
              <EventGallery />
              {showVideoLibrary && <VideoLibrary />}
            </main>

            {/* ================= RIGHT COLUMN ================= */}
            <aside className={styles.rightContent}>
              <MostRead />
              <WeeklyQuiz />
            </aside>
          </div>
        </section>
      </section>
    );
  }
}
import * as React from 'react';
import styles from '../HomePage.module.scss';
import { IFeaturedStoriesProps } from './IFeaturedStoriesProps';
import { IFeaturedStory } from '../../types';
import { DEFAULT_FEATURED_STORIES, DEFAULT_FEATURED_STORY } from '../../services';

export const FeaturedStories: React.FC<IFeaturedStoriesProps> = ({
  stories = DEFAULT_FEATURED_STORIES,
  story,
  autoPlay = true,
  intervalMs = 5000,
  initialSlide = 0
}) => {
  // If a single story prop was passed for backwards-compatibility, wrap it in array
  const slideItems: IFeaturedStory[] = React.useMemo(() => {
    if (story) {
      return [story];
    }
    return stories.length > 0 ? stories : [DEFAULT_FEATURED_STORY];
  }, [stories, story]);

  const [activeIndex, setActiveIndex] = React.useState<number>(initialSlide);
  const [isPaused, setIsPaused] = React.useState<boolean>(false);

  // Auto-play timer with pause-on-hover
  React.useEffect(() => {
    if (!autoPlay || isPaused || slideItems.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideItems.length);
    }, intervalMs);

    return () => {
      window.clearInterval(timer);
    };
  }, [autoPlay, isPaused, slideItems.length, intervalMs]);

  const currentSlide = slideItems[activeIndex] || slideItems[0];

  return (
    <div
      className={`${styles.featuredStory} ${styles.carousel}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured Stories"
    >
      {/* Background Image */}
      <img
        src={currentSlide.imageUrl}
        alt={currentSlide.title}
        className={styles.carouselBgImage}
      />

      {/* Shading Overlay */}
      <div className={styles.featuredOverlay} />

      {/* Carousel Slides */}
      {slideItems.map((item: IFeaturedStory, index: number) => {
        const isActive = index === activeIndex;
        return (
          <article
            key={index}
            className={`${styles.slide} ${isActive ? styles.active : ''}`}
            aria-hidden={!isActive}
          >
            {item.label && <label>{item.label}</label>}
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        );
      })}

      {/* Navigation Dots */}
      {slideItems.length > 1 && (
        <div className={styles.dots}>
          {slideItems.map((item: IFeaturedStory, index: number) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}: ${item.title}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedStories;

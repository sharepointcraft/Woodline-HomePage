import * as React from 'react';
import styles from '../HomePage.module.scss';
import { IWeeklyQuizProps } from './IWeeklyQuizProps';
import { DEFAULT_WEEKLY_QUIZ } from '../../services';

export const WeeklyQuiz: React.FC<IWeeklyQuizProps> = ({
  quizData = DEFAULT_WEEKLY_QUIZ,
  onStartQuiz
}) => {
  const {
    label = 'WEEKLY QUIZ',
    title = 'Test your Woodline knowledge',
    description = "Take this week's quiz and see how well you know Woodline.",
    imageUrl,
    buttonText = 'START QUIZ →',
    actionUrl
  } = quizData;

  const handleButtonClick = (): void => {
    if (onStartQuiz) {
      onStartQuiz();
    } else if (actionUrl && actionUrl !== '#') {
      window.open(actionUrl, '_blank');
    }
  };

  return (
    <div className={styles.weeklyQuiz}>
      <div className={styles.quizImage}>
        <img
          src={imageUrl}
          alt={title}
        />
      </div>

      <div className={styles.quizContent}>
        {label && (
          <span className={styles.quizLabel}>
            {label}
          </span>
        )}

        <h2 className={styles.quizTitle}>{title}</h2>

        <p className={styles.quizDescription}>{description}</p>

        <button
          type="button"
          className={styles.quizButton}
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default WeeklyQuiz;

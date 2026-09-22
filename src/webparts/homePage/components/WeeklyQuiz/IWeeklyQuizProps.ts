import { IWeeklyQuizData } from '../../types';

export interface IWeeklyQuizProps {
  quizData?: IWeeklyQuizData;
  onStartQuiz?: () => void;
}

import { IWeeklyQuizData } from '../types';
import quizCoverImg from '../assets/quiz-cover.jpg';

export const DEFAULT_WEEKLY_QUIZ: IWeeklyQuizData = {
  label: 'WEEKLY QUIZ',
  title: 'Test your Woodline knowledge',
  description: "Take this week's quiz and see how well you know Woodline.",
  imageUrl: quizCoverImg,
  buttonText: 'START QUIZ →',
  actionUrl: '#'
};

export function getWeeklyQuiz(): IWeeklyQuizData {
  return DEFAULT_WEEKLY_QUIZ;
}

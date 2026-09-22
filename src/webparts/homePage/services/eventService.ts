import { IUpcomingEvent } from '../types';

export const DEFAULT_UPCOMING_EVENTS: IUpcomingEvent[] = [
  {
    id: '1',
    title: 'Wellness Week, US',
    dateInfo: 'Mon, Aug 24, All day'
  },
  {
    id: '2',
    title: '2026 US Open Enrollment',
    dateInfo: 'Tue, Aug 25, All day'
  }
];

export function getUpcomingEvents(): IUpcomingEvent[] {
  return DEFAULT_UPCOMING_EVENTS;
}

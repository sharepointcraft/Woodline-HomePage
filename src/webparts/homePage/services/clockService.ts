import { IOffice, IOfficeTime } from '../types';
import { formatOfficeTime } from '../utils';

export const DEFAULT_OFFICES: IOffice[] = [
  {
    city: 'LONDON',
    timeZone: 'Europe/London',
    officeName: 'London Office'
  },
  {
    city: 'NEW YORK',
    timeZone: 'America/New_York',
    officeName: 'New York Office'
  },
  {
    city: 'WEST PALM BEACH',
    timeZone: 'America/New_York',
    officeName: 'Florida Office'
  },
  {
    city: 'SAN FRANCISCO',
    timeZone: 'America/Los_Angeles',
    officeName: 'California Office'
  }
];

export function getOfficeTimes(offices: IOffice[] = DEFAULT_OFFICES): IOfficeTime[] {
  const now = new Date();
  return offices.map((office: IOffice) => ({
    city: office.city,
    time: formatOfficeTime(office.timeZone, now),
    officeName: office.officeName
  }));
}

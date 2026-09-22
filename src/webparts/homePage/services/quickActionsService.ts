import { IQuickAction } from '../types';

export const DEFAULT_QUICK_ACTIONS: IQuickAction[] = [
  {
    icon: 'IT',
    title: 'Submit a ticket',
    description: 'Contact IT support',
    url: '#'
  },
  {
    icon: 'V',
    title: 'Office Visitor Form',
    description: 'Plan an office visit',
    url: '#'
  },
  {
    icon: 'Book',
    title: 'Woodline Employee Manual',
    description: 'Read the employee manual',
    url: '#'
  },
  {
    icon: 'A',
    title: 'AlphaSense',
    description: 'Market intelligence',
    url: '#'
  }
];

export function getQuickActions(): IQuickAction[] {
  return DEFAULT_QUICK_ACTIONS;
}

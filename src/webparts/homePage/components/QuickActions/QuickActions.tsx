import * as React from 'react';
import styles from '../HomePage.module.scss';
import { Icon } from '@fluentui/react/lib/Icon';
import { IQuickActionsProps } from './IQuickActionsProps';
import { IQuickAction } from '../../types';
import { DEFAULT_QUICK_ACTIONS } from '../../services';

export const QuickActions: React.FC<IQuickActionsProps> = ({
  title = 'Quick actions',
  subtitle = 'Everyday tools, one click away',
  actions = DEFAULT_QUICK_ACTIONS
}) => {
  return (
    <section className={styles.quickActionsSection}>
      <div className={styles.quickActionsContainer}>
        {/* Section Header */}
        <div className={styles.quickActionsHeader}>
          <h2 className={styles.quickActionsTitle}>{title}</h2>
          <p className={styles.quickActionsSubtitle}>{subtitle}</p>
        </div>

        {/* Action Cards */}
        <div className={styles.quickActionsGrid}>
          {actions.map((action: IQuickAction) => (
            <a
              key={action.title}
              href={action.url}
              className={styles.quickActionCard}
            >
              <div className={styles.quickActionIcon}>
                {action.icon === 'Book' ? (
                  <Icon
                    iconName="Dictionary"
                    className={styles.quickActionFluentIcon}
                  />
                ) : (
                  action.icon
                )}
              </div>

              <div className={styles.quickActionTitle}>{action.title}</div>

              <div className={styles.quickActionDescription}>
                {action.description}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;

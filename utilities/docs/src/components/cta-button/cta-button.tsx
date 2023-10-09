import type { FC } from 'react';
import * as React from 'react';
import { mergeClasses } from '@griffel/react';

import type { CTAButtonProps } from './cta-button.types';
import { makeCTAButtonStyles } from './cta-button.styles';

export const CTAButton: FC<CTAButtonProps> = ({
  as: Root = 'a',
  children,
  className,
  elementProps,
}) => {
  const classes = makeCTAButtonStyles();

  return (
    <Root className={mergeClasses(classes.root, className)} {...elementProps}>
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.icon}
      >
        <path
          d="M2 8.00001C2 7.58579 2.33579 7.25001 2.75 7.25001L11.537 7.25L8.24991 4.30894C7.94122 4.03274 7.91488 3.5586 8.19107 3.24991C8.46727 2.94122 8.94141 2.91488 9.2501 3.19108L14.0001 7.44107C14.1591 7.58335 14.25 7.78663 14.25 8C14.25 8.21338 14.1591 8.41666 14.0001 8.55894L9.2501 12.8089C8.94141 13.0851 8.46727 13.0588 8.19107 12.7501C7.91488 12.4414 7.94122 11.9673 8.24991 11.6911L11.537 8.75L2.75 8.75001C2.33579 8.75001 2 8.41422 2 8.00001Z"
          fill="currentColor"
        />
      </svg>
    </Root>
  );
};

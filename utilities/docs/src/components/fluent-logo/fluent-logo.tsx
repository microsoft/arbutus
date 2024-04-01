import * as React from 'react';
import { type FC, useId } from 'react';

export const FluentLogo: FC<{ className?: string; title?: string }> = ({
  className,
  title = 'Fluent',
}) => {
  const titleId = `fluent-logo-${useId()}`;

  return (
    <svg
      width="210"
      height="210"
      viewBox="0 0 210 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      className={className}
    >
      <title id={titleId}>{title}</title>
      <path
        d="M101.002 17.3064L57.0022 42.691C54.5258 44.1198 53 46.7615 53 49.6205V160.379C53 163.239 54.5258 165.88 57.0022 167.309L99.0011 191.539C101.668 193.078 105 191.153 105 188.074V135L150.994 108.465C153.663 106.925 153.663 103.075 150.994 101.535L105 75L150.994 48.4647C153.663 46.9254 153.663 43.0746 150.994 41.5353L108.998 17.3064C106.524 15.8791 103.476 15.8791 101.002 17.3064Z"
        fill="var(--colorNeutralForeground1)"
      />
    </svg>
  );
};

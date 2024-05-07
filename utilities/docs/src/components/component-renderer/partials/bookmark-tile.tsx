import { makeStyles } from '@griffel/react';
import { BookmarkTile } from '@microsoft/arbutus.bookmark-tile';
import type { FC } from 'react';
import * as React from 'react';

import { makeNavigate } from '../../../utilities';

const useStyles = makeStyles({
  root: {
    maxWidth: '316px',
  },
});

import type { BookmarkTileComponentData } from '../component-renderer.types';

type BookmarkTileComponentProps = BookmarkTileComponentData;

export const BookmarkTileComponent: FC<BookmarkTileComponentProps> = ({
  description,
  isExternal,
  title,
  to,
  icon,
}) => {
  const classes = useStyles();

  const onClick = makeNavigate({ isExternal, to });

  return (
    <BookmarkTile
      title={title}
      description={description}
      onClick={onClick}
      iconAlt={icon?.alternativeText ?? ''}
      iconSrc={icon?.src}
      className={classes.root}
    />
  );
};

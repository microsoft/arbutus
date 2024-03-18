import { makeStyles } from '@griffel/react';
import { colorClasses, paths } from '@microsoft/arbutus.icon';
import { Text } from '@microsoft/arbutus.text';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import { MarkList, MarkListItem } from '../src/index';

export default {
  title: 'Lists/MarkList',
  argTypes: {
    iconName: {
      options: Object.keys(paths),
      control: { type: 'select' },
    },
    iconColor: {
      options: Object.keys(colorClasses),
      control: { type: 'select' },
    },
  },
  decorators: [Centered],
} as Meta<typeof MarkList>;

const useTileGridStyles = makeStyles({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '2.5rem',
    rowGap: '2.5rem',

    '@media screen and (max-width: var(--arbutus--breakpoint-xxs))': {
      gridTemplateColumns: '100%',
    },
  },
});

const TemplateWithIcon: StoryFn<typeof MarkList> = (args) => {
  const classes = useTileGridStyles();

  return (
    <div className={classes.root}>
      <MarkList {...args}>
        {Array.from({ length: 3 }).map((_, i) => (
          <MarkListItem key={i}>
            <Text variant="description" color="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
              commodo purus.
            </Text>
          </MarkListItem>
        ))}
      </MarkList>
      <MarkList iconColor="negative" iconName="x">
        {Array.from({ length: 3 }).map((_, i) => (
          <MarkListItem key={i}>
            <Text variant="description" color="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
              commodo purus.
            </Text>
          </MarkListItem>
        ))}
      </MarkList>
    </div>
  );
};

// export const Simple = Template.bind({}) as StoryFn<FunctionComponent<MarkListProps>>;
// Simple.args = {
//   iconName: undefined,
//   iconColor: undefined,
// };

// export const WithIcon = TemplateWithIcon.bind({}) as StoryFn<
//   FunctionComponent<MarkListProps>
// >;

// WithIcon.args = {
//   iconName: 'check',
//   iconColor: 'positive',
// };

export const Base: StoryObj = {
  render: (args) => (
    <p>Hello {JSON.stringify(args)}</p>
    // <MarkList {...args}>
    //   <MarkListItem>
    //     <Text as="span" variant="caption">
    //       Natural on every platform.{' '}
    //     </Text>
    //     <Text as="span" color="secondary">
    //       You want to know what to do. Your experiences should adapt to the device you’re
    //       on and should build off the familiar — designing for what you already
    //       understand. You want to know what to do. Your experiences should adapt to the
    //       device you’re on and should build off the familiar — designing for what you
    //       already understand.
    //     </Text>
    //   </MarkListItem>
    //   <MarkListItem>
    //     <Text as="span" variant="caption">
    //       One for all, all for one. You want to be included.{' '}
    //     </Text>
    //     <Text as="span" color="secondary">
    //       Your experiences should consider, learn, and reflect a range of perspectives and
    //       abilities for the benefit of all.
    //     </Text>
    //   </MarkListItem>
    //   <MarkListItem>
    //     <Text as="span" variant="caption">
    //       Built for focus. You want to stay in the flow.{' '}
    //     </Text>

    //     <Text as="span" color="secondary">
    //       Your experiences should inspire action, drawing you forward, simply and
    //       seamlessly.
    //     </Text>
    //   </MarkListItem>
    //   <MarkListItem>
    //     <Text as="span" variant="caption">
    //       Unmistakably Microsoft.{' '}
    //     </Text>

    //     <Text as="span" color="secondary">
    //       You want to recognize what you’re looking for. Your experiences should feel like
    //       one Microsoft. One moment, one product, one experience at a time.
    //     </Text>
    //   </MarkListItem>
    // </MarkList>
  ),
};

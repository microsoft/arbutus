import { mergeClasses } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import * as React from 'react';

const ExampleComponent = () => {
  const space = useSpaceStyles();

  return (
    <Tile
      variant="solid-color"
      backgroundColor="accent"
      className={mergeClasses(space.py9, space.px7)}
    >
      <Text variant="headline" color="accent" className={space.mb7} block>
        Tile: Solid color variant
      </Text>
      <Text variant="description" block>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente voluptas
        laudantium placeat aliquam eum nesciunt dolorem rerum, quasi ea quisquam natus
        repellendus! Laudantium expedita laborum natus, earum tenetur quidem?
      </Text>
    </Tile>
  );
};

export default ExampleComponent;

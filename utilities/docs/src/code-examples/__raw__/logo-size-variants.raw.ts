export default `import { makeStyles } from '@griffel/react';
import { Logo } from '@microsoft/arbutus.logo';
import { TableCell, TableList, TableRow } from '@microsoft/arbutus.table-list';
import { Text } from '@microsoft/arbutus.text';
import * as React from 'react';

const useTableListStyles = makeStyles({
  root: {
    minWidth: '642px',
  },
});

const ExampleComponent = () => {
  const classes = useTableListStyles();

  return (
    <TableList className={classes.root} columnSizing={['40px', 'auto']}>
      <TableRow>
        <TableCell>
          {/** Logo 👇 */}
          <Logo logoName="figma" size="small" />
          {/** Logo 👆 */}
        </TableCell>
        <TableCell>
          <Text variant="caption">Small</Text>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          {/** Logo 👇 */}
          <Logo logoName="figma" size="medium" />
          {/** Logo 👆 */}
        </TableCell>
        <TableCell>
          <Text variant="caption">Medium</Text>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          {/** Logo 👇 */}
          <Logo logoName="figma" size="large" />
          {/** Logo 👆 */}
        </TableCell>
        <TableCell>
          <Text variant="caption">Large</Text>
        </TableCell>
      </TableRow>
    </TableList>
  );
};

export default ExampleComponent;
`;

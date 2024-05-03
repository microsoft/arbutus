"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[4704],{14704:function(o,e,n){n.r(e),e.default="import { makeStyles } from '@griffel/react';\nimport { colorClasses, Icon } from '@microsoft/arbutus.icon';\nimport { TableCell, TableList, TableRow } from '@microsoft/arbutus.table-list';\nimport { Text } from '@microsoft/arbutus.text';\nimport * as React from 'react';\n\ntype Color = keyof typeof colorClasses;\n\nconst useTableListStyles = makeStyles({\n  root: {\n    minWidth: '642px',\n  },\n});\n\nconst ExampleComponent = () => {\n  const classes = useTableListStyles();\n\n  return (\n    <TableList className={classes.root} columnSizing={['40px', 'auto']}>\n      {Object.keys(colorClasses).map((color) => (\n        <TableRow key={color}>\n          <TableCell>\n            {/** Icon 👇 */}\n            <Icon iconName=\"moon\" color={color as Color} />\n            {/** Icon 👆 */}\n          </TableCell>\n          <TableCell>\n            <Text variant=\"caption\">{color}</Text>\n          </TableCell>\n        </TableRow>\n      ))}\n    </TableList>\n  );\n};\n\nexport default ExampleComponent;\n"}}]);
//# sourceMappingURL=4704-269980e736c8aae811c8.js.map
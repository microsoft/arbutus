"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[607],{3607:function(e,n,t){t.r(n),n.default="import { makeStyles } from '@griffel/react';\nimport { Icon, paths as icons } from '@microsoft/arbutus.icon';\nimport { Text } from '@microsoft/arbutus.text';\nimport { TableList, TableRow, TableCell } from '@microsoft/arbutus.table-list';\nimport * as React from 'react';\n\nconst useTableListStyles = makeStyles({\n  root: {\n    minWidth: '642px',\n  },\n});\n\ntype Key = keyof typeof icons;\n\nconst ExampleComponent = () => {\n  const classes = useTableListStyles();\n\n  return (\n    <TableList className={classes.root} columnSizing={['40px', 'auto']}>\n      {Object.keys(icons).map((key) => (\n        <TableRow>\n          <TableCell>\n            {/** Icon 👇 */}\n            <Icon iconName={key as Key} />\n            {/** Icon 👆 */}\n          </TableCell>\n          <TableCell>\n            <Text variant=\"caption\">{key}</Text>\n          </TableCell>\n        </TableRow>\n      ))}\n    </TableList>\n  );\n};\n\nexport default ExampleComponent;\n"}}]);
//# sourceMappingURL=607-d2c124202797d6e28e80.js.map
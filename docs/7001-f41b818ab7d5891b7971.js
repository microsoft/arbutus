"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[7001],{37001:function(e,n,s){s.r(n),n.default="import { mergeClasses, makeStyles } from '@griffel/react';\nimport { useTheme } from '@microsoft/arbutus.theming';\nimport { Tile } from '@microsoft/arbutus.tile';\nimport { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';\nimport * as React from 'react';\n\nconst useStyles = makeStyles({\n  root: {\n    minHeight: '400px',\n    minWidth: '600px',\n  },\n});\n\nconst ExampleComponent = () => {\n  const space = useSpaceStyles();\n  const classes = useStyles();\n\n  // Making the image source dynamic based on the theme.\n  const { themeKey } = useTheme();\n  const imageSrc =\n    themeKey === 'light'\n      ? 'https://placehold.co/600x400/FAFAFA/424242'\n      : 'https://placehold.co/600x400/424242/FAFAFA';\n\n  return (\n    <Tile\n      variant=\"image\"\n      imageSrc={imageSrc}\n      className={mergeClasses(classes.root, space.py9, space.px7)}\n    >\n      {/* Tile: Solid color variant */}\n    </Tile>\n  );\n};\n\nexport default ExampleComponent;\n"}}]);
//# sourceMappingURL=7001-f41b818ab7d5891b7971.js.map
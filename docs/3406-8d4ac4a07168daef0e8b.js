"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[3406],{93406:function(n,t,o){o.r(t),t.default="import { tokens } from '@fluentui/react-theme';\nimport { makeStyles } from '@griffel/react';\nimport { Button } from '@microsoft/arbutus.button';\nimport * as React from 'react';\n\nconst containerStyles = makeStyles({\n  root: {\n    display: 'flex',\n    columnGap: tokens.spacingHorizontalM,\n  },\n});\n\nconst ExampleComponent = () => {\n  const classes = containerStyles();\n\n  return (\n    <>\n      <div className={classes.root}>\n        <Button>Primary brick</Button>\n        <Button color=\"secondary\">Secondary brick</Button>\n      </div>\n      <div className={classes.root}>\n        <Button shape=\"pill\">Primary pill</Button>\n        <Button shape=\"pill\" color=\"secondary\">\n          Secondary pill\n        </Button>\n      </div>\n    </>\n  );\n};\n\nexport default ExampleComponent;\n"}}]);
//# sourceMappingURL=3406-8d4ac4a07168daef0e8b.js.map
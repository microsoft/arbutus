"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[5098],{35098:function(n,t,i){i.r(t),t.default="import {\n  ActionListHeader,\n  ActionListItem,\n  ActionListItems,\n  ActionListTile,\n} from '@microsoft/arbutus.action-list-tile';\nimport * as React from 'react';\n\nconst links = [\n  'Did you know about this?',\n  'Interesting blog post 🤔',\n  'I like cats and dogs and it is a longer title.',\n  'Fourth item in this list.',\n];\n\nconst ExampleComponent = () => {\n  const onClick = () => {};\n\n  return (\n    <ActionListTile>\n      <ActionListHeader title=\"Useful Links\" />\n      <ActionListItems>\n        {links.map((action, i) => (\n          <ActionListItem\n            key={`${i}-${action}`}\n            label={action}\n            description=\"Go to\"\n            iconName=\"open\"\n            onClick={onClick}\n          />\n        ))}\n      </ActionListItems>\n    </ActionListTile>\n  );\n};\n\nexport default ExampleComponent;\n"}}]);
//# sourceMappingURL=5098-b68028ce24d17b8594fb.js.map
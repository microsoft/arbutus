"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[3077],{83077:function(n,e,a){a.r(e),e.default='import { Tab, TabList, TabPanel, TabPanels, Tabs } from \'@microsoft/arbutus.tabs\';\nimport { Text } from \'@microsoft/arbutus.text\';\nimport { Tile } from \'@microsoft/arbutus.tile\';\nimport { useSpaceStyles } from \'@microsoft/arbutus.use-space-styles\';\nimport React from \'react\';\n\nconst Content = ({ index }: { index: string }) => {\n  const space = useSpaceStyles();\n\n  return (\n    <Tile variant="solid-color">\n      <article className={space.p8}>\n        <Text as="h3" variant="subtitle" block className={space.mb4}>\n          This Is a Headline {index}!\n        </Text>\n        <Text as="p" block>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremque\n          dolores beatae sapiente enim rerum dolorum optio quasi quaerat reiciendis.\n          Laboriosam doloremque itaque optio sint earum debitis nesciunt autem dolor?\n        </Text>\n      </article>\n    </Tile>\n  );\n};\n\nconst ExampleComponent = () => (\n  <Tabs initialIndex={0}>\n    <TabList>\n      <Tab>Usage</Tab>\n      <Tab>Style</Tab>\n      <Tab>Implementation</Tab>\n    </TabList>\n\n    <TabPanels>\n      <TabPanel>\n        <Content index="One" />\n      </TabPanel>\n      <TabPanel>\n        <Content index="Two" />\n      </TabPanel>\n      <TabPanel>\n        <Content index="Three" />\n      </TabPanel>\n    </TabPanels>\n  </Tabs>\n);\n\nexport default ExampleComponent;\n'}}]);
//# sourceMappingURL=3077-ea2aadaa453939a38350.js.map
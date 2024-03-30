import type { SandpackSetup, SandpackThemeProp } from '@codesandbox/sandpack-react';
import { Sandpack } from '@codesandbox/sandpack-react';
import { useTheme } from '@microsoft/arbutus.theming';
import type { FC } from 'react';
import * as React from 'react';

import { app } from './partials/app-template';
import { centered } from './partials/centered-template';
import { entry } from './partials/index-template';
import { themeProvider } from './partials/wrapper-template';
import type { SandboxProps } from './sandbox.types';

export const Sandbox: FC<SandboxProps> = ({ componentCode, dependencies }) => {
  // (1) Constructing a dependency object.
  const restDependencies = dependencies?.reduce(
    (acc, value) => {
      // User passed a tuple, where the first value is the package, and the second is the version.
      if (Array.isArray(value) && value.length === 2) {
        const [packageName, version] = value;

        acc[packageName] = version;
      }

      // User passed just the package name, in which case use the latest version.
      if (typeof value === 'string') {
        acc[value] = 'latest';
      }

      return acc;
    },
    {} as { [packageName: string]: string },
  );

  // (2) Constructing Sandbox configuration.
  const customSetup: SandpackSetup = {
    entry: '/index.tsx',
    dependencies: {
      '@griffel/react': 'latest',
      '@microsoft/arbutus.fonts': 'latest',
      '@microsoft/arbutus.theming': 'latest',
      'normalize.css': 'latest',
    },
  };

  if (restDependencies) {
    customSetup.dependencies = { ...customSetup.dependencies, ...restDependencies };
  }

  const files = {
    '/component.tsx': {
      code: componentCode,
      active: true,
    },
    '/app.tsx': app,
    '/theme.tsx': themeProvider,
    '/centered.tsx': centered,
    '/index.tsx': {
      code: entry,
      hidden: true,
    },
  };

  // (3) Getting theme.
  const { themeKey } = useTheme();
  const theme: SandpackThemeProp = themeKey === 'light' ? 'light' : 'dark';

  return (
    <Sandpack theme={theme} template="react-ts" files={files} customSetup={customSetup} />
  );
};

import { Text } from '@fluentui/react-text';
import { Shell as ArbutusShell } from '@microsoft/arbutus.shell';
import { useTheme } from '@microsoft/arbutus.theming';
import { useCSSVars } from '@microsoft/arbutus.use-css-vars';
import { withPrefix } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import { makeNavigate } from '../../utilities';
import { FluentLogo } from '../fluent-logo';
import { Footer } from '../footer';
import { Header } from '../header';
import { Navigation } from '../navigation';
import { BLUEPRINTS_DOCS_PREFIX, BLUEPRINTS_DOCS_THEME } from '../theme';
import { useLogoStyles } from './shell.styles';
import type { ShellProps } from './shell.types';

const navigateHome = makeNavigate({ isExternal: false, to: '/' });

const Logo: FC = () => {
  const classes = useLogoStyles();

  return (
    <>
      <FluentLogo className={classes.svg} />
      <Text as="h1" size={700} weight="bold" className={classes.text}>
        Blueprints
      </Text>
    </>
  );
};

export const Shell: FC<ShellProps> = ({ children, location }) => {
  const isHome = location.pathname === withPrefix('/');
  const isComponentPreview = location.pathname.includes('/preview/');

  const { themeKey } = useTheme();

  useCSSVars({
    currentThemeKey: themeKey,
    theme: BLUEPRINTS_DOCS_THEME,
    prefix: BLUEPRINTS_DOCS_PREFIX,
  });

  return (
    <ArbutusShell
      footerArea={<Footer />}
      headerArea={<Header />}
      navigationArea={<Navigation />}
      logoAs={Logo}
      closeTrayLabel="Close navigation"
      openTrayLabel="Open navigation"
      isHeroMode={isHome}
      isBlankMode={isComponentPreview}
      onLogoClick={navigateHome}
    >
      {children}
    </ArbutusShell>
  );
};

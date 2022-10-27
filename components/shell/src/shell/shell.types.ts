import type { ReactNode } from 'react';

export type ShellProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * A consumer defined header area.
   */
  headerArea: ReactNode;

  /**
   * A consumer defined footer area.
   */
  footerArea: ReactNode;

  /**
   * A consumer defined navigation area.
   */
  navigationArea: ReactNode;

  /**
   * Logo mark src.
   * */
  logoMarkSrc?: string;

  /**
   * Logo mark alt.
   */
  logoMarkAlt?: string;

  /**
   * Logo text.
   */
  logoText?: string;

  /**
   * Accessible text for the close tray action.
   */
  closeTrayLabel?: string;

  /**
   * Accessible text for the open tray action.
   */
  openTrayLabel?: string;

  /**
   * Sets the Shell to be in full-width mode.
   * @default false
   * */
  isHeroMode?: boolean;
};

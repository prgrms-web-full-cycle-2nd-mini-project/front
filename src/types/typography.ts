import { CSSProp } from 'styled-components';
import { Color } from './colors';

export type TypoProps = {
  $variant:
    | 'largetitle'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button1'
    | 'button2'
    | 'caption1'
    | 'active'
    | 'cardTitle';
  $color?: Color;
  $style?: CSSProp;
  children: string;
};

export const TAG_MAPPING: Record<
  TypoProps['$variant'],
  keyof JSX.IntrinsicElements
> = {
  largetitle: 'h1',
  title1: 'h2',
  title2: 'h2',
  title3: 'h3',
  subtitle1: 'h4',
  subtitle2: 'h5',
  body1: 'p',
  body2: 'p',
  button1: 'span',
  button2: 'span',
  caption1: 'span',
  active: 'span',
  cardTitle: 'h6',
};

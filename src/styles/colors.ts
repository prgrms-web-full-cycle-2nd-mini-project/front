// 색상
export type Color =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'error'
  | 'warning'
  | 'success'
  | 'overlay'
  | 'gray10'
  | 'gray20'
  | 'gray30'
  | 'gray40'
  | 'gray50'
  | 'gray60'
  | 'gray70'
  | 'gray80'
  | 'gray90'
  | 'gray100';

export const colors: Record<Color, string> = {
  primary: '#DEE8E0',
  secondary: '#678C6E',
  white: '#FFFFFF',
  error: '#E63A3A',
  warning: '#E8C33D',
  success: '#51B800',
  overlay: 'rgba(18, 22, 22, 0.5)',
  gray10: '#F2F4F5',
  gray20: '#DDE1E3',
  gray30: '#C1C7CA',
  gray40: '#A2A9AD',
  gray50: '#878D96',
  gray60: '#697074',
  gray70: '#4D5358',
  gray80: '#343A3C',
  gray90: '#212727',
  gray100: '#121616',
};

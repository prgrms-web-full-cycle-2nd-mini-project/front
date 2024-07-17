export type ButtonProps = {
  size?: 'large' | 'small';
  $limit?: boolean;
  type?: 'submit' | 'button';
  onClick?: () => void;
};

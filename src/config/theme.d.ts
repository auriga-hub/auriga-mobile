import '@react-navigation/native';

// Override the theme in react native navigation to accept our custom theme props.
type ExtendedColors = {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  inputBorder: string;
  white: string;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  primaryDisabled: string;
  secondaryDisabled: string;
};

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: ExtendedColors;
  };
  export function useTheme(): ExtendedTheme;
}

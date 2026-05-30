declare module "*.module.scss" {
  import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
  const styles: { [key: string]: ViewStyle & TextStyle & ImageStyle };
  export default styles;
}

declare module "*.module.sass" {
  import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
  const styles: { [key: string]: ViewStyle & TextStyle & ImageStyle };
  export default styles;
}

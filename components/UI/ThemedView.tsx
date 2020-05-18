import React from 'react';
import { ViewProps, View, StyleProp, ViewStyle, StatusBar } from 'react-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import { ThemeKey } from '../../config/themes';
import useTheme from '../../hooks/useTheme';
import useConstants from '../../hooks/useConstants';

interface Props extends ViewProps {
  children: React.ReactChild;
  style?: any;
}

const ThemedView: React.FunctionComponent<Props> = (props: Props) => {
  const theme: AppTheme = useTheme();

  const { children, style, ...restProps } = props;

  const { selectedTheme }: AppConstants = useConstants();

  const selectedStatusBar = selectedTheme == ThemeKey.dark ? "light-content" : "light-content"

  const themeColorStyle: StyleProp<ViewStyle> = [{backgroundColor: theme.backgroundColor}];

  const newStyle: StyleProp<ViewStyle> = themeColorStyle.concat(style)

  return (
    <View style={[newStyle,{backgroundColor: theme.appColor}]} {...restProps}>
      <StatusBar barStyle={selectedStatusBar} backgroundColor={theme.appColor}/>
      {props.children}
    </View>
  )
};

export default ThemedView;
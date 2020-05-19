import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, ImageBackground, Image, ImageStyle, TextStyle } from 'react-native';
import { Dispatch } from 'redux';
import { AppLanguage,} from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';
import ThemedText from '../../components/UI/ThemedText';
import RoundButton from '../../components/Base/RoundButton';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from '../../hooks/useTheme';

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history
}

const BaseHome: React.FunctionComponent<Props> = ({
  history
}: Props) => {

  const goToBaseNext = () => {
    history.push('/base')
  }
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  return (
    <View style={style.mainContainer}>
      <ImageBackground source={constants.bannerImage} style={style.imageStyle} >
        <View style={[style.topContainer, style.logoContainer]}> 
          <Image source={constants.recraftLogo} style={style.logoImage}/>
        </View>
        <View style={style.topContainer}> 
          <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.title]}>{constants.title}</ThemedText>
        </View>
        <View style={style.topContainer}> 
          <ThemedText styleKey="highlightTextColor" style={style.textStyle}>{language.welcome}</ThemedText>
        </View>
        <View style={style.secondContainer}>
          <RoundButton buttonStyle={style.button} label="Get Food" buttonColor={theme.highlightTextColor} labelStyle={theme.highlightTextColor} onPress={goToBaseNext} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default BaseHome;

interface Style {
  mainContainer: ViewStyle;
  topContainer: ViewStyle;
  secondContainer: ViewStyle;
  button: ViewStyle;
  imageStyle: ImageStyle;
  logoImage: ImageStyle;
  logoContainer: ViewStyle;
  textStyle: TextStyle;
  title: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
  mainContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    fontSize: 16,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logoImage: {
    justifyContent: 'center',
    width: 180, 
    height: 180,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  secondContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 30
  },
  button: {
    marginTop: 10,
    minWidth: 270,
    borderWidth: 2
  },
  textStyle: {
    fontSize: 16, 
  },
  imageStyle: { 
    width: '100%', 
    height: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  logoContainer: {
    marginTop: 120
  },
});

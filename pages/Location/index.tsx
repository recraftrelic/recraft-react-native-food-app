import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, TouchableOpacity, Image, ImageStyle, TextStyle, Platform } from 'react-native';
import { Dispatch } from 'redux';
import { AppLanguage,} from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';
import ThemedText from '../../components/UI/ThemedText';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from '../../hooks/useTheme';
import RoundButton from '../../components/Base/RoundButton';
import Octicons from 'react-native-vector-icons/Octicons';

const isIOS = (): Boolean => Platform.OS == "ios";

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history
}

const Location: React.FunctionComponent<Props> = ({
  history
}: Props) => {

  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  return (
    <View style={style.mainContainer}>
      <View style={[style.imageStyle, {backgroundColor: theme.mainColor}]} >
          <View style={style.backContainer}>
            <TouchableOpacity style={style.leftContainer}>
              <Octicons name="three-bars" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
            </TouchableOpacity>
            <View style={style.rightContainer}>
              <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.title]}>{language.location}</ThemedText>
            </View>
          </View>
        <View style={[style.topContainer, style.logoContainer]}> 
          <Image source={constants.locationIcon} style={style.logoImage}/>
        </View>
        <View style={style.topContainer}> 
          <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.title]}>{language.locationTitle}</ThemedText>
        </View>
        <View style={style.topContainer}> 
          <ThemedText styleKey="highlightTextColor" style={style.textStyle}>{language.locationContent}</ThemedText>
        </View>
        <View style={style.topContainer}> 
          <ThemedText styleKey="highlightTextColor" style={style.textStyle}>{language.locationText}</ThemedText>
        </View>
        <View style={style.secondContainer}>
          <RoundButton buttonStyle={style.button} label="SELECT YOUR AREA" buttonColor={theme.highlightTextColor} labelStyle={theme.highlightTextColor} />
          <RoundButton buttonStyle={[style.button, {backgroundColor: theme.highlightTextColor}]} label="FIND RESTAURANTS" buttonColor={theme.mainColor} labelStyle={theme.mainColor} />
        </View>
      </View>
    </View>
  );
};

export default Location;

interface Style {
  mainContainer: ViewStyle;
  topContainer: ViewStyle;
  button: ViewStyle;
  secondContainer: ViewStyle;
  imageStyle: ViewStyle;
  drawerStyles: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  backIcon: ViewStyle;
  backContainer: ViewStyle;
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
    width: 200, 
    height: 90,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
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
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 30,
    marginBottom: 10
  },
  logoContainer: {
    marginTop: 120
  },
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
    paddingLeft: 10,
    paddingTop: isIOS() ? 30 : 0
  },
  leftContainer: {
    flex: 0, 
    justifyContent: "flex-start",
    paddingTop: isIOS() ? 12 : 15
  },
  rightContainer: {
    flex: 3, 
    justifyContent: "center", 
    paddingLeft: 20,
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  drawerStyles: { 
    shadowColor: '#000000', 
    shadowOpacity: 0.8, 
    shadowRadius: 3
  },
});

import React, {useState} from 'react';
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
import RNPickerSelect from 'react-native-picker-select';
import Drawer from 'react-native-drawer';
import ControlPanel from '../../components/Base/ControlPanel';

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
  const [location, setLocation] = useState<string>('India');
  const [menu, setMenu] = useState<Boolean>(false);

  const locations = [
    { label: 'India', value: 'in' },
    { label: 'USA', value: 'us' },
    { label: 'Germany', value: 'gr' },
    { label: 'France', value: 'fr' },
    { label: 'China', value: 'ch' },
  ];

  const placeholder = {
    label: 'SELECT YOUR AREA',
    value: null,
    color: theme.highlightTextColor,
  };

  const onChangeLocation = (value) => {
    setLocation(value)
  }

  console.disableYellowBox = true;

  return (
    <View style={style.mainContainer}>
      <View style={[style.imageStyle, {backgroundColor: theme.mainColor}]} >
        <Drawer open={menu} type="overlay" content={<ControlPanel label={language.profile} />} tweenDuration={100} openDrawerOffset={50} panOpenMask={0.2}>
          <View style={style.backContainer}>
            <TouchableOpacity style={style.leftContainer} onPress={() => setMenu(!menu)}>
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
          <View style={[style.button, style.drawerStyles, {borderColor: theme.highlightTextColor}]}>
            <View style={[style.backContainer, {paddingTop: 0}]}>
              <View style={[style.leftContainer, style.extraStyle]}>
                <Octicons name="location" size={20} color={theme.highlightTextColor} />
              </View>
              <View style={[style.rightContainer, style.nextStyle]}>
                <RNPickerSelect placeholder={placeholder} style={{placeholder: { color: theme.highlightTextColor, fontSize: 14, fontWeight: 'bold'}, inputIOS:{color: theme.highlightTextColor},inputAndroid:{color: theme.highlightTextColor}}} value={location} onValueChange={(value) => onChangeLocation(value)} items={locations} useNativeAndroidPickerStyle={false}/>
              </View>
              <View style={[style.rightContainer, style.specialContainer]}>
                <Octicons name="triangle-down" size={20} color={theme.highlightTextColor} />
              </View>
            </View>
          </View>
          <RoundButton buttonStyle={[style.button, {backgroundColor: theme.highlightTextColor}]} label="FIND RESTAURANTS" buttonColor={theme.mainColor} labelStyle={theme.mainColor} />
        </View>
        </Drawer>
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
  specialContainer: ViewStyle;
  extraStyle: ViewStyle;
  nextStyle: ViewStyle;
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
    padding: isIOS() ? 10 : 0, 
    borderRadius: 50
  },
  specialContainer: {
    flex: 0, 
    paddingRight: 20, 
    paddingLeft: 0
  },
  nextStyle: {
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingLeft:  isIOS() ? 20 : 0,
  },
  extraStyle: {
    paddingTop: isIOS() ? 0 : 15, 
    paddingLeft: 10,
  }
});

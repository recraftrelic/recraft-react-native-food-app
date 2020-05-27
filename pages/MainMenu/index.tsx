import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, TouchableOpacity, Image, ImageStyle, TextStyle, Platform, TextInput, ScrollView } from 'react-native';
import { Dispatch } from 'redux';
import { AppLanguage,} from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';
import ThemedText from '../../components/UI/ThemedText';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from '../../hooks/useTheme';
import Octicons from 'react-native-vector-icons/Octicons';
import RNPickerSelect from 'react-native-picker-select';
import FooterNavigation from '../../components/Base/FooterNavigation';

const isIOS = (): Boolean => Platform.OS == "ios";

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history
}

const MainMenu: React.FunctionComponent<Props> = ({
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
    label: 'CURRENT LOCATION',
    value: null,
    color: theme.textColor,
  };

  const onChangeLocation = (value) => {
    setLocation(value)
  }

  console.disableYellowBox = true;

  return (
    <View style={style.mainContainer}>
      <View style={[style.imageStyle, {backgroundColor: theme.mainColor}]} >
        <View style={style.backContainer}>
          <TouchableOpacity style={style.leftContainer} onPress={() => setMenu(!menu)}>
            <Octicons name="three-bars" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
          </TouchableOpacity>
          <View style={[style.rightContainer, style.nextStyle]}>
            <RNPickerSelect placeholder={placeholder} style={{placeholder: { color: theme.highlightTextColor, fontSize: 16, fontWeight: 'bold'}, inputIOS:{color: theme.highlightTextColor},inputAndroid:{color: theme.highlightTextColor}}} value={location} onValueChange={(value) => onChangeLocation(value)} items={locations} useNativeAndroidPickerStyle={false}/>
          </View>
          <View style={[style.rightContainer, style.specialContainer, {paddingLeft: 0}]}>
            <Octicons name="triangle-down" size={20} color={theme.highlightTextColor} />
          </View>
          <TouchableOpacity style={[style.rightContainer, style.specialContainer, {flex:0, paddingRight: 30}]}>
            <Octicons name="settings" size={20} color={theme.highlightTextColor} />
          </TouchableOpacity>
        </View>
        <View style={[style.button, style.drawerStyles, {borderColor: theme.highlightTextColor}]}>
          <View style={[style.backContainer, {paddingTop: 0}]}>
            <View style={[style.leftContainer, style.extraStyle]}>
              <Octicons name="search" size={15} color={theme.highlightTextColor} />
            </View>
            <View style={[style.rightContainer, {paddingLeft: 5}]}>
              <TextInput placeholderTextColor={theme.highlightTextColor} placeholder={language.searchFood} style={[{ color: theme.highlightTextColor }]}/>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{backgroundColor: theme.highlightTextColor, marginTop: 20, paddingLeft: 40, paddingTop: 20, paddingBottom: 20, paddingRight: 5}}>
            <View style={[style.backContainer, {paddingLeft: 0, paddingTop: 0, paddingBottom: 10}]}>
              <View style={[style.leftContainer, {paddingTop: 0}]}>
                <ThemedText styleKey="textColor" style={style.title}>{language.foodType}</ThemedText>
              </View>
              <View style={[style.rightContainer, {paddingLeft: 5, flex: 0, justifyContent: 'flex-start'}]}>
                <ThemedText styleKey="textColor" style={style.title}>{language.seeAll}</ThemedText>
              </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={[style.backContainer, {paddingLeft: 0, paddingTop: 0, paddingBottom: 30}]}>
                <View style={[style.leftContainer, {paddingTop: 0, marginRight: 20}]}>
                  <Image source={constants.offer} style={style.dishImage}/>
                  <ThemedText styleKey="mainColor" style={style.textStyle}>{language.chineseText}</ThemedText>
                </View>
                <View style={[style.leftContainer, {paddingTop: 0, marginRight: 20}]}>
                  <Image source={constants.offer} style={style.dishImage}/>
                  <ThemedText styleKey="mainColor" style={style.textStyle}>{language.indianText}</ThemedText>
                </View>
                <View style={[style.leftContainer, {paddingTop: 0, marginRight: 20}]}>
                  <Image source={constants.offer} style={style.dishImage}/>
                  <ThemedText styleKey="mainColor" style={style.textStyle}>{language.frenchText}</ThemedText>
                </View>
                <View style={[style.leftContainer, {paddingTop: 0, marginRight: 20}]}>
                  <Image source={constants.offer} style={style.dishImage}/>
                  <ThemedText styleKey="mainColor" style={style.textStyle}>{language.AmericanText}</ThemedText>
                </View>
              </View>
            </ScrollView>
            <View style={[style.backContainer, {paddingLeft: 0, paddingTop: 0, paddingBottom: 10}]}>
              <View style={[style.leftContainer, {paddingTop: 0}]}>
                <ThemedText styleKey="textColor" style={style.title}>{language.exploreText}</ThemedText>
              </View>
              <View style={[style.rightContainer, {paddingLeft: 5, flex: 0, justifyContent: 'flex-start'}]}>
                <ThemedText styleKey="textColor" style={style.title}>{language.seeAll}</ThemedText>
              </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={[style.backContainer, {paddingLeft: 0, paddingTop: 0, paddingBottom: 30}]}>
                <View style={[style.leftContainer, {paddingTop: 0, marginRight: 20}]}>
                  <Image source={constants.discount} style={style.logoImage}/>
                  <ThemedText styleKey="mainColor" style={style.textStyle}>{language.chineseText}</ThemedText>
                </View>
                <View style={[style.leftContainer, {paddingTop: 0, marginRight: 20}]}>
                  <Image source={constants.discount} style={style.logoImage}/>
                  <ThemedText styleKey="mainColor" style={style.textStyle}>{language.chineseText}</ThemedText>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <FooterNavigation history={history} />   
    </View>
  );
};

export default MainMenu;

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
  dishImage: ImageStyle;
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
    width: 250, 
    height: 190,
    borderRadius: 10
  },
  dishImage: {
    width: 90,
    height: 90,
    borderRadius: 10
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
  },
  button: {
    marginTop: 10,
    minWidth: 270,
    borderWidth: 2
  },
  textStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  imageStyle: { 
    width: '100%', 
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
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
    paddingTop: isIOS() ? 3 : 12,
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
    borderRadius: 50,
    marginLeft: 70,
    marginRight: 70,
    borderWidth: 3
  },
  specialContainer: {
    flex: 1,
    marginTop: 20,
  },
  nextStyle: {
    marginTop: 20
  },
  extraStyle: {
    paddingTop: isIOS() ? 0 : 17, 
    paddingLeft: isIOS() ? 0 : 10,
  }
});

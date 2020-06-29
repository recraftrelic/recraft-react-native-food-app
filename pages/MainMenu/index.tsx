import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, TouchableOpacity, Image, ImageStyle, ImageBackground, TextStyle, Platform, TextInput, ScrollView } from 'react-native';
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
          <View style={[style.rightContainer, {paddingTop: 20}]}>
            <RNPickerSelect placeholder={placeholder} style={{placeholder: { color: theme.highlightTextColor, fontSize: 16, fontWeight: 'bold'}, inputIOS:{color: theme.highlightTextColor},inputAndroid:{color: theme.highlightTextColor}}} value={location} onValueChange={(value) => onChangeLocation(value)} items={locations} useNativeAndroidPickerStyle={false}/>
          </View>
          <View style={[style.rightContainer, style.specialContainer]}>
            <Octicons name="triangle-down" size={20} color={theme.highlightTextColor} />
          </View>
          <TouchableOpacity style={[style.rightContainer, style.specialContainer, {flex:0, paddingRight: 30}]}>
            <Octicons name="settings" size={20} color={theme.highlightTextColor} />
          </TouchableOpacity>
        </View>
        <View style={[style.button, style.drawerStyles, {borderColor: theme.highlightTextColor}]}>
          <View style={[style.backContainer, {paddingTop: 0, paddingLeft: 0}]}>
            <View style={[style.leftContainer, style.extraStyle]}>
              <Octicons name="search" size={15} color={theme.highlightTextColor} />
            </View>
            <View style={[style.rightContainer, {paddingLeft: 5}]}>
              <TextInput placeholderTextColor={theme.highlightTextColor} placeholder={language.searchFood} style={[style.specialStyle, { color: theme.highlightTextColor }]}/>
            </View>
          </View>
        </View>
        <ScrollView style={{marginBottom: 50}}>
          <View style={[style.topContainer, {backgroundColor: theme.highlightTextColor}]}>
            <View style={[style.backContainer, style.logoContainer]}>
              <View style={[style.leftContainer, {paddingTop: 0}]}>
                <ThemedText styleKey="textColor" style={style.title}>{language.foodType}</ThemedText>
              </View>
              <View style={[style.rightContainer, style.secondContainer]}>
                <ThemedText styleKey="textColor" style={style.title}>{language.seeAll}</ThemedText>
              </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={[style.backContainer, style.extraContainer]}>
                <View style={[style.leftContainer, style.nexContainer]}>
                  <Image source={constants.offer} style={style.dishImage}/>
                  <ThemedText styleKey="mainColor" style={style.textStyle}>{language.chineseText}</ThemedText>
                </View>
                <View style={[style.leftContainer, style.nexContainer]}>
                  <Image source={constants.offer} style={style.dishImage}/>
                  <ThemedText styleKey="mainColor" style={style.textStyle}>{language.indianText}</ThemedText>
                </View>
                <View style={[style.leftContainer, style.nexContainer]}>
                  <Image source={constants.offer} style={style.dishImage}/>
                  <ThemedText styleKey="mainColor" style={style.textStyle}>{language.frenchText}</ThemedText>
                </View>
                <View style={[style.leftContainer, style.nexContainer]}>
                  <Image source={constants.offer} style={style.dishImage}/>
                  <ThemedText styleKey="mainColor" style={style.textStyle}>{language.AmericanText}</ThemedText>
                </View>
              </View>
            </ScrollView>
            <View style={[style.backContainer, style.logoContainer]}>
              <View style={[style.leftContainer, {paddingTop: 0}]}>
                <ThemedText styleKey="textColor" style={style.title}>{language.exploreText}</ThemedText>
              </View>
              <View style={[style.rightContainer, style.secondContainer]}>
                <ThemedText styleKey="textColor" style={style.title}>{language.seeAll}</ThemedText>
              </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={[style.backContainer, style.extraContainer]}>
                <View style={[style.leftContainer, style.nextStyle]}>
                  <ImageBackground source={constants.discount} style={style.logoImage}>
                    <ThemedText styleKey="highlightTextColor" style={style.offerTitle}>{language.upTo}</ThemedText>
                    <ThemedText styleKey="highlightTextColor" style={[style.offerStyle, style.offerTitle]}>{language.offDiscount}</ThemedText>
                    <ThemedText styleKey="highlightTextColor" style={style.offerStyle}>{language.order}</ThemedText>
                  </ImageBackground>
                </View>
                <View style={[style.leftContainer, style.nextStyle]}>
                  <ImageBackground source={constants.discount} style={style.logoImage}>
                    <ThemedText styleKey="highlightTextColor" style={style.offerTitle}>{language.upTo}</ThemedText>
                    <ThemedText styleKey="highlightTextColor" style={[style.offerStyle, style.offerTitle]}>{language.offDiscount}</ThemedText>
                    <ThemedText styleKey="highlightTextColor" style={style.offerStyle}>{language.order}</ThemedText>
                  </ImageBackground>
                </View>
              </View>
            </ScrollView>
            <View style={[style.colStyle, {borderColor: theme.lightBottomColor}]}>
              <View style={[style.backContainer, style.extraContainer, {paddingBottom: 0}]}>
                <View style={[style.leftContainer, style.nexContainer, {marginRight: 10}]}>
                  <Image source={constants.offer} style={style.dishImage}/>
                </View>
                <View style={[style.rightContainer, style.cafeContainer]}>
                  <ThemedText styleKey="textColor" style={[style.textStyle, {textAlign: 'left'}]}>{language.cafe}</ThemedText>
                  <ThemedText styleKey="lightTextColor" style={[style.textStyle, style.cafeStyle]}>{language.cafeText}</ThemedText>
                  <ThemedText styleKey="mainColor" style={[style.textStyle, style.cafeStyle, {paddingTop: 5}]}>{language.openText}</ThemedText>
                </View>
                <View style={[style.rightContainer, style.starContainer]}>
                  <View style={[style.ratingStyle, {backgroundColor: theme.mainColor}]}>
                    <ThemedText styleKey="highlightTextColor" style={[style.textStyle, {fontSize: 14}]}>4.0</ThemedText>
                  </View>
                  <ThemedText styleKey="mainColor" style={[style.textStyle, style.cafeStyle]}>142 RATINGS</ThemedText>
                  <View style={[style.rightContainer, style.rateStyle]}>
                    <Octicons name="star" size={10} color={theme.mainColor} />
                    <Octicons name="star" size={10} color={theme.mainColor} />
                    <Octicons name="star" size={10} color={theme.mainColor} />
                    <Octicons name="star" size={10} color={theme.mainColor} />
                  </View>
                </View>
              </View>
            </View>
            <View style={[style.colStyle, {borderColor: theme.lightBottomColor}]}>
              <View style={[style.backContainer, style.extraContainer, {paddingBottom: 0}]}>
                <View style={[style.leftContainer, style.nexContainer, {marginRight: 10}]}>
                  <Image source={constants.offer} style={style.dishImage}/>
                </View>
                <View style={[style.rightContainer, style.cafeContainer]}>
                  <ThemedText styleKey="textColor" style={[style.textStyle, {textAlign: 'left'}]}>{language.cafe}</ThemedText>
                  <ThemedText styleKey="lightTextColor" style={[style.textStyle, style.cafeStyle]}>{language.cafeText}</ThemedText>
                  <ThemedText styleKey="mainColor" style={[style.textStyle, style.cafeStyle, {paddingTop: 5}]}>{language.openText}</ThemedText>
                </View>
                <View style={[style.rightContainer, style.starContainer]}>
                  <View style={[style.ratingStyle, {backgroundColor: theme.mainColor}]}>
                    <ThemedText styleKey="highlightTextColor" style={[style.textStyle, {fontSize: 14}]}>4.0</ThemedText>
                  </View>
                  <ThemedText styleKey="mainColor" style={[style.textStyle, style.cafeStyle]}>142 RATINGS</ThemedText>
                  <View style={[style.rightContainer, style.rateStyle]}>
                    <Octicons name="star" size={10} color={theme.mainColor} />
                    <Octicons name="star" size={10} color={theme.mainColor} />
                    <Octicons name="star" size={10} color={theme.mainColor} />
                    <Octicons name="star" size={10} color={theme.mainColor} />
                  </View>
                </View>
              </View>
            </View>
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
  extraContainer: ViewStyle;
  extraStyle: ViewStyle;
  nextStyle: ViewStyle;
  nexContainer: ViewStyle;
  specialStyle: ViewStyle;
  colStyle: ViewStyle;
  ratingStyle: ViewStyle;
  starContainer: ViewStyle;
  cafeContainer: ViewStyle;
  rateStyle: ViewStyle;
  textStyle: TextStyle;
  offerStyle: TextStyle;
  offerTitle: TextStyle;
  title: TextStyle;
  cafeStyle: TextStyle;
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
    justifyContent: 'flex-end',
    width: 300, 
    height: 230,
    borderRadius: 10,
    paddingBottom: 20
  },
  dishImage: {
    width: 90,
    height: 90,
    borderRadius: 10
  },
  topContainer: {
    marginTop: 20, 
    paddingLeft: 40, 
    paddingTop: 20, 
    paddingBottom: 20, 
    paddingRight: 5
  },
  secondContainer: {
    paddingLeft: 5, 
    flex: 0, 
    justifyContent: 'flex-start'
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
  offerStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingLeft: 20,
  },
  offerTitle: {
    fontSize: 28, 
    textTransform: 'uppercase',
    paddingLeft: 20,
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
    paddingLeft: 0, 
    paddingTop: 0, 
    paddingBottom: 10
  },
  nexContainer: {
    paddingTop: 0, 
    marginRight: 20
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
    marginTop: 0,
    borderWidth: 3
  },
  specialContainer: {
    flex: 1,
    marginTop: 20,
    paddingLeft: 0,
  },
  nextStyle: {
    paddingTop: 0, 
    marginRight: 20
  },
  extraStyle: {
    paddingTop: isIOS() ? 0 : 13, 
    paddingLeft: isIOS() ? 0 : 10,
  },
  extraContainer: {
    paddingLeft: 0, 
    paddingTop: 0, 
    paddingBottom: 30
  },
  colStyle: {
    borderWidth: 2, 
    borderRadius: 20, 
    padding: 10,
    marginBottom: 10
  },
  ratingStyle: {
    width: 30, 
    paddingTop: 3, 
    paddingBottom: 3, 
    borderRadius: 5, 
    marginLeft: 20, 
    marginBottom: 5
  },
  starContainer: {
    paddingLeft: 0, 
    paddingTop: 5, 
    flex: 0
  },
  cafeContainer: {
    paddingLeft: 0, 
    justifyContent: 'flex-start', 
    paddingTop: 5, 
    paddingRight: 10
  },
  rateStyle: {
    flexDirection: 'row-reverse', 
    paddingTop: 5, 
    marginRight: 15
  },
  cafeStyle: {
    textAlign: 'left', 
    fontSize: 10
  },
  specialStyle: {
    paddingBottom: isIOS() ? 0 : 7, 
    paddingTop: isIOS() ? 0 : 7
  }
});

import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, ImageBackground, TouchableOpacity, Image, ImageStyle, TextStyle, Platform, ScrollView } from 'react-native';
import { AppLanguage,} from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';
import ThemedText from '../../components/UI/ThemedText';
import RoundButton from '../../components/Base/RoundButton';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from '../../hooks/useTheme';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell,} from 'react-native-confirmation-code-field';

const isIOS = (): Boolean => Platform.OS == "ios";

const CELL_COUNT = 4;

const VerifyCode: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {

    const backButton = () => {
        history.goBack();
    }  
    const goToLocation = () => {
      history.push('/location');
    } 
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();
    const language: AppLanguage = useLanguage();
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue});
    
    return (
        <View style={style.mainContainer}>
          <ImageBackground source={constants.bannerImage} style={style.imageStyle} >
            <TouchableOpacity style={style.backContainer} onPress={backButton}>
              <View style={style.leftContainer}>
                <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
              </View>
            </TouchableOpacity>
            <View style={[style.topContainer, style.logoContainer]}> 
              <Image source={constants.verifyLogo} style={style.logoImage}/>
            </View>
            <View style={[style.topContainer, style.secondContainer]}> 
              <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.title]}>{language.verify}</ThemedText>
            </View>
            <View style={style.topContainer}> 
              <ThemedText styleKey="highlightTextColor" style={style.smallText}>{language.verifyText}</ThemedText>
            </View>
            <View style={[style.extraStyle]}> 
            <CodeField ref={ref} {...props} value={value} onChangeText={setValue} cellCount={CELL_COUNT} rootStyle={style.codeFiledRoot} keyboardType="number-pad" textContentType="oneTimeCode" renderCell={({index, symbol, isFocused}) => (
              <View key={index} onLayout={getCellOnLayoutHandler(index)} style={{borderBottomWidth: 2, borderColor: theme.highlightTextColor}}>
                <ThemedText styleKey="highlightTextColor" style={[style.cell, isFocused]}>{symbol || (isFocused ? <Cursor /> : null)}</ThemedText>
              </View>
            )}
            />
            </View>
            <View style={[style.topContainer, style.nexStyle]}>
              <RoundButton buttonStyle={style.button} label={language.verifyCode} buttonColor={theme.highlightTextColor} labelStyle={theme.highlightTextColor} onPress={goToLocation}/>
            </View>
            <View style={style.topContainer}>
              <ThemedText styleKey="highlightTextColor" style={style.smallText}>{language.resend}</ThemedText>
            </View>
          </ImageBackground>
        </View>
    );
}

export default VerifyCode;

interface Style {
    mainContainer: ViewStyle;
    topContainer: ViewStyle;
    secondContainer: ViewStyle;
    button: ViewStyle;
    leftContainer: ViewStyle;
    backIcon: ViewStyle;
    backContainer: ViewStyle;
    imageStyle: ImageStyle;
    extraStyle: ViewStyle;
    nexStyle: ViewStyle;
    codeFiledRoot: ViewStyle;
    textStyle: TextStyle;
    smallText: TextStyle;
    title: TextStyle;
    cell: TextStyle;
    logoImage: ImageStyle;
    logoContainer: ViewStyle;
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
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: "center",
      paddingLeft: 50,
      paddingRight: 50,
    },
    secondContainer: {
      marginTop: 30
    },
    button: {
      marginTop: 10,
      minWidth: 270,
      borderWidth: 2
    },
    textStyle: {
      fontSize: 16, 
      textTransform: 'uppercase'
    },
    smallText: {
      fontSize: 12, 
      textTransform: 'uppercase'
    },
    imageStyle: { 
      width: '100%', 
      height: '100%',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
    },
    backContainer: {
      flexDirection: 'row', 
      justifyContent: "space-between", 
      paddingLeft: 20,
      paddingTop: isIOS() ? 30 : 0
    },
    leftContainer: {
      flex: 0, 
      justifyContent: "flex-start",
    },
    backIcon: {
      fontSize: 25,
      paddingTop: 20,
      paddingLeft: 25,
    },
    extraStyle: {
      marginTop: 20,
      marginBottom: 20,
      justifyContent: 'flex-start',
      paddingLeft: 50,
      paddingRight: 50
    },
    nexStyle: {
      paddingTop: 30,
    },
    codeFiledRoot: {
      marginTop: 20
    },
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      textAlign: 'center',
    },
    logoContainer: {
      marginTop: 120
    },
    logoImage: {
      justifyContent: 'center',
      width: 50, 
      height: 50,
    },
  });  

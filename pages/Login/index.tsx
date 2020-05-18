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
import microValidator from 'micro-validator';
import { ValidationError } from '../../config/validation';
import Input from '../../components/Base/Input';
import Icon from 'react-native-vector-icons/Ionicons';

interface LoginField {
    username?: string;
    password?: string;
}

const isIOS = (): Boolean => Platform.OS == "ios";

// @ts-ignore
const ImagePath = require("../../images/main-bg.jpg");

const Login: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {

    const backButton = () => {
        history.goBack();
    }  
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();
    const language: AppLanguage = useLanguage();
    const [selected,setSelected] = useState<Boolean>(false);

    const validate = (data: LoginField): ValidationError => {
        const errors = microValidator.validate({
          username: {
              required: {
                  errorMsg: language.loginValidation.username
              }
          },
          password: {
              required: {
                  errorMsg: language.loginValidation.password
              },
              length: {
                  min: 6,
                  max: 12,
                  errorMsg: language.loginValidation.passwordLength
              }
          },
        },data)
        
        return errors
      }
    
      const [username,onChangeUsername] = useState<string>("")
      const [password,onChangePassword] = useState<string>("")
      const [errors,setErrors] = useState<ValidationError>({})

      const goToHome = () => {
        const errors: ValidationError = validate({username: username,password: password})
    
        if(!Object.keys(errors).length)
        {
          history.push('/')
        }
        else {
          setErrors(errors)
        }
      }
    
    return (
        <View style={style.mainContainer}>
          <ImageBackground source={ImagePath} style={style.imageStyle} >
            <TouchableOpacity style={style.backContainer} onPress={backButton}>
              <View style={style.leftContainer}>
                <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
              </View>
            </TouchableOpacity>
            <ScrollView>
              <View style={[style.topContainer, style.logoContainer]}> 
                <Image source={constants.recraftLogo} style={style.logoImage}/>
              </View>
              <View style={style.topContainer}> 
                <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.title]}>{language.signIn}</ThemedText>
              </View>
              <View style={style.topContainer}> 
                <ThemedText styleKey="highlightTextColor" style={style.textStyle}>{language.signText}</ThemedText>
              </View>
              <View style={[style.topContainer, style.extraStyle]}> 
                <Input placeholder={"Email/Phone"} onChangeText={onChangeUsername} value={username} errors={errors.username}/>
              </View>
              <View style={[style.topContainer, style.extraStyle]}> 
                <Input placeholder={"Password"} onChangeText={onChangePassword} value={password} errors={errors.password} secureTextEntry={true}/>
              </View>
              <View style={style.topContainer}>
                <View style={style.rightContainer}>
                  <TouchableOpacity onPress={() => {setSelected(!selected)}}>
                    <MaterialIcon name={selected ? "checkbox-marked" : "checkbox-blank"} size={20} color={theme.highlightTextColor} />
                  </TouchableOpacity>
                </View>
                <View style={[style.rightContainer, {flex: 0}]}>
                  <ThemedText styleKey="highlightTextColor" style={style.smallText}>{language.remember}</ThemedText>
                </View>
              </View>
              <View style={[style.topContainer, {paddingTop: 30}]}>
                <RoundButton buttonStyle={style.button} label={language.signIn} buttonColor={theme.highlightTextColor} labelStyle={theme.highlightTextColor} onPress={goToHome}/>
              </View>
              <View style={style.topContainer}>
                <ThemedText styleKey="highlightTextColor" style={style.smallText}>{language.forgetText}</ThemedText>
              </View>
              <View style={[style.topContainer, {paddingTop: 30}]}>
                <ThemedText styleKey="highlightTextColor" style={style.smallText}>or</ThemedText>
              </View>
              <View style={[style.topContainer, {paddingTop: 30}]}>
                <ThemedText styleKey="highlightTextColor" style={style.smallText}>{language.signWith}</ThemedText>
              </View>
              <View style={style.topContainer}>
                <TouchableOpacity style={[style.iconContainer, {backgroundColor: 'blue'}]}>
                  <MaterialIcon name={"facebook-box"} size={30} color={theme.highlightTextColor} />
                </TouchableOpacity>
                <TouchableOpacity style={[style.iconContainer, {backgroundColor: 'red', marginRight: 0}]}>
                  <MaterialIcon name={"google-plus"} size={30} color={theme.highlightTextColor} />
                </TouchableOpacity>
              </View>
              <View style={style.secondContainer}>
                <ThemedText styleKey="highlightTextColor" style={style.smallText}>{language.checkAcc}</ThemedText>
                <TouchableOpacity>
                  <ThemedText styleKey="highlightTextColor" style={style.textStyle}>{language.signUp}</ThemedText>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
    );
}

export default Login;

interface Style {
    mainContainer: ViewStyle;
    topContainer: ViewStyle;
    secondContainer: ViewStyle;
    button: ViewStyle;
    leftContainer: ViewStyle;
    backIcon: ViewStyle;
    backContainer: ViewStyle;
    imageStyle: ImageStyle;
    logoImage: ImageStyle;
    logoContainer: ViewStyle;
    rightContainer: ViewStyle;
    iconContainer: ViewStyle;
    extraStyle: ViewStyle;
    textStyle: TextStyle;
    smallText: TextStyle;
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
      marginTop: 30,
      marginBottom: 30
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
      fontSize: 36,
      fontWeight: 'bold',
    },
    logoContainer: {
      marginTop: 20
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
      marginTop: 20
    },
    rightContainer: {
      flex: 1, 
      justifyContent: "flex-end", 
      alignItems: 'flex-end',
      paddingTop: 5,
      paddingRight: 3
    },
    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 50,
      alignItems: "center",
      paddingTop: 10,
      marginRight: 20,
      marginTop: 40
    },
  });  

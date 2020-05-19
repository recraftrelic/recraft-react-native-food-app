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

interface LoginField {
    email?: string;
    phone?: string;
    password?: string;
  }

const isIOS = (): Boolean => Platform.OS == "ios";

const Register: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {

    const backButton = () => {
        history.goBack();
    }  
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();
    const language: AppLanguage = useLanguage();

    const validate = (data: LoginField): ValidationError => {
        const errors = microValidator.validate({
            email: {
                required: {
                    errorMsg: language.signupValidation.email
                },
                email: {
                    errorMsg: language.signupValidation.validEmail
                }
            },
            phone: {
                required: {
                    errorMsg: language.signupValidation.phone
                },
                regex: {
                  pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                  errorMsg: language.signupValidation.validPhone
                }
            },
            password: {
                required: {
                    errorMsg: language.signupValidation.password
                },
                length: {
                    min: 6,
                    max: 12,
                    errorMsg: language.signupValidation.passwordLength
                }
            },
        },data)
        
        return errors
      }
    
      const [email,onChangeEmail] = useState<string>("")
      const [phone,onChangePhone] = useState<string>("")
      const [password,onChangePassword] = useState<string>("")
      const [errors,setErrors] = useState<ValidationError>({})

      const goToHome = () => {
        const errors: ValidationError = validate({email: email,phone: phone,password: password,})
    
        if(!Object.keys(errors).length)
        {
          history.push('/base')
        }
        else {
          setErrors(errors)
        }
      }
    
    return (
        <View style={style.mainContainer}>
          <ImageBackground source={constants.bannerImage} style={style.imageStyle} >
            <TouchableOpacity style={style.backContainer} onPress={backButton}>
              <View style={style.leftContainer}>
                <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
              </View>
            </TouchableOpacity>
            <View style={[style.topContainer, style.logoContainer]}> 
              <Image source={constants.recraftLogo} style={style.logoImage}/>
            </View>
            <ScrollView>
              <View style={style.topContainer}> 
                <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.title]}>{language.register}</ThemedText>
              </View>
              <View style={style.topContainer}> 
                <ThemedText styleKey="highlightTextColor" style={style.textStyle}>{language.registerText}</ThemedText>
              </View>
              <View style={[style.extraStyle]}> 
                <Input placeholder={"Phone"} onChangeText={onChangePhone} value={phone} errors={errors.phone}/>
              </View>
              <View style={[style.extraStyle]}> 
                <Input placeholder={"Email"} onChangeText={onChangeEmail} value={email} errors={errors.email}/>
              </View>
              <View style={[style.extraStyle]}> 
                <Input placeholder={"Password"} onChangeText={onChangePassword} value={password} errors={errors.password} secureTextEntry={true}/>
              </View>
              <View style={[style.topContainer, style.nexStyle]}>
                <RoundButton buttonStyle={style.button} label={language.register} buttonColor={theme.highlightTextColor} labelStyle={theme.highlightTextColor} onPress={goToHome}/>
              </View>
              <View style={[style.topContainer, style.nexStyle]}>
                <View style={style.leftContainer}>
                  <View style={[style.hairline, {backgroundColor: theme.lightBottomColor}]} />
                </View>
                <View style={style.centerContainer}>
                  <ThemedText styleKey="highlightTextColor" style={style.smallText}>{language.registerWith}</ThemedText>
                </View>
                <View style={[style.rightContainer, style.secondContainer]}>
                  <View style={[style.hairline, {backgroundColor: theme.lightBottomColor}]} />
                </View>
              </View>
              <View style={style.topContainer}>
                <TouchableOpacity style={[style.iconContainer, {backgroundColor: theme.facebookColor}]}>
                  <MaterialIcon name={"facebook-box"} size={30} color={theme.highlightTextColor} />
                </TouchableOpacity>
                <TouchableOpacity style={[style.iconContainer, {backgroundColor: theme.googleColor, marginRight: 0}]}>
                  <MaterialIcon name={"google-plus"} size={30} color={theme.highlightTextColor} />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
    );
}

export default Register;

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
    centerContainer: ViewStyle;
    rightContainer: ViewStyle;
    iconContainer: ViewStyle;
    extraStyle: ViewStyle;
    hairline: ViewStyle;
    nexStyle: ViewStyle;
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
      flex: 0, 
      paddingTop: 0
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
      marginTop: 20,
      justifyContent: 'flex-start',
      paddingLeft: 50,
      paddingRight: 50
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
      marginTop: 40,
      marginBottom: 40
    },
    nexStyle: {
      paddingTop: 30,
    },
    centerContainer: {
      alignItems: "center",
      flex: 0,
      marginLeft: 10,
      marginRight: 10
    },
    hairline: {
      height: 1,
      width: 50
    },
  });  

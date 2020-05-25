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

interface ChangeField {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
}

const isIOS = (): Boolean => Platform.OS == "ios";

const ChangePassword: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {

    const backButton = () => {
        history.goBack();
    }  
    const constants: AppConstants = useConstants();
    const theme: AppTheme = useTheme();
    const language: AppLanguage = useLanguage();

    const validate = (data: ChangeField): ValidationError => {
        const errors = microValidator.validate({
            currentPassword: {
                required: {
                    errorMsg: language.loginValidation.password
                },
                length: {
                    min: 6,
                    max: 12,
                    errorMsg: language.loginValidation.passwordLength
                }
            },
            newPassword: {
                required: {
                    errorMsg: language.loginValidation.password
                },
                length: {
                    min: 6,
                    max: 12,
                    errorMsg: language.loginValidation.passwordLength
                }
            },
            confirmPassword: {
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
    
      const [currentPassword,onChangeCurrentPassword] = useState<string>("")
      const [newPassword,onChangeNewPassword] = useState<string>("")
      const [confirmPassword,onChangeConfirmPassword] = useState<string>("")
      const [errors,setErrors] = useState<ValidationError>({})

      const goToHome = () => {
        const errors: ValidationError = validate({currentPassword: currentPassword, newPassword: newPassword, confirmPassword: confirmPassword})
    
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
            <View style={[style.topContainer, style.secondContainer]}> 
              <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.title]}>{language.change}</ThemedText>
            </View>
            <View style={[style.extraStyle]}> 
              <Input placeholder={"Current Password"} onChangeText={onChangeCurrentPassword} value={currentPassword} errors={errors.currentPassword} secureTextEntry={true}/>
            </View>
            <View style={[style.extraStyle]}> 
              <Input placeholder={"New Password"} onChangeText={onChangeNewPassword} value={newPassword} errors={errors.newPassword} secureTextEntry={true}/>
            </View>
            <View style={[style.extraStyle]}> 
              <Input placeholder={"Confirm Password"} onChangeText={onChangeConfirmPassword} value={confirmPassword} errors={errors.confirmPassword} secureTextEntry={true}/>
            </View>
            <View style={[style.topContainer, style.nexStyle]}>
              <RoundButton buttonStyle={style.button} label={language.change} buttonColor={theme.highlightTextColor} labelStyle={theme.highlightTextColor} onPress={goToHome}/>
            </View>
          </ImageBackground>
        </View>
    );
}

export default ChangePassword;

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
      marginTop: 120
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
      marginBottom: 50
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
      marginTop: 40
    },
    nexStyle: {
      paddingTop: 70,
    }
  });  

import { ThemeKey } from "./themes";
import { LanguageKey } from "./languages";

export interface AppTheme {
    backgroundColor: string,
    highlightColor: string,
    highlightTextColor: string,
    textColor: string,
    lightTextColor: string,
    lightBottomColor: string,
    alternateMessageBackgroundColor: string,
    appColor: string,
    navColor: string,
    errorColor: string,
    facebookColor: string,
    googleColor: string,
    mainColor: string,
}

export interface AppConstants {
    selectedTheme: ThemeKey,
    selectedLanguage: LanguageKey,
    title: string,
    recraftLogo: any,
    bannerImage: any,
    verifyLogo: any,
    locationIcon: any,
    chineseFood: any,
    indianFood: any,
    frenchFood: any,
}

export interface ApplicationConfig {
    constants?: AppConstants
}

// @ts-ignore
const Logo = require("../images/logo.png");
const banner = require("../images/main-bg.jpg");
const verify = require("../images/office.png");
const location = require("../images/location.png");
const chineseFood = require("../images/dish-1.png");
const indianFood = require("../images/dish-2.png");
const frenchFood = require("../images/dish-3.png");

export const defaultConfig: ApplicationConfig = {
    constants: {
      selectedTheme: ThemeKey.light,
      selectedLanguage: LanguageKey.en,
      title: "Recraft Food",
      recraftLogo: Logo,
      bannerImage: banner,
      verifyLogo: verify,
      locationIcon: location,
      chineseFood: chineseFood,
      indianFood: indianFood,
      frenchFood: frenchFood,
    }
}

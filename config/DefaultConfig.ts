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
    offer: any,
    discount: any,
}

export interface ApplicationConfig {
    constants?: AppConstants
}

// @ts-ignore
const Logo = require("../images/logo.png");
const banner = require("../images/main-bg.jpg");
const verify = require("../images/office.png");
const location = require("../images/location.png");
const offer = require("../images/offer.png");
const discount = require("../images/discount.jpg");

export const defaultConfig: ApplicationConfig = {
    constants: {
      selectedTheme: ThemeKey.light,
      selectedLanguage: LanguageKey.en,
      title: "Recraft Food",
      recraftLogo: Logo,
      bannerImage: banner,
      verifyLogo: verify,
      locationIcon: location,
      offer: offer,
      discount: discount,
    }
}

import { en } from './languages/en';
import { fr } from './languages/fr';
import { sp } from './languages/sp';
import { gr } from './languages/gr';
import { ch } from './languages/ch';

export enum LanguageKey {
  en = "en",
  fr = "fr",
  sp = "sp",
  gr = "gr",
  ch = "ch"
}

export interface AppLanguage {
  firstButton: string,
  welcome: string,
  signIn: string,
  register: string,
  signUp: string,
  signText: string,
  registerText: string,
  remember: string,
  forgetText: string,
  forget: string,
  forgePasswordText: string,
  signWith: string,
  registerWith: string,
  checkAcc: string,
  verify: string,
  verifyText: string,
  resend: string,
  verifyCode: string,
  change: string,
  location: string,
  locationTitle: string,
  locationContent: string,
  locationText: string,
  profile: string,
  searchFood: string,
  foodType: string,
  seeAll: string,
  chineseText: string,
  indianText: string,
  frenchText: string,
  AmericanText: string,
  exploreText: string,
  upTo: string,
  offDiscount: string,
  order: string,
  cafe: string,
  cafeText: string,
  openText: string,
  loginValidation: loginValidation,
  signupValidation: signupValidation,
}

export interface loginValidation {
  username: string,
  password: string,
  passwordLength: string,
}

export interface signupValidation {
  email: string,
  validEmail: string,
  phone: string,
  validPhone: string,
  password: string,
  passwordLength: string,
}

export interface LanguagesMap {
  [key: string]: AppLanguage;
}

export const languages: LanguagesMap = {
  [LanguageKey.en]: en,
  [LanguageKey.fr]: fr,
  [LanguageKey.sp]: sp,
  [LanguageKey.gr]: gr,
  [LanguageKey.ch]: ch,
}

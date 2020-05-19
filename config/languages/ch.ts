import { AppLanguage } from '../languages'

export const ch: AppLanguage = {
  firstButton: "拿食物",
  welcome: "总是吃健康的食物",
  signIn: "登入",
  register: "寄存器",
  signUp: "注册",
  signText: "登录以继续",
  registerText: "注册以继续",
  remember: "记得",
  forgetText: "忘记密码了吗？",
  forget: "忘记密码d",
  forgePasswordText: "输入您的电子邮件或电话",
  signWith: "登陆使用",
  registerWith: "或注册",
  checkAcc: "还没有帐号？",
  change: "更改密码",
  loginValidation : {
    username: `电子邮件/电话为必填项`,
    password: `密码是必需的`,
    passwordLength: '密码长度在6到12之间',
  },
  signupValidation : {
    email: `Email is required`,
    validEmail: 'Please enter a valid email',
    phone: `Phone No. is required`,
    validPhone: 'Please enter a valid phone no.',
    password: `Password is required`,
    passwordLength: 'Password length between 6 and 12',
  },
}

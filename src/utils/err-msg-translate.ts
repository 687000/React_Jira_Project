export const TranslateErrMsg = (msg: string) => {
  switch (msg) {
    case "用户名或密码不正确":
      return "Invalid username or password";
    case "请求失败，请检查 jira-dev-tool 的设置":
      return "Request failed. Please check setting in jira-dev-tool";
    case msg.match(/^用户名.*已存在$/)?.input:
      return "The username already exists";
    default:
      break;
  }
  return msg;
};

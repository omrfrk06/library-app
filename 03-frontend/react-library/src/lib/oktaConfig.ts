export const oktaConfig = {
  clientId: "0oaj21ldk6en29QlJ5d7",
  issuer: "https://dev-95814483.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openId", "profile", "email"],
  pcke: true,
  disableHttpsCheck: true,
};

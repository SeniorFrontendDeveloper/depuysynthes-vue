import  {  Auth } from '@aws-amplify/auth';
import {API} from "@aws-amplify/api"
import { Amplify } from '@aws-amplify/core';

const API_NAME = 'MyAPIGatewayAPI';

const AWS_EXPORTS = {
  // OPTIONAL - if your API requires authentication
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: import.meta.env.VITE_IDENTITY_POOL_ID || 'devDepuysynthesInfrastructureStackdevWebIdentityPool8857074B',
    // REQUIRED - Amazon Cognito Region
    region: import.meta.env.VITE_COGNITO_REGION || 'us-east-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: import.meta.env.VITE_USER_POOL_ID || 'us-east-1_2MUndutM8',
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID || '1eanbfd9138vg9resr1c5jvju',
    oauth: {
      // domain: 'your_cognito_domain',
      scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: 'http://localhost:3000/',
      redirectSignOut: 'http://localhost:3000/',
      responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
    }
  },
  API: {
    endpoints: [
      {
        name: API_NAME,
        endpoint: import.meta.env.VITE_API_ENDPOINT || "/api",
      }
    ]
  }
};

Amplify.configure(AWS_EXPORTS);

// REST
const get = async(path, params={}, apiName= API_NAME)=> await API.get(apiName, path, {
  //   response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  queryStringParameters: params,
});

const post = async (path, payload, apiName= API_NAME)=> await API.get(apiName, path, {
  body: payload,
});

// AUTH
const signin =  async (username, password) => await Auth.signIn(username, password);
const signout = async () =>  await Auth.signOut();
const completeNewPassword = async(user, newPassowrd) => await Auth.completeNewPassword(user, newPassowrd)
// Send confirmation code to user's email
const forgotPassword = async(username) => await Auth.forgotPassword(username);

// Collect confirmation code and new password, then
const forgotPasswordSubmit = async(username, code, new_password) => await Auth.forgotPasswordSubmit(username, code, new_password);

const currentAuthenticatedUser = async() => await Auth.currentAuthenticatedUser()

export {
  // rest
  get,
  post,
  // auth
  signin,
  signout,
  completeNewPassword,
  forgotPassword,
  forgotPasswordSubmit,
  currentAuthenticatedUser,
  Auth
};

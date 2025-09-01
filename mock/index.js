import { getDatabaseConfig } from './database';
import { postPhoneCodeConfig } from './postPhoneCode';
import { getProfileConfig } from './getProfileConfig';
import { getRefreshTokenConfig } from './getRefreshTokenConfig';
import { postSignInConfig } from './postSignInConfig';
import { postSignUpConfig } from './postSignUpConfig';
import { getLogoutConfig } from './getLogoutConfig';

export const authConfigs = [
  getDatabaseConfig,
  postSignUpConfig,
  postSignInConfig,
  getProfileConfig,
  getRefreshTokenConfig,
  postPhoneCodeConfig,
  getLogoutConfig
  // getConfirmPhoneCode,
];

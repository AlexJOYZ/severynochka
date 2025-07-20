import { getDatabaseConfig } from './database';
import { getProfileConfig } from './getProfileConfig';
import { getRefreshTokenConfig } from './getRefreshTokenConfig';
import { postSignInConfig } from './postSignInConfig';
import { postSignUpConfig } from './postSignUpConfig';

export const authConfigs = [
  getDatabaseConfig,
  postSignUpConfig,
  postSignInConfig,
  getProfileConfig,
  getRefreshTokenConfig,
];

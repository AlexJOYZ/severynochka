import { getDatabaseConfig } from './database';
import { postPhoneCodeConfig } from './postPhoneCode';
import { getProfileConfig } from './getProfileConfig';
import { getRefreshTokenConfig } from './getRefreshTokenConfig';
import { postSignInConfig } from './postSignInConfig';
import { postSignUpConfig } from './postSignUpConfig';
import { getLogoutConfig } from './getLogoutConfig';
import { patchResetPassword } from './patchResetPassword';
import { postOrderDetailsConfig } from './postOrderDetailsConfig';
import { getOrderDetailsByUserId } from './getOrderDetailsByUserId';
import { patchOrderDeliveryTimeConfig } from './patchOrderDeliveryTimeConfig';

export const authConfigs = [
  getDatabaseConfig,
  postSignUpConfig,
  postSignInConfig,
  getProfileConfig,
  getRefreshTokenConfig,
  postPhoneCodeConfig,
  getLogoutConfig,
  patchResetPassword,
  postOrderDetailsConfig,
  getOrderDetailsByUserId,
  patchOrderDeliveryTimeConfig,
];

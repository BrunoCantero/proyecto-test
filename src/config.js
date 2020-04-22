import {
  STAGING_API_URL,
  PRODUCTION_API_URL,
  SENTRY_DSN,
  REDUX_LOGGER_ACTIVATED,
  API_CONNECTOR_LOGS_ACTIVATED,
} from 'react-native-dotenv';

const isProduction = false;

console.table(
  [
    {
      id: 'IS_PRODUCTION_MODE',
      value: isProduction,
    },
    {
      id: 'REDUX_LOGGER_ACTIVATED',
      value: REDUX_LOGGER_ACTIVATED,
    },
    {
      id: 'API_CONNECTOR_LOGS_ACTIVATED',
      value: API_CONNECTOR_LOGS_ACTIVATED,
    },
  ].reduce((acc, {id, ...x}) => {
    acc[id] = x;
    return acc;
  }, {}), // this remove the first column of indexs
);
// Config is here
const Config = {
  isDev: __DEV__,
  API_URL: isProduction ? PRODUCTION_API_URL : STAGING_API_URL,
  SENTRY_DSN,
  REDUX_LOGGER_ACTIVATED: REDUX_LOGGER_ACTIVATED === 'true',
  API_CONNECTOR_LOGS_ACTIVATED: API_CONNECTOR_LOGS_ACTIVATED === 'true',
};

export default Config;

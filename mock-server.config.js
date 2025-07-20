import { authConfigs } from './mock';

/** @type {import('mock-config-server').FlatMockServerConfig} */
const flatMockServerConfig = [
  {
    baseUrl: '/api',
    interceptors: {
      request: ({ setDelay }) => setDelay(1000),
    },
    cors: {
      origin: 'http://localhost:5173',
      methods: ['PATCH', 'POST', 'PUT', 'DELETE', 'GET'],
      allowedHeaders: ['content-type'],
      credentials: true,
    },
  },
  {
    name: 'severynochka/auth-flow',
    configs: authConfigs,
  },
];

export default flatMockServerConfig;

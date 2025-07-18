import type { FlatMockServerConfig } from 'mock-config-server';
import { POSTS, USERS } from './mock/db';

export default [
  {
    baseUrl: '/api',
    interceptors: {
      request: async ({ setDelay }) => await setDelay(1000)
    }
  },
  {
    configs: [
      {
        path: '/login',
        method: 'get',
        routes: [
          {
            data: [],
            interceptors: {
              response: (_) => {
                return {
                  profile: null
                };
              }
            }
          }
        ]
      },
      {
        path: '/posts',
        method: 'get',
        routes: [
          {
            data: [],
            interceptors: {
              response: (_) => USERS
            }
          }
        ]
      }
    ]
  }
] as FlatMockServerConfig;

import type { FlatMockServerConfig } from 'mock-config-server';

import { USERS } from './mock/db';

export default [
  {
    baseUrl: '/api',
    interceptors: {
      request: async ({ setDelay }) => {
        await setDelay(1000);
      }
    }
  },
  {
    configs: [
      {
        path: '/login',
        method: 'post',
        routes: [
          {
            data: [],
            interceptors: {
              response: (_, { request, setStatusCode, setCookie }) => {
                const login = request.body.login;

                const user = USERS.find((user) => user.username === login);

                console.log(user);

                if (!user) return setStatusCode(401);

                setCookie('login', login);

                return user;
              }
            }
          }
        ]
      },
      {
        path: '/profile',
        method: 'get',
        routes: [
          {
            data: [],
            interceptors: {
              response: (_, { request, setStatusCode }) => {
                const login = request.cookies.login;

                const user = USERS.find((user) => user.username === login);

                if (!user) return setStatusCode(401);

                return user;
              }
            }
          }
        ]
      }
    ]
  }
] as FlatMockServerConfig;

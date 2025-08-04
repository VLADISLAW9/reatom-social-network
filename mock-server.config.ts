import type { FlatMockServerConfig } from 'mock-config-server';

import { POSTS, USERS } from './mock/db';

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

                if (!user) return setStatusCode(401);

                setCookie('login', login);

                return user;
              }
            }
          }
        ]
      },
      {
        path: '/logout',
        method: 'post',
        routes: [
          {
            data: undefined,
            interceptors: {
              response: (_, { clearCookie }) => clearCookie('login')
            }
          }
        ]
      },
      {
        path: '/post/:id',
        method: 'delete',
        routes: [
          {
            data: undefined,
            interceptors: {
              response: (_, { request }) => {
                const postIndex = POSTS.findIndex((post) => post.id === Number(request.params.id));

                POSTS.splice(postIndex, 1);
              }
            }
          }
        ]
      },
      {
        path: '/post/:id',
        method: 'patch',
        routes: [
          {
            data: [],
            interceptors: {
              response: (_, { request }) => {
                const updatedPost = {
                  ...POSTS.find((post) => post.id === +request.params.id),
                  ...request.body
                };

                POSTS.map((post) => (post.id === updatedPost.id ? updatedPost : post));

                return updatedPost;
              }
            }
          }
        ]
      },
      {
        path: '/post',
        method: 'post',
        routes: [
          {
            data: [],
            interceptors: {
              response: (_, { request, setStatusCode }) => {
                const login = request.cookies.login;
                const creator = USERS.find((user) => user.username === login);

                if (!creator) return setStatusCode(500);

                const newPost = {
                  title: request.body.title,
                  description: request.body.description,
                  id: POSTS.length + 1,
                  creator
                };

                POSTS.unshift(newPost);

                return newPost;
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
      },
      {
        path: '/posts',
        method: 'get',
        routes: [
          {
            data: [],
            interceptors: {
              response: () => {
                return {
                  posts: POSTS,
                  hasMore: true
                };
              }
            }
          }
        ]
      }
    ]
  }
] as FlatMockServerConfig;

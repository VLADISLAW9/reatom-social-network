import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';
import { profile } from './model.ts';
import { router } from './router.ts';

import fetches from '@siberiacancode/fetches';

import './index.css';

const init = async () => {
  try {
    const profileResponse = await fetches.get<User>('/api/profile');
    profile.set(profileResponse.data);

    if (!router.home.exact()) router.home.go();
  } catch {
    router.login.go();
  }

  createRoot(document.getElementById('root')!).render(<App />);
};

init();

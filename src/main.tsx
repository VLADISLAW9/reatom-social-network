import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

import './index.css';

const init = () => {
  createRoot(document.getElementById('root')!).render(<App />);
};

init();

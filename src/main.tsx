import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Theme from './Theme.tsx'
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Theme />
    </Provider>
  </StrictMode>,
)

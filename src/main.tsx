import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './apis/queryClient.ts';
import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />

    <App />
  </QueryClientProvider>,
);

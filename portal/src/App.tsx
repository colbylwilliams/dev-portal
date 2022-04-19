import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { AuthView } from './components/AuthView';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RootView } from './components/RootView';

// const

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 1
    }
  }
});

// const App = () => {
// const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

// const theme = React.useMemo(
//   () =>
//     createTheme({
//       palette: {
//         mode: prefersDarkMode ? 'dark' : 'light'
//       },
//     }),
//   [prefersDarkMode],
// );

export const App: React.FC = () => (
  // <ThemeProvider theme={theme}>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='/orgs' element={<Navigate to='/' replace />} />
        {/* <Route path='/orgs/:orgId/projects' element={<Navigate replace to='/orgs/:orgId' />} /> */}
        <Route path='/orgs/:orgId/settings/overview' element={<Navigate replace to='/orgs/:orgId/settings' />} />
        <Route path='/orgs/:orgId/projects/:projectId/overview' element={<Navigate replace to='/orgs/:orgId/projects/:projectId' />} />
        <Route path='/orgs/:orgId/projects/:projectId/settings/overview' element={<Navigate replace to='/orgs/:orgId/projects/:projectId/settings' />} />
        <Route path='/orgs/:orgId/projects/:projectId/components/:itemId/tasks' element={<Navigate replace to='/orgs/:orgId/projects/:projectId/components/:itemId' />} />
        <Route path='/oauth/callback' element={<AuthView />} />
        <Route path='/*' element={<RootView />} />
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
  </QueryClientProvider>
  // </ThemeProvider>
);
// }

export default App;

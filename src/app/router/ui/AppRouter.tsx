import { FC, useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '../lib/routes';

export const AppRouter: FC = () => {

  const router = useMemo(() => {
    return createBrowserRouter(routes);
  }, []);

  return (
    <RouterProvider router={router} />
  );
};
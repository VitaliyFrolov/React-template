import { RouteObject } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  }
];
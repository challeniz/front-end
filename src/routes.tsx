import ListPage from './pages/list_page';
import NewPage from './pages/new_page';
import MainPage from './pages/main_page';
import LoginPage from './pages/login/login_page';
import JoinPage from './pages/join/join_page';
import MyPage from './pages/my_page';
import AuthPage from './pages/auth_page';
import DetailPage from './pages/detail_page';
import ApplicationPage from './pages/app_page';
import MyPrivacy from './pages/ my_privacy';


export const ROUTE = {
  MAIN: {
    path: '/',
    link: '/',
    element: MainPage,
  },
  LOGIN: {
    path: '/login',
    link: '/login',
    element: LoginPage,
  },
  JOINPAGE: {
    path: '/joinpage',
    link: '/joinpage',
    element: JoinPage,
  },
  MYPAGE: {
    path: '/mypage',
    link: '/mypage',
    element: MyPage,
  },
  LISTPAGE: {
    path: '/listpage',
    link: '/listpage',
    element: ListPage,
  },
  DETAILPAGE: {
    path: '/detailpage',
    link: '/detailpage',
    element: DetailPage,
  },
  APPPAGE: {
    path: '/applicationpage',
    link: '/applicationpage',
    element: ApplicationPage,
  },
  NEWPAGE: {
    path: '/newpage',
    link: '/newpage',
    element: NewPage,
  },
  AUTHPAGE: {
    path: '/authpage',
    link: '/authpage',
    element: AuthPage,
  },
  MYPRIVACY: {
    path: '/myprivacy',
    link: '/myprivacy',
    element: MyPrivacy,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);

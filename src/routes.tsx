import ListPage from './pages/list_page/list_page';
import NewPage from './pages/new_page/new_page';
import MainPage from './pages/main_page/main_page';
import LoginPage from './pages/login_page/login_page';
import JoinPage from './pages/join_page/join_page';
import MyPage from './pages/my_page/my_page';
import AuthPage from './pages/auth_page/auth_page';
import DetailPage from './pages/detail_page/detail_page';
import ApplicationPage from './pages/app_page/app_page';
import MyPrivacy from './pages/my_privacy/ my_privacy';
import EditPage from './pages/edit_page/edit_page';

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
    path: '/challenges',
    link: '/challenges',
    element: ListPage,
  },
  DETAILPAGE: {
    path: '/detail',
    link: '/detail',
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
  EDITPAGE: {
    path: '/editpage',
    link: '/editpage',
    element: EditPage,
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

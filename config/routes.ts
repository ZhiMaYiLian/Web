export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        access: 'sub-page',
        // routes:[
        //   {
        //     name: 'admin.sub-page.admin.subs-page.list.customer.Table',
        //     icon: 'UserOutlined',
        //     path: '/admin/sub-page/customer',
        //     component: './customer/index',
        //   },
        // ],
      },
      // {
      //   component: './404',
      // },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: 'list.customer.Table',
    icon: 'UserOutlined',
    path: '/customer',
    component: './customer/index',
  },
  {
    component: './404',
  },
];

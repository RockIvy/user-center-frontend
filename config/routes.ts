export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './user/Login' },
      { name: '注册', path: '/user/register', component: './user/Register' },
      { component: './404' },
    ],
  },
  { name: '欢迎', path: '/welcome', icon: 'smile', component: './Welcome' },
  { path: '/portal', name: '传送门', icon: 'Fire', component: './Portal/' },
  // {
  //   path: '/square',
  //   name: '校园广场',
  //   icon: 'smile',
  //   component: './Square/',
  // },
  {
    name: '管理页',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin', //公共组件
    routes: [
      {
        name: '用户管理',
        path: '/admin/user-manage',
        icon: 'smile',
        component: './Admin/UserManage',
      },
      {
        path: '/admin/post-mange',
        name: '帖子管理',
        icon: 'smile',
        component: './Admin/PostManage',
      },
      { component: './404' },
    ],
  },
  //{name: '查询表格', icon: 'table', path: '/list', component: './TableList'},
  {
    name: '个人设置',
    icon: 'MoonOutlined',
    path: '/accountsettings',
    component: './AccountSettings',
  },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];

export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name : '登录', path: '/user/login', component: './user/Login' },
      { name : '注册',path: '/user/register', component: './user/Register' },
      { component: './404' }],
  },
  { name : '欢迎',path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    name : '管理页',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',//公共组件
    routes: [
      {name : '用户管理', path: '/admin/user-manage', icon: 'smile', component: './Admin/UserManage' },
      { component: './404' },
    ],
  },
  {name : '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];

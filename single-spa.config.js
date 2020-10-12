import * as singleSpa from 'single-spa'
/*
*@description: 一个 single-spa-config配置, 这是html页面和向Single SPA注册应用程序的JavaScript。每个应用程序都注册了三件东西
* A name
* A function (加载应用程序的代码)
* A function (确定应用程序何时处于活动状态/非活动状态)
*/

singleSpa.registerApplication(
  'myapp',
  () => import('./src/myapp/myapp.app.js'),
  () => true
);

singleSpa.registerApplication(
  'vue', 
  () => import('./src/vue/vue.app.js'),
  () => location.pathname === "/vue" ? true : false
);

singleSpa.registerApplication(
  'react',
  () => import('./src/react/react.app.js'),
  () => location.pathname === "/react"  ? true : false
);




singleSpa.start();
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    meta:{
      requireAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)){
    if(localStorage.getItem('token') === null){
      next({
        path:'/'
      });
    }else{
      next();
    }
  }else{
    next();
  }
});

export default router

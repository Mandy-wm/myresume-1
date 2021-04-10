
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component:  () =>
    import(/* webpackChunkName: "layout" */ "../layout/BasicLayout.vue"),
    children: [
      {
        path: "/home/about",
        name: "about",
        component: () =>
       import(/* webpackChunkName: "home" */ "../views/home/About.vue"),
       },
       {
         path: "/home/works",
         name: "works",
        component: () =>
        import(/* webpackChunkName: "home" */ "../views/home/Works.vue"),
      }

       
        ]
      }
   
    
  
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

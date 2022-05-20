// 引入Vue
import Vue from 'vue';
// 引入vueRouter
import VueRouter from 'vue-router';
import BaseRoutes from './routes';
import { addRoutes } from '../utils/index';
// 使用VueRouter插件
Vue.use(VueRouter);

const routes = [];

addRoutes(BaseRoutes, routes, 'push');

export default new VueRouter({
    routes,
});
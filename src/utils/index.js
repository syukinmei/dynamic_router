
/**
 * 将路由添加到路由表中
 * @param {*} routes
 * @param {*} RoutingTable 
 */
export const addRoutes = function (routes, RoutingTable, action) {
    routes.forEach(({ path, name, title, component }) => {
        RoutingTable[action]({
            path,
            name,
            meta: { title },
            component: () => import(/*webpackChunName:'about'*/`../page/${component}`),
        })
    })
}
module.exports = {
    router: {
        linkActiveClass: 'active',
        // middleware: 'authenticated',
        extendRoutes(routes, resolve) {
            routes.push(...[
                {
                    name: 'register',
                    path: '/register',
                    component: resolve(__dirname, 'pages/login/')
                },
                {
                    name: 'edit-article',
                    path: '/edit-article',
                    component: resolve(__dirname, 'pages/create-article/')
                },
            ])
        }
    },
    plugins: ['~/plugins/request', '~/plugins/dateFormat'],
    server: {
        host: '106.75.222.146',
        port: 3000
    }
}
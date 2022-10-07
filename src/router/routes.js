const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Login.vue')
            },
            {
                path: 'login',
                component: () =>
                    import ('pages/Login.vue')
            },
            {
                path: 'register',
                component: () =>
                    import ('pages/Register.vue')
            },
            {
                path: 'library',
                component: () =>
                    import ('pages/Library.vue')
            },
            {
              path: 'carousel',
              component: () =>
                  import ('pages/IndexPagecopy.vue')
          }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/ErrorNotFound.vue')
    }
]

export default routes

export function configRouter (router) {
  // normal routes
  router.map({
    '/users': {
      component: require('./components/users/Users.vue')
    },
    '/users/create': {
      component: require('./components/users/NewUser.vue')
    },
    '/users/:id': {
      component: require('./components/users/User.vue'),
      subRoutes: {
        'edit': {
          component: require('./components/users/User.vue')
        }
      }
    },
    '/actions': {
      component: require('./components/actions/Actions.vue')
    },
    '/actions/create': {
      component: require('./components/actions/NewAction.vue')
    },
    '/actions/:id': {
      component: require('./components/actions/Action.vue'),
      subRoutes: {
        'edit': {
          component: require('./components/actions/Action.vue')
        }
      }
    },
    '/resources': {
      component: require('./components/resources/Resources.vue')
    },
    '/resources/create': {
      component: require('./components/resources/NewResource.vue')
    },
    '/resources/:id': {
      component: require('./components/resources/Resource.vue'),
      subRoutes: {
        'edit': {
          component: require('./components/resources/Resource.vue')
        }
      }
    }
  })
}

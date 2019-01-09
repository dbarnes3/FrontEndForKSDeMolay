import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedSwitch } from 'reactRouterConnected'
import Loadable from 'react-loadable'
import Page from 'components/LayoutComponents/Page'
import NotFoundPage from 'pages/DefaultPages/NotFoundPage'
import HomePage from 'pages/DefaultPages/HomePage'

const loadable = loader =>
  Loadable({
    loader,
    delay: false,
    loading: () => null,
  })

const loadableRoutes = {
  // Dashboards
    '/home': {
        component: loadable(() => import('pages/Home/')),
    },
  '/about': {
    component: loadable(() => import('pages/About/')),
  },
    '/calendar': {
        component: loadable(() => import('pages/Calendar/')),
    },
    '/forms': {
        component: loadable(() => import('pages/UsefulForms/')),
    },
    '/leaders/stateOfficers': {
        component: loadable(() => import('pages/leaders/stateOfficers/')),
    },
    '/leaders/stateStaff': {
        component: loadable(() => import('pages/leaders/stateStaff/')),
    },
    '/leaders/pastSweethearts': {
        component: loadable(() => import('pages/leaders/pastSweethearts/')),
    },
    '/leaders/psmc': {
        component: loadable(() => import('pages/leaders/psmc/')),
    },
    '/leaders/pastEos': {
        component: loadable(() => import('pages/leaders/pastEos/')),
    },
    '/userPortal': {
        component: loadable(() => import('pages/UserPortal/')),
    },
    '/contactUs': {
        component: loadable(() => import('pages/ContactUs/')),
    },
}

class Routes extends React.Component {
  timeoutId = null

  componentDidMount() {
    this.timeoutId = setTimeout(
      () => Object.keys(loadableRoutes).forEach(path => loadableRoutes[path].component.preload()),
      5000, // load after 5 sec
    )
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    return (
      <ConnectedSwitch>
        <Route exact path="/" component={HomePage} />
        {Object.keys(loadableRoutes).map(path => {
          const { exact, ...props } = loadableRoutes[path]
          props.exact = exact === void 0 || exact || false // set true as default
          return <Route key={path} path={path} {...props} />
        })}
        <Route
          render={() => (
            <Page>
              <NotFoundPage />
            </Page>
          )}
        />
      </ConnectedSwitch>
    )
  }
}

export { loadableRoutes }
export default Routes

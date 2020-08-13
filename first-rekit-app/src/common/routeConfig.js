import { IbCurveMainPage } from '../features/ib-curve';
import _ from 'lodash';

const routes = [{
    path: '/',
    component: IbCurveMainPage
}];

// Handle isIndex property of route config:
//  Dupicate it and put it as the first route rule.
function handleIndexRoute(route) {
    if (!route.childRoutes || !route.childRoutes.length) {
        return;
    }

    const indexRoute = _.find(route.childRoutes, (child => child.isIndex));
    if (indexRoute) {
        const first = { ...indexRoute };
        first.path = '';
        first.exact = true;
        first.autoIndexRoute = true; // mark it so that the simple nav won't show it.
        route.childRoutes.unshift(first);
    }
    route.childRoutes.forEach(handleIndexRoute);
}

routes.forEach(handleIndexRoute);
export default routes;

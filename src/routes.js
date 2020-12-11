import React,{lazy} from "react";
import {Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";

const DashboardPage = lazy(() => import("./view/DashboardPage/DashboardPage"));
const BreakfastMenuComponent = lazy(() => import("./components/BreakfastMenuComponent/BreakfastMenuComponent"));
const ManageMenuComponent = lazy(() => import("./components/ManageMenuComponent/ManageMenuComponent"));
const ManageCategoriesComponent = lazy(() => import("./components/ManageCategoriesComponent/ManageCategoriesComponent"));
const ManageSubCategoriesComponent = lazy(() => import("./components/ManageSubCategoriesComponent/ManageSubCategoriesComponent"));
const AllDishesComponent = lazy(() => import("./components/AllDishesComponent/AllDishesComponent"));
const ManageEasyAddDishComp = lazy(() => import("./components/ManageEasyAddDishComp/ManageEasyAddDishComp"));

// const Verify = lazy(() => import("./view/Signup/verify"));

export const routesCode = [
    { path: "/", exact: true, component:DashboardPage },
    { path: "/breakfast_menu", exact: true, component: BreakfastMenuComponent },
    { path: "/manage_menu", exact: true, component: ManageMenuComponent },
    { path: "/manage_categories", exact: true, component: ManageCategoriesComponent },
    { path: "/manage_subcategories", exact: true, component: ManageSubCategoriesComponent },
    { path: "/all_dishes", exact: true, component: AllDishesComponent },
    { path: "/manage_dishes", exact: true, component: ManageEasyAddDishComp },

    // { path: "/verify/:token", exact: true, component: Verify }
    // { path: "*", component: 404Page },
];

class Routes extends React.PureComponent {
    render() {
        return (
            <Layout>
                {routesCode.map((route, i) =>
                    <Route {...route} key={i} />)
                }
            </Layout>
        );
    }
}

export default Routes;

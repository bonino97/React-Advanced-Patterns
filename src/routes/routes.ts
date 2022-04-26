import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
}

// const Lazy1 = lazy(
//   () => import(/*webpackChunkName: "LazyPage1" */ "../lazyload/pages/LazyPage1")
// );
// const Lazy2 = lazy(
//   () => import(/*webpackChunkName: "LazyPage2" */ "../lazyload/pages/LazyPage2")
// );
// const Lazy3 = lazy(
//   () => import(/*webpackChunkName: "LazyPage3" */ "../lazyload/pages/LazyPage3")
// );

const LazyLayout = lazy(
  () =>
    import(/*webpackChunkName: "LazyLayout" */ "../lazyload/layout/LazyLayout")
);
const ShoppingPage = lazy(
  () =>
    import(
      /*webpackChunkName: "ShoppingPage" */ "../patterns/pages/ShoppingPage"
    )
);

export const routes: Route[] = [
  {
    to: "/shopping/",
    path: "/shopping/*",
    name: "Shopping",
    Component: ShoppingPage,
  },
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    name: "Layout",
    Component: LazyLayout,
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    name: "NoLazy",
    Component: NoLazy,
  },
];

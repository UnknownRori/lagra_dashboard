import Login from "@/pages/Login.svelte";
import Dashboard from "@/pages/Dashboard.svelte";
import Transaction from "@/pages/Transaction.svelte";
import LayoutDashboard from "@/template/Dashboard.svelte";
import NotFound from "@/pages/not-found.svelte";
import { autoLogin, LoginCredentials } from "./store/LoginCredentials.svelte";

function verifyLoggedIn() {
  return LoginCredentials.user.token != '';
}

const routes = [
  {
    name: "login",
    component: Login,
  },
  {
    name: "dashboard",
    component: Dashboard,
    layout: LayoutDashboard,
    onlyIf: {
      guard: verifyLoggedIn,
      redirect: "/login"
    },
  },

  {
    name: "category",
    component: Dashboard,
    layout: LayoutDashboard,
    onlyIf: {
      guard: verifyLoggedIn,
      redirect: "/login"
    },
  },

  {
    name: "item",
    component: Dashboard,
    layout: LayoutDashboard,
    onlyIf: {
      guard: verifyLoggedIn,
      redirect: "/login"
    },
  },

  {
    name: "transaction",
    component: Transaction,
    layout: LayoutDashboard,
    onlyIf: {
      guard: verifyLoggedIn,
      redirect: "/login"
    },
  },

  {
    name: '404',
    path: '404',
    component: NotFound
  },
];

export { routes };

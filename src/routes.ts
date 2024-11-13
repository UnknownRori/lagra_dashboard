import Login from "@/pages/Login.svelte";
import Dashboard from "@/pages/Dashboard.svelte";
import { LoginCredentials } from "./store/LoginCredentials.svelte";

function verifyLoggedIn() {
  return LoginCredentials.user.token != null;
}

const routes = [
  {
    name: "login",
    component: Login,
  },
  {
    name: "dashboard",
    component: Dashboard,
    onlyIf: {
      guard: verifyLoggedIn,
      redirect: "/login"
    },
  }
];

export { routes };

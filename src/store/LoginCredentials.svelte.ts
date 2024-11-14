import { navigateTo } from "svelte-router-spa";

import env from "../env";

export const LoginCredentials = $state({
  user: {
    username: '',
    token: '',
    role: '',
  }
});

type RefreshUserAPI = {
  status: 'success' | 'fail',
  data: {
    user: {
      username: string,
      role: string,
    }
  } | null,
}

export async function authMe(token: string): Promise<RefreshUserAPI> {
  const responseMe = await fetch(`${env.APP_URL}/api/v1/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await responseMe.json();
}

export async function autoLogin() {
  const userJson = localStorage.getItem("user");
  if (userJson == null) {
    return;
  }

  const user = JSON.parse(userJson);

  const data = await authMe(user.user.token);

  if (data.status == 'fail' || data.data == null) {
    return;
  }

  LoginCredentials.user.token = user.user.token;
  LoginCredentials.user.username = data.data.user.username;
  LoginCredentials.user.role = data.data.user.role;
  navigateTo("dashboard");
}

<script lang="ts">
    import {LoginCredentials} from "../store/LoginCredentials.svelte";
    import {navigateTo} from "svelte-router-spa";
    import env from "../env";

    let username = "";
    let password = "";
    let errorMsg = $state("");

    async function submitForm(event: Event) {
        event.preventDefault();
        const response = await fetch(`${env.APP_URL}/api/v1/auth/admin-login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const result = await response.json();
        if (result.status == "fail") {
            errorMsg = result.message;
            return;
        }

        const token = result.data.token;

        const responseMe = await fetch(`${env.APP_URL}/api/v1/auth/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const resultMe = await responseMe.json();
        LoginCredentials.user.token = token;
        LoginCredentials.user.username = resultMe.data.user.username;
        LoginCredentials.user.role = resultMe.data.user.role;
        navigateTo("dashboard");
    }
</script>

<div class="relative w-screen h-screen flex items-center justify-center content-center">
    <div class="absolute w-full h-full bg-[url('/public/54346102_p0.jpg')]"></div>
    <div class="relative flex flex-col gap-8 shadow p-12 md:w-[50%] lg:w-[45%] sm:w-[80%]
        bg-white bg-opacity-20 backdrop-blur-sm rounded">
        <h1 class="text-center text-4xl font-bold">Lagra Login</h1>
        <form action="" class="flex flex-col gap-8" onsubmit={submitForm}>
            <div class="flex flex-col gap-2">
                <span class="italic">Username</span>
                <input type="text" name="username" id="username" bind:value={username} placeholder="Enter your username"
                    class="border-0 p-1 rounded bg-opacity-20 bg-white placeholder-gray-600" />
            </div>

            <div class="flex flex-col gap-2">
                <span class="italic">Password</span>
                <input type="password" name="password" id="password" bind:value={password}
                    placeholder="Enter your password"
                    class="border-0 p-1 rounded bg-opacity-20 bg-white placeholder-gray-600" />
            </div>

            {#if errorMsg != ""}
            <div class="p-2 bg-red-500 text-white rounded">{errorMsg}</div>
            {/if}

            <button
                class="bg-green-600 hover:bg-green-500 duration-500 text-white shadow py-2 px-4 rounded">Login</button>
        </form>
    </div>
</div>

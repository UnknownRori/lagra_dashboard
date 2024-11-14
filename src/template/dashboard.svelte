<script lang="ts">
    import {Route} from "svelte-router-spa";
    import {LoginCredentials} from "../store/LoginCredentials.svelte";

    import Navigation from "../components/Navigation.svelte";

    let {currentRoute} = $props();
    const params = {};

    let expanded = $state(true);

    let currentRouteState = $state(currentRoute);

    function updatePage(route: string) {
        currentRouteState = route;
    }

    function isActive(route: string) {
        return currentRouteState == route;
    }

    function expandSidebar() {
        expanded = !expanded;
    }
</script>

<div class={!expanded ? "relative flex flex-1 h-screen w-screen gap-4 rounded duration-1000 -translate-x-[15%]"
    : "relative flex flex-1 h-screen w-screen gap-4 rounded duration-1000" }>
    <div class="flex flex-col md:w-[25%] h-full shadow bg-gray-100 border-r-2 border-gray-200 p-4">
        <div class="flex justify-between">
            <h1 class="text-2xl">Lagra</h1>
            <button aria-label="Collapsible" onclick={expandSidebar}>
                <svg class="h-8 w-8 text-slate-800" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="15" y1="4" x2="15" y2="20" />
                </svg>
            </button>
        </div>

        <ul class="flex flex-col gap-4 mt-12">
            <li>
                <Navigation route="dashboard" onclick={updatePage} className={isActive("dashboard")
                    ? "bg-gray-200 text-xl flex items-center align-center gap-4 border-2 border-gray-200 rounded-xl py-2 px-4"
                    : "text-xl flex items-center align-center gap-4 border-2 border-gray-200 rounded-xl py-2 px-4" }>
                    <svg class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>

                    <span> Dashboard </span>
                </Navigation>
            </li>

            <li>
                <Navigation onclick={updatePage} className={isActive("category")
                    ? "bg-gray-200 text-xl flex items-center align-center gap-4 border-2 border-gray-200 rounded-xl py-2 px-4"
                    : "text-xl flex items-center align-center gap-4 border-2 border-gray-200 rounded-xl py-2 px-4" }
                    route="category">
                    <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                        <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>

                    <span> Category </span>
                </Navigation>
            </li>

            <li>
                <Navigation onclick={updatePage} className={isActive("item")
                    ? "bg-gray-200 text-xl flex items-center align-center gap-4 border-2 border-gray-200 rounded-xl py-2 px-4"
                    : "text-xl flex items-center align-center gap-4 border-2 border-gray-200 rounded-xl py-2 px-4" }
                    route="item">
                    <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>

                    <span> Items </span>
                </Navigation>
            </li>

            <li>
                <Navigation onclick={updatePage} className={isActive("transaction")
                    ? "bg-gray-200 text-xl flex items-center align-center gap-4 border-2 border-gray-200 rounded-xl py-2 px-4"
                    : "text-xl flex items-center align-center gap-4 border-2 border-gray-200 rounded-xl py-2 px-4" }
                    route="transaction">
                    <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>

                    <span> Transaction </span>
                </Navigation>
            </li>
        </ul>

        <div class="border-t-[1px] border-gray-2 p-2 mt-6"></div>
        <div class="mt-auto">
            <p class="text-center">
                {LoginCredentials.user.username}
            </p>
        </div>
    </div>

    <div class="w-full">
        <Route {currentRoute} {params} />
    </div>
</div>

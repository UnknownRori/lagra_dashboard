<script lang="ts">
    import {navigateTo} from "svelte-router-spa";

    export let route: string;
    export let className: string;
    export let children;
    export let onclick = (route: string) => { };

    function changePage() {
        onclick(route);
        navigateTo(route);
    }
</script>

<a href="#" class={className} onclick={changePage}>
    {#if children}
    {@render children()}
    {:else}{/if}
</a>

<script lang="ts">
    import {navigateTo} from "svelte-router-spa";

    export let route;
    export let className;
    export let children;
</script>

<a href="#" class={className} onclick={()=> {
    console.log(route);
    navigateTo(route);
    }}
    >
    {#if children}
    {@render children()}
    {:else}{/if}
</a>

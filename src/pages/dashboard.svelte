<script lang="ts">
    import {LoginCredentials} from "../store/LoginCredentials.svelte";
</script>

<div class="flex justify-center items-center h-full w-full">
    <div class="shadow w-full p-8 rounded">
        <h1 class="text-2xl">
            Hi, {LoginCredentials.user.username}
        </h1>
    </div>
</div>

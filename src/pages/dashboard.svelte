<script lang="ts">
    import {LoginCredentials} from "../store/LoginCredentials.svelte";
    console.log(LoginCredentials);
</script>

<div class="relative flex flex-col w-screen h-screen">
    <div class="flex gap-2 justify-between px-4 py-2">
        <div class="text-3xl font-bold">Lagra</div>
        <div>
            <span>{LoginCredentials.user.username}</span>
        </div>
    </div>
    <div class="relative flex flex-1 h-full">
        <div class="md:w-[20%]">Sidebar</div>

        <div class="w-full">Content</div>
    </div>
</div>

<script lang="ts">
    import env from "../env";
    import {LoginCredentials} from "../store/LoginCredentials.svelte";

    let transactions = $state([]);
    $effect(() => {
        (async () => {
            const response = await fetch(`${env.APP_URL}/api/v1/transactions`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${LoginCredentials.user.token}`,
                },
            });
            const result = response.json();
            console.log(result);
        })();
    });
</script>

<h1>Yo</h1>

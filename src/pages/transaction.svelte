<script lang="ts">
    import env from "../env";
    import {LoginCredentials} from "../store/LoginCredentials.svelte";
    import type {Transaction} from "../types/transaction";

    let transactions: Transaction[] = $state([]);

    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",

        // These options can be used to round to whole numbers.
        trailingZeroDisplay: "stripIfInteger", // This is probably what most people
        // want. It will only stop printing
        // the fraction when the input
        // amount is a round number (int)
        // already. If that's not what you
        // need, have a look at the options
        // below.
        //minimumFractionDigits: 0, // This suffices for whole numbers, but will
        // print 2500.10 as $2,500.1
        //maximumFractionDigits: 0, // Causes 2500.99 to be printed as $2,501
    });

    $effect(() => {
        (async () => {
            const response = await fetch(`${env.APP_URL}/api/v1/transactions`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${LoginCredentials.user.token}`,
                },
            });
            const result = await response.json();
            transactions = result.data.transactions;
        })();
    });
</script>

<div class="flex justify-center items-center w-full h-full p-12">
    <table class="w-full text-left border border-gray-200 rounded-lg shadow-md">
        <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="px-6 py-3">ID</th>
                <th class="px-6 py-3">Total</th>
                <th class="px-6 py-3">Payment</th>
                <th class="px-6 py-3">User</th>
                <th class="px-6 py-3">Action</th>
            </tr>
        </thead>
        <tbody class="text-gray-700 text-sm font-light">
            {#each transactions as transaction}
            <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="px-6 py-3 whitespace-nowrap">{transaction.uuid}</td>
                <td class="px-6 py-3 whitespace-nowrap">{formatter.format(transaction.pay)}</td>
                <td class="px-6 py-3 whitespace-nowrap">{transaction.payType}</td>
                <td class="px-6 py-3 whitespace-nowrap">{transaction.displayuser.username}</td>
                <td>
                    <a href="" class="bg-yellow-500 rounded py-2 px-4 text-white">Edit</a>
                    <a href="" class="bg-red-500 rounded py-2 px-4 text-white">Delete</a>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

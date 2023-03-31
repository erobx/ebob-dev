<script>
	import { onMount } from "svelte";

    const endpoint = "https://api.monkeytype.com/users/personalBests";
    const endpoint2 = "https://jsonplaceholder.typicode.com/posts";
    const headers = {'Application-Content': 'application/json', 'Authorization': APE_KEY};

    onMount(async () => {
        const response = await fetch(endpoint2);
        // const response = await fetch(endpoint2, {
        //     method: "GET",
        //     headers: headers,
        // });
        const data = await response.json();
        console.log(data);
    })

</script>

<p>Hello from PB!</p>

<!-- <div class="table-container">
    <table>
        <tr>

        </tr>
    </table>
</div> -->

<style>

</style>
import { APE_KEY } from "$env/static/private";
import type { PageServerLoad } from "./$types";

const apekey = "ApeKey " + APE_KEY;
const endpoint = "https://api.monkeytype.com/users/personalBests/?mode=time";
const headers = {'Application-Content': 'application/json', 'Authorization': apekey};

export const load: PageServerLoad = (async ({ fetch }) => {
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: headers,
    });
    const data = await response.json();

    if (!data) return "apekey invalid"

    return data;
});
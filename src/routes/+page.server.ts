import { APE_KEY } from "$env/static/private";
import type { PageServerLoad } from "./$types';

export const load: PageServerLoad = () => {
    console.log(APE_KEY);
}
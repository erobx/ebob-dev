<script lang="ts">
    import Icon from "@iconify/svelte";
    import VimPanel from "../components/VimPanel.svelte";
    import Experience from "../components/Experience.svelte";
    import Education from "../components/Education.svelte";
    //let tf2 = "images/tf2-team.webp"
    let river = "images/river-valley.webp"

    let { data } = $props()

    function handleAnchorClick(event: any) {
        event.preventDefault()
        const link = event.currentTarget
        const anchorId = new URL(link.href).hash.replace('#', '')
        const anchor = document.getElementById(anchorId)
        window.scrollTo({
            top: anchor?.offsetTop,
            behavior: 'smooth',
        })
    }
</script>

<div class="flex flex-col items-center text-center">
    <div class="hero min-h-[60vh] w-full" style={`background-image: url(${river});`}>
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content w-full max-w-5xl px-6 py-12">
            <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <img
                    class="w-56 lg:w-72 shrink-0 object-cover aspect-square border-1 rounded-lg"
                    src="images/profile-pic.jpeg"
                    alt="Creator smiling with a komodo dragon."
                />
                <div class="flex-1 text-center lg:text-left">
                    <p class="text-lg leading-relaxed">
                        Welcome! I'm an <b>Implementation Specialist</b> for RockED - a mirco-learning
                        platform for the automotive industry. I run the implementation,
                        onboarding, and support of dealerships across North America for <b>RockED Booster</b>.
                    <br><br>
                        When not working, you can find me gardening, working out, or playing
                        video games with friends.
                    </p>
                </div>
            </div>
        </div>

    <!--
    <div id="about" class="flex flex-col lg:flex-row items-center justify-evenly gap-10 mt-10 w-full px-4 lg:px-8">
        <div class="flex flex-col items-center gap-6 w-full lg:w-96 lg:shrink-0">
            <div class="max-w-xs">
                svelte-ignore a11y_img_redundant_alt
                <img
                    class="rounded-full object-cover m-auto aspect-square border-1"
                    src="images/profile-pic.jpeg"
                    alt="Evan smiling for graduation photo."
                />
            </div>
            <div class="w-full lg:max-w-none">
                <p class="text-lg">
                    Welcome! I'm an <b>Implementation Specialist</b> for RockED - a mirco-learning
                    platform for the automotive industry. I run the implementation,
                    onboarding, and support of dealerships across North America for <b>RockED Booster</b>.
                <br><br>
                    When not working, you can find me gardening, working out, or playing
                    video games with friends.
                </p>
            </div>
        </div>
    -->
        <!--
        <div class="flex flex-col items-center w-full lg:flex-1 lg:min-w-0 lg:max-w-4xl">
            <h1 id="projects" class="text-2xl mb-2 font-bold tracking-wider">Projects</h1>
            <VimPanel data={data} />
        </div>
        -->
    </div>
    <div id="experience" class="min-h-fit w-full bg-base-200 p-4 flex flex-col items-center md:items-start md:px-12">
        <header class="mb-4">
           <h1 class="text-2xl font-bold tracking-wider">Experience</h1>
        </header>
        <Experience />
    </div>
    <div id="contact" class="footer sm:footer-horizontal bg-base-300 items-center p-10">
        <aside class="grid-flow-col items-center text-lg">
            <p>Copyright @ {new Date().getFullYear()} - All rights reserved</p>
        </aside>
        <nav class="grid-flow-col gap-4 place-self-center sm:justify-self-end">
            <a href="mailto:evan@ebob.dev" target="_blank">
                <Icon
                    icon="mdi:email"
                    width={40}
                    class="mx-auto"
                />
            </a>
            <a href="https://www.linkedin.com/in/erob-inson" target="_blank">
                <Icon
                    icon="mdi:linkedin"
                    width={40}
                    class="mx-auto"
                />
            </a>
        </nav>
    </div>
</div>

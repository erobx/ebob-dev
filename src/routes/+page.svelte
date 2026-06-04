<script lang="ts">
    import Icon from "@iconify/svelte";
    import VimPanel from "../components/VimPanel.svelte";
    import Experience from "../components/Experience.svelte";
    import Education from "../components/Education.svelte";
    let tf2 = "images/tf2-team.webp"

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
    <!--
    <div class="hero min-h-screen w-full" style={`background-image: url(${tf2});`}>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="max-w-md">
                <div class="card card-border card-xl bg-base-300 mb-20">
                    <div class="card-body">
                        <h1 class="mb-5 text-5xl text-success font-bold">Evan Robinson</h1>
                        <p class="mb-5">
                            An inquisitive mind searching for interesting problems.
                        </p>
                        <div class="flex justify-evenly">
                            <button class="btn btn-success btn-soft"><a href="#about" onclick={handleAnchorClick}>Learn More</a></button>
                            <a href="https://www.ebob.dev/resume.pdf" target="_blank">
                                <button class="btn btn-info btn-soft">
                                    Résumé <Icon icon="mdi:file-outline" width={20} />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    -->
    <div id="about" class="flex flex-col lg:flex-row items-center justify-evenly gap-10 mt-10 w-full px-4 lg:px-8">
        <div class="flex flex-col items-center gap-6 w-full lg:w-96 lg:shrink-0">
            <div class="max-w-xs">
                <!-- svelte-ignore a11y_img_redundant_alt -->
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
        <div class="flex flex-col items-center w-full lg:flex-1 lg:min-w-0 lg:max-w-4xl">
            <h1 id="projects" class="text-2xl mb-2 font-bold tracking-wider">Projects</h1>
            <VimPanel data={data} />
        </div>
    </div>
    <div id="experience" class="min-h-fit w-full bg-base-200 p-4 mt-4 flex flex-col items-center md:items-start md:px-12">
        <header class="mb-4">
            <h1 class="text-2xl font-bold tracking-wider">Experience</h1>
        </header>
        <Experience />
        <header class="mt-4 mb-4">
            <h1 class="text-2xl font-bold tracking-wider">Education</h1>
        </header>
        <Education />
    </div>
    <div id="contact" class="footer footer-horizontal footer-center bg-base-300 rounded p-10">
        <h1 class="text-2xl font-bold">Contact</h1>
        <p class="text-lg">
            If you have any questions or want to collaborate, please reach out!<br>
            <span>Email: <span class="text-primary font-bold hover:underline"><a href="mailto:evan.robinson@ebob.dev">evan.robinson@ebob.dev</a></span></span>
        </p>
        <div class="flex justify-evenly">
            <a href="https://www.github.com/erobx" target="_blank">
                <Icon
                    icon="mdi:github"
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
        </div>
        <aside>
            <p>Copyright @ {new Date().getFullYear()} - All rights reserved</p>
            <p>Inspiration from terminal.shop</p>
        </aside>
    </div>
</div>

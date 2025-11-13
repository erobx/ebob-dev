<script lang="ts">
    import Icon from "@iconify/svelte";
    import VimPanel from "../components/VimPanel.svelte";
    import Experience from "../components/Experience.svelte";
    import Education from "../components/Education.svelte";
    let gif = "images/hero.gif"

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
    <!--Hero should contain vim motions in background--> 
    <div class="hero min-h-screen w-full" style={`background-image: url(${gif});`}>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="max-w-md">
                <div class="card card-border card-xl bg-base-300 mb-20">
                    <div class="card-body">
                        <h1 class="mb-5 text-5xl text-success font-bold">Evan Robinson</h1>
                        <p class="mb-5">
                            A team player who loves turning ideas into meaningful solutions.
                            I bring curiosity, creativity, and a collaborative spirit to every project.
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
    <div id="about" class="flex flex-col items-center gap-2 mt-8">
        <div class="max-w-md">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img
                class="rounded-full object-cover m-auto aspect-square border-1"
                src="images/profile-pic.jpg"
                alt="Evan smiling for graduation photo."
            />
        </div>
        <div class="max-w-2xl">
            <h1 class="text-2xl font-bold">About Me</h1>
            <p class="text-lg">
            I'm a newly graduated computer science student from the University of Florida,
            fueled by a passion for crafting impactful solutions. With experience in modern
            technologies like Golang, React, TypeScript and PostgreSQL, I've built applications
            that streamline workflows and enhance collaboration.<br><br>
            I'm eager to continue learning and contribute to innovate projects, 
            particularly those that bring people together and solve real-world problems.
            When I'm not coding, you can find me watching any sport, hitting the gym, or typing.
        </div>
        <h1 id="projects" class="text-2xl mt-2 mb-2 font-bold tracking-wider">Portfolio</h1>
        <VimPanel data={data} />
    </div>
    <div id="experience" class="min-h-fit w-full bg-base-200 p-4 mt-4 flex flex-col items-center">
        <header class="mb-4">
            <h1 class="text-2xl font-bold tracking-wider">Professional Experience</h1>
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

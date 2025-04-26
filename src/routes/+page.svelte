<script lang="ts">
    import Icon from "@iconify/svelte";
    import "../components/Table.svelte"
    import VimPanel from "../components/VimPanel.svelte";
    import Experience from "../components/Experience.svelte";
    let url = "https://jonboh.dev/posts/rr/back_and_forth.gif"

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


<div class="flex-col items-center text-center">
    <!--Hero should contain vim motions in background--> 
    <div class="hero min-h-screen" style={`background-image: url(${url});`}>
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content text-center">
            <div class="max-w-md">
                <div class="card card-border card-xl bg-neutral mb-20">
                    <div class="card-body">
                        <h1 class="mb-5 text-5xl font-bold">Evan Robinson</h1>
                        <p class="mb-5">
                            A team player who loves turning ideas into meaningful solutions.
                            I bring curiosity, creativity, and a collaborative spirit to every project.
                            (And yes, I use NeoVim.)
                        </p>
                        <div class="flex justify-evenly">
                            <button class="btn btn-success btn-soft"><a href="#about" on:click={handleAnchorClick}>Learn More</a></button>
                            <button class="btn btn-info btn-soft">Résumé</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="about" class="flex flex-col items-center gap-4 mt-8">
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
            fueld by a passion for crafting impactful solutions. With experience in modern
            technologies like NodeJS, React, Golang, and PostgreSQL, I've built applications
            that streamline workflows and enhance collaboration.<br><br>
            I'm eager to continue learning and contribute to innovate projects, 
            particularly those that bring people together and solve real-world problems.
            When I'm not coding, you can find me watching any sport, hitting the gym, or typing.
        </div>
    <div class="min-h-fit pb-10 w-full bg-base-200 p-2 flex flex-col items-center">
        <header class="mb-4 mt-2">
            <h1 class="text-2xl font-bold tracking-wider">My Motions</h1>
            <p class="text-md mt-2">*Navigate using Vim keys (h/j/k/l) or arrow keys</p>
        </header>
        <VimPanel />
    </div>
    <div class="min-h-fit p-2 w-full flex flex-col items-center">
        <header class="mb-4">
            <h1 class="text-2xl font-bold tracking-wider">Professional Experience</h1>
        </header>
        <Experience />
    </div>
    </div>
    <div id="contact" class="footer footer-horizontal footer-center bg-base-300 rounded p-10">
        <h1 class="text-2xl font-bold">Contact</h1>
        <p class="text-lg">
            If you have any questions, please reach out!<br>
            <span>Email: <span class="text-info">erob7856@gmail.com</span></span>
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
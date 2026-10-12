<script lang="ts">
    import Icon from "@iconify/svelte";
    import ProjectScroll from "../components/ProjectScroll.svelte";
    import TextCascade from "../components/TextCascade.svelte";
    import { createProjects, createServices, createSkills } from "$lib/data";
    let river = "images/river-valley.webp"
    const projects = createProjects()
    const services = createServices()
    const toolkit = createSkills()

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
        <div class="hero-content text-neutral-content w-full max-w-4xl px-6 py-12">
            <div class="hero-card flex flex-col lg:flex-row items-center gap-6 lg:gap-10 w-full bg-neutral/60 backdrop-blur-md rounded-box border border-neutral-content/10 p-6 lg:p-8">
                <div class="flex-1 text-center lg:text-left">
                    <p class="hero-fade text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                        Product Management · Data Analysis
                    </p>
                    <TextCascade
                        tag="h1"
                        class="text-4xl lg:text-5xl font-bold tracking-tight mb-3"
                        text="Evan Robinson"
                        delay={250}
                        stagger={40}
                    />
                    <TextCascade
                        tag="p"
                        class="text-lg lg:text-xl leading-relaxed text-neutral-content/90"
                        text="I'm drawn to the space between customers, data, and engineering, where good products get shaped."
                        by="word"
                        delay={700}
                        stagger={50}
                    />
                    <div class="hero-fade hero-ctas flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
                        <a class="btn btn-primary" href="#contact" onclick={handleAnchorClick}>Work with me</a>
                        <a class="btn btn-outline text-neutral-content" href="#portfolio" onclick={handleAnchorClick}>See case studies</a>
                    </div>
                </div>
                <img
                    class="w-40 lg:w-52 shrink-0 aspect-square object-cover rounded-box ring-1 ring-neutral-content/15"
                    src="images/profile-pic.jpeg"
                    alt="Creator smiling with a komodo dragon."
                />
            </div>
        </div>
    </div>
    <section id="services" class="w-full max-w-6xl px-4 py-20 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-widest text-primary mb-2">What I bring</p>
        <h1 class="text-3xl lg:text-4xl font-bold tracking-tight mb-12">How I work with product teams</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-start">
            {#each services as service}
                <div class="card bg-base-200 border border-base-content/10 hover:border-primary/60 transition-colors">
                    <div class="card-body gap-3">
                        <Icon icon={service.icon} width={36} class="text-primary" />
                        <h2 class="card-title text-lg">{service.title}</h2>
                        <p class="text-base-content/75">{service.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>
    <section id="portfolio" class="w-full">
        <ProjectScroll projects={projects} />
    </section>
    <section id="toolkit" class="w-full max-w-6xl px-4 py-20 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Toolkit</p>
        <h1 class="text-3xl lg:text-4xl font-bold tracking-tight mb-12">Skills &amp; tools</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-start">
            {#each toolkit as group}
                <div>
                    <h2 class="font-semibold text-lg mb-3">{group.name}</h2>
                    <div class="flex flex-wrap gap-2">
                        {#each group.badges as badge}
                            <span class="badge badge-lg badge-outline">{badge.name}</span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </section>
    <section id="contact" class="w-full px-4 py-20 bg-base-200">
        <div class="max-w-3xl mx-auto flex flex-col items-center gap-5">
            <h1 class="text-3xl lg:text-4xl font-bold tracking-tight">Let's work together</h1>
            <p class="text-lg text-base-content/80">
                If you're passionate about turning insights into products people love,
                I'd enjoy connecting.
            </p>
            <div class="flex flex-wrap justify-center gap-3 mt-2">
                <a class="btn btn-primary btn-lg" href="mailto:evan@ebob.dev">
                    <Icon icon="mdi:email" width={22} /> Email me
                </a>
                <a class="btn btn-outline btn-lg" href="https://www.linkedin.com/in/erob-inson" target="_blank">
                    <Icon icon="mdi:linkedin" width={22} /> LinkedIn
                </a>
            </div>
        </div>
    </section>
    <div class="footer footer-center bg-base-300 p-10">
        <aside class="text-lg">
            <p>Copyright @ {new Date().getFullYear()} - All rights reserved</p>
        </aside>
    </div>
</div>

<style>
    .hero-card {
        animation: card-in 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
    }

    .hero-fade {
        animation: fade-in 600ms ease 200ms both;
    }

    .hero-ctas {
        animation-delay: 1800ms;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
    }

    @keyframes card-in {
        from {
            opacity: 0;
            transform: translateY(12px);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .hero-card,
        .hero-fade {
            animation: none;
        }
    }
</style>

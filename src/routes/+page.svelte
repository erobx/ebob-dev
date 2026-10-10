<script lang="ts">
    import Icon from "@iconify/svelte";
    import VimPanel from "../components/VimPanel.svelte";
    import Experience from "../components/Experience.svelte";
    import Education from "../components/Education.svelte";
    import TextCascade from "../components/TextCascade.svelte";
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
        <div class="hero-content text-neutral-content w-full max-w-4xl px-6 py-12">
            <div class="hero-card flex flex-col lg:flex-row items-center gap-6 lg:gap-10 w-full bg-neutral/60 backdrop-blur-md rounded-box border border-neutral-content/10 p-6 lg:p-8">
                <div class="flex-1 text-center lg:text-left">
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
                        text="Product-minded, data-driven, technically curious. Bridging customers, data, and engineering to build better products."
                        by="word"
                        delay={700}
                        stagger={70}
                    />
                </div>
                <img
                    class="w-40 lg:w-52 shrink-0 aspect-square object-cover rounded-box ring-1 ring-neutral-content/15"
                    src="images/profile-pic.jpeg"
                    alt="Creator smiling with a komodo dragon."
                />
            </div>
        </div>
    </div>
    <div class="flex flex-col items-center w-full lg:flex-1 lg:min-w-0 lg:max-w-4xl p-6">
            <h1 id="portfolio" class="text-2xl mb-2 font-bold tracking-wider">Portfolio</h1>
            <VimPanel data={data} />
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

<style>
    .hero-card {
        animation: card-in 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
    }

    @keyframes card-in {
        from {
            opacity: 0;
            transform: translateY(12px);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .hero-card {
            animation: none;
        }
    }
</style>

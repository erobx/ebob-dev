<script lang="ts">
    import "../components/Table.svelte"
    import Table from "../components/Table.svelte";
    let url = "https://jonboh.dev/posts/rr/back_and_forth.gif"
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
                            <button class="btn btn-success btn-soft">Learn More</button>
                            <button class="btn btn-info btn-soft">Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col items-center gap-4 mt-8">
        <div class="max-w-md">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img
                class="rounded-full object-cover m-auto aspect-square border-1"
                src="images/profile-pic.jpg"
                alt="Evan smiling for graduation photo."
            />
        </div>
        <div class="max-w-lg">
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
        <div class="mockup-code w-fit">
            <pre data-prefix="~"><code>nvim .</code></pre>
        </div>
        <!--Vim like skill navigation here-->
        <!--For now just my table-->
        <div>
            <Table />
        </div>
    </div>
</div>
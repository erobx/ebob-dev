<script lang="ts">
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
                            (And yes, I use Vim—but I promise not to make you learn it.)
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
    <div class="hero min-h-screen">
        <div class="hero-content">
            <div class="max-w-md">
                <div class="card">
                    <div class="card-body">
                        <!-- svelte-ignore a11y_img_redundant_alt -->
                        <img
                            class="rounded-full object-cover aspect-square"
                            src="images/profile-pic.jpg"
                            alt="Evan smiling for graduation photo."
                        />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
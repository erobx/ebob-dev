<script lang="ts">
    import ProjectCard from "../../components/ProjectCard.svelte";
</script>

<div class="container mx-auto p-2 sapce-y-8">
    <div class="lg:flex xs:flex-col gap-8 justify-around">
        <div class="flex-col gap-8">
            <ProjectCard
                title={"Anki Duo"}
                link={"github.com/erobx/anki_duo"}
                info={`
                    I study Spanish on Duolingo, however Duo doesn't allow a user to retrieve their studied vocab words.
                    Thus I created a quick wrapper that allows a user to retrieve their words and even import them into
                    a popular flashcard reviewer: Anki.
                `}
                tech={["Golang, Python, Make"]}
            />
            <ProjectCard
                title={"Programming Language"}
                link={"github.com/erobx/PLC_Project"}
                info={`
                    This was my first introduction into creating my own programming language that compiles into executable
                    Java bytecode. After creating my own lexer, parser, interpreter, analyzer and generator,
                    I was able to write FizzBuzz in the language. That blew my mind.
                `}
                tech={[
                    "Java, Unit Testing, End-to-end Testing, Harness Testing",
                ]}
            />
            <ProjectCard
                title={"Ebob.dev"}
                link={"github.com/erobx/ebob-dev"}
                info={`
                    The current website you are on! This project contains all the code for my website and I encourage
                    you to take a look at what goes into it! It is constantly under work and I strive to make it my own.
                `}
                tech={["Typescript, Sveltekit, Tailwind"]}
            />
        </div>
    </div>
</div>

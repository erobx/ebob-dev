<script lang="ts">
    import ProjectCard from "../../components/ProjectCard.svelte";
</script>

<div class="container mx-auto p-2 sapce-y-8">
    <div class="lg:flex xs:flex-col gap-8 justify-around">
        <div class="flex-col gap-8">
            <ProjectCard
                title={"Tradeups"}
                link={"github.com/erobx/tradeups"}
                info={`
                    The game Counter-Strike 2 has a system called tradeups where you can trade 10 skins of the same
                    rarity to get 1 of the next best rarity. I had the idea to allow users to pool their
                    skins together for each user to get a chance to receieve a better skin.
                `}
                bw={["Golang, ReactJS, PostgreSQL"]}
            />
            <ProjectCard
                title={"Golingo"}
                link={"github.com/erobx/golingo"}
                info={`
                    Duolingo does not have an offical API, but there exists an unofficial API in Python.
                    However, I wanted the API in Golang so I could easily interface with my other project (Anki Duo).
                    Therefore, I forked the existing project and rewrote the API in Go for my use cases.
                `}
                bw={["Golang"]}
            />
            <ProjectCard
                title={"Anki Duo"}
                link={"github.com/erobx/anki_duo"}
                info={`
                    I study Spanish on Duolingo, however Duo doesn't allow a user to retrieve their studied vocab words.
                    So I created a program that allows a user to retrieve their words and import them into
                    a popular flashcard reviewer called Anki.
                `}
                bw={["Golang, Make"]}
            />
            <ProjectCard
                title={"SwampReview"}
                link={"github.com/Code-Goblins2024/swamp-review"}
                info={`
                    A platform for University of Florida students to view reviews for on-campus housing.
                    This project aims to help students make an informed decision about their living situation when attending university.
                    Currently under development by my team and I for our Senior Project.
                `}
                bw={["React, JavaScript, Supabase"]}
            />
            <ProjectCard
                title={"Programming Language"}
                link={"github.com/erobx/PLC_Project"}
                info={`
                    This was my first introduction into creating my own programming language that compiles into executable
                    Java bytecode. After creating my own lexer, parser, interpreter, analyzer and generator,
                    I was able to write FizzBuzz in the language. That blew my mind.
                `}
                bw={["Java, Unit Testing, End-to-end Testing, Harness Testing"]}
            />
            <ProjectCard
                title={"Ebob.dev"}
                link={"github.com/erobx/ebob-dev"}
                info={`
                    The current website you are on! This project contains all the code for my website and I encourage
                    you to take a look at what goes into it! It is constantly under work and I strive to make it my own.
                `}
                bw={["TypeScript, SvelteKit, Tailwind"]}
            />
        </div>
    </div>
</div>

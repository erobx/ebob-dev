<script lang="ts">
    import {
        Table,
        tableMapperValues,
        type TableSource,
    } from "@skeletonlabs/skeleton";
    import { tableSourceValues } from "@skeletonlabs/skeleton";

    const sourceData = [
        {
            position: 1,
            skills: "Languages",
            tools: "Golang, JavaScript, TypeScript, Python",
        },
        {
            position: 2,
            skills: "Frontend",
            tools: "React, NextJS, SvelteKit",
        },
        { position: 3, skills: "Backend", tools: "Fiber, Node, Flask, FastAPI, SQL" },
        { position: 4, skills: "CI/CD", tools: "Git, Docker" },
        {
            position: 5,
            skills: "Data Science",
            tools: "Numpy, Pandas, Scikit",
        },
    ];

    const tableSimple: TableSource = {
        head: ["Skills", "Tools"],
        body: tableMapperValues(sourceData, ["skills", "tools"]),
        meta: tableSourceValues(sourceData),
    };
</script>

<div class="flex justify-center px-2">
    <div
        class="card p-4 bg-dark-blue mt-4 rounded-lg w-full text-center shadow-lg"
    >
        <Table
            source={tableSimple}
            regionHeadCell="text-center text-[#ccccb5] text-xl"
            regionHead="text-[#23a9d5]"
            regionCell="text-[#9E9F90]"
        />
    </div>
</div>

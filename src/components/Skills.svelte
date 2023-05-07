<script lang="ts">
    import { Table, tableMapperValues, type TableSource } from "@skeletonlabs/skeleton";
    import { tableSourceValues } from "@skeletonlabs/skeleton";

    const sourceData = [
        { position: 1, skills: 'Frontend', tools: 'Svelte, React, Angular, Agile' },
        { position: 2, skills: 'Backend', tools: 'Node, Flask, FastAPI' },
        { position: 3, skills: 'Data Science', tools: 'Python, Numpy, Pandas, Scikit, SQL' },
        { position: 4, skills: 'CI/CD', tools: 'Git' },
        { position: 5, skills: 'Languages', tools: 'C++, Java, Golang, TypeScript'}

    ];

    const tableSimple: TableSource = {
        // A list of heading labels.
        head: ['Skills', 'Tools'],
        // The data visibly shown in your table body UI.
        body: tableMapperValues(sourceData, ['skills', 'tools']),
        // Optional: The data returned when interactive is enabled and a row is clicked.
        meta: tableSourceValues(sourceData)
    };
</script>

<div class="flex justify-center px-8">
    <div class="card p-4 bg-dark-blue mt-4 rounded-lg w-full text-center shadow-lg">
        <Table source={tableSimple} regionHeadCell="text-center text-[#ccccb5] text-xl" regionHead="text-[#23a9d5]" regionCell="text-[#9E9F90]"/>
    </div>
</div>

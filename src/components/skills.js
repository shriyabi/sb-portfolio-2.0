function Skills({skillName, year}) {
    return (
        <div class="w-full flex my-2 items-start flex-row pl-2 border-2 text-slate-100 border-slate-100">
            <h3 class="w-2/3">{skillName}</h3>
            <h3 class="text-end w-1/3 italic bg-fuchsia-400 px-3 text-neutral-700"> {year} </h3>
        </div>
    );
}
export default Skills; 
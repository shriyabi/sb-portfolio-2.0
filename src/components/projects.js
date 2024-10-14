function Project({ awardName, awardDescription, imgUrl }) {
    return (
        <div className="w-full my-5 md:mx-4 flex flex-wrap justify-between items-center flex-col text-center md:w-1/3 lg:w-1/5">
    <img src={imgUrl} className="w-3/4 border-4 border-red-700" />
    <h3 className="font-semibold text-base md:text-lg leading-5 break-words">
        {awardName}
    </h3>
    <h3 className="text-sm md:text-base break-words">
        {awardDescription}
    </h3>
</div>

    );
}

export default Project;

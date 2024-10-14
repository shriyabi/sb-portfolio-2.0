function Project({ awardName, awardDescription, imgUrl }) {
    return (
        <div className="w-full my-5 mx-4 text-center md:w-1/3 lg:w-1/5">
            <img src={imgUrl} class="mx-auto border-4 border-red-700" />
            <h3 className="font-semibold text-lg leading-5">{awardName}</h3> 
            <h3 className="">{awardDescription}</h3>
        </div>
    );
}

export default Project;

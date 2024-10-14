function Award({ awardName, awardDescription, skills, imgUrl }) {
    return (
        <div className="">
            <img src={imgUrl} class="mx-auto border-4 border-red-700" />
            <h3 className="text-lg font-semibold ">{awardName}</h3> 
            <h3>{awardDescription}</h3>
            <h3 className="italic">{skills}</h3>
        </div>
    );
}

export default Award;

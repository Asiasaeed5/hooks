const FilterMovie=({setText})=>{

    return(
        <div>
            <input type="=text" onChange={(event)=>setText(event.target.value)}/>
        </div>
    )
    }
    export default FilterMovie
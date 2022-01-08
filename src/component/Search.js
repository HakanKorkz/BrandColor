import {GrSearch} from "react-icons/gr";
import {useContext} from "react";
import MainContext from "../MainContext";

function Search() {

     const {search, setSearch}=useContext(MainContext)

    const searchControl = (search) => {
        setSearch(search)
    }

    return (
        <div className='search-content'>

            <div className="search-icons">
                <GrSearch/>
            </div>
            <input type="text" placeholder='Ara' onChange={(e) => searchControl(e.target.value) }/>

        </div>
    )

}

export default Search

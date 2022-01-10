import {Link} from "react-router-dom";
import {useContext} from "react";
import MainContext from "../MainContext";

function TurnBack() {

    const {setSelectedColors} = useContext(MainContext)
    const selectedColorsReset = () => {

        setSelectedColors([])

    }
    return (
        <div className='all-colors-content'>
            <Link to={'/'} onClick={selectedColorsReset}>
            <button>
                All Colors
            </button>
        </Link>
        </div>
    )

}

export default TurnBack

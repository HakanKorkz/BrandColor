import {useContext} from "react";
import MainContext from "../MainContext";

function LeftBar() {
    const {selectedColors} = useContext(MainContext)
    return (
      <div className='leftBar'>
            {selectedColors.length > 0 && selectedColors.length }
        </div>

    )

}

export default LeftBar

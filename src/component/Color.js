import {getContrast} from "../Helpers";
import MainContext from "../MainContext";
import {useContext,useState} from "react";

function Color({color}) {
    const {selectedColors, setSelectedColors} = useContext(MainContext)
    const toggleSelected = () => {
        if (selectedColors.includes(color.slug)) {
            setSelectedColors(selectedColors.filter(slug => slug !== color.slug))
        } else {
            setSelectedColors([...selectedColors, color.slug])
        }

    }
    return (
        <div className={`brand ${selectedColors.includes(color?.slug) ? 'selected' : ''}`}>
            <h5 onClick={toggleSelected}> {color.title}</h5>
            <div className="brand-colors">
                {
                    color.colors.map(color => (
                        <span style={{'--bgColor': `#${color}`, '--Color': `${getContrast(color)}`}}>{color} </span>
                    ))
                }
            </div>
        </div>
    )
}

export default Color

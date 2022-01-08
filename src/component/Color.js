import {getContrast} from "../Helpers";
import MainContext from "../MainContext";
import {useContext} from "react";
import ClipboardButton from "react-clipboard.js";

function Color({color}) {
    const {selectedColors, setSelectedColors, setCopied} = useContext(MainContext)
    const toggleSelected = () => {
        if (selectedColors.includes(color.slug)) {
            setSelectedColors(selectedColors.filter(slug => slug !== color.slug))
        } else {
            setSelectedColors([...selectedColors, color.slug])
        }

    }
    const setColor = (color) => {

        setCopied(color)
    }
    return (
        <div className={`brand ${selectedColors.includes(color?.slug) ? 'selected' : ''}`}>
            <h5 onClick={toggleSelected}> {color.title}</h5>
            <div className="brand-colors">
                {color.colors.map(color => (
                    <ClipboardButton component='span'
                                     style={{'--bgColor': `#${color}`, '--Color': `${getContrast(color)}`}}
                                     data-clipboard-text={color} onSuccess={() => setColor(color)}>
                        {color}
                    </ClipboardButton>
                ))
                }
            </div>
        </div>
    )
}

export default Color

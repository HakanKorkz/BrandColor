import {getContrast} from "../Helpers";

function Copied({color}) {

    return (

        <div className='copied' style={{'--bgColor': `#${color}`, '--Color': `${getContrast(color)}`}}>
            Copied #{color} to clipboard
        </div>
    )


}

export default Copied

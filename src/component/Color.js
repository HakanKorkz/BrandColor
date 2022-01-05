import {getContrast} from "../Helpers";

function Color({color}) {
    return (
        <div className='brand'>
            <h5> {color.title}</h5>
            <div className="brand-colors">
                {
                    color.colors.map(color => (
                        <span style={{'--bgColor': `#${color}`,'--Color': `${getContrast(color)}`}}>{color} </span>
                    ))
                }
            </div>
        </div>
    )
}

export default Color

import Search from "./Search";
import Color from './Color'
import ColorsData from '../data/ColorsData.json'
import {useState} from "react";
function Content() {


    const colorArray = [];

    // eslint-disable-next-line array-callback-return
    Object.keys(ColorsData).map(keys => {

        colorArray.push(ColorsData[keys])
    })

    const [colors, setColors] = useState(colorArray)

    return (
        <main className='content'>
            <header className='header'>
                <Search/>
            </header>
            <section className='brands'>
                {
                    colors.map(color => (
                        <Color color={color}/>
                    ))
                }
            </section>
        </main>
    )

}

export default Content

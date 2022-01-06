import Search from "./Search";
import Color from './Color'
import {useContext} from "react";
import MainContext from "../MainContext";
function Content() {

    const {colors} = useContext(MainContext)

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

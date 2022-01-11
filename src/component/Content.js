import Color from './Color'
import LazyLoad from 'react-lazyload';
import {useContext} from "react";
import MainContext from "../MainContext";
import HeaderBar from "./HeaderBar";
import Loader from "./Loader";

function Content() {

    const {colors} = useContext(MainContext)

    return (
        <main className='content'>

            <HeaderBar/>
            <section className='brands'>
                {
                    colors.map(color => (
                        <LazyLoad key={color.slug} once={true} overflow={true} placeholder={<Loader/>}
                                  className='LazyLoad'>
                            <Color color={color}/>
                        </LazyLoad>
                    ))
                }
            </section>
        </main>
    )

}

export default Content

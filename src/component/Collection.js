import {useParams} from "react-router-dom";
import HeaderBar from "./HeaderBar";
import LazyLoad from "react-lazyload";
import Color from "./Color";
import MainContext from "../MainContext";
import {useContext, useEffect} from "react";

function Collection() {

    const {slugs} = useParams()

    const {selectedColors, setSelectedColors, colors} = useContext(MainContext)

    useEffect(() => {
        setSelectedColors(slugs.split(','))
    }, [])

    return (
        <main className='content'>

            <HeaderBar/>
            <section className='brands'>
                {selectedColors.map(slug => {
                    let color = colors.find(color => color.slug === slug)
                    return (
                        <LazyLoad key={color.slug} once={true} overflow={true} placeholder='Yükleniyor'
                                  className='LazyLoad'>
                            <Color color={color}/>
                        </LazyLoad>
                    )
                })
                }
            </section>
        </main>

    )

}

export default Collection

import Sidebar from './component/Sidebar'
import Content from "./component/Content";
import MainContext from "./MainContext";
import ColorsData from "./data/ColorsData.json";
import {useEffect, useState} from "react";
import Copied from "./component/Copied";
import { forceCheck } from 'react-lazyload';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Collection from "./component/Collection";

function App() {
    const colorArray = [];

    // eslint-disable-next-line array-callback-return
    Object.keys(ColorsData).map(keys => {

        colorArray.push(ColorsData[keys])
    })

    const [colors, setColors] = useState(colorArray)
    const [selectedColors, setSelectedColors] = useState([])
    const [copied, setCopied] = useState(false)
    const [search, setSearch] = useState('')
    useEffect(() => {

            if (copied) {
                const setTimeOut = setTimeout(() => {
                    setCopied(false)
                }, 500)

                clearTimeout(setTimeOut)

            }
        }, [copied]
    )
    useEffect(() => {
        setColors(colorArray.filter(color => color.title.toLowerCase().includes(search)))
    }, [search])
    useEffect(()=>{

        forceCheck()

    },[colors])
    const data = {
        colors,
        setColors,
        selectedColors,
        setSelectedColors,
        setCopied,
        search,
        setSearch
    }
    return (
        <>
            <MainContext.Provider value={data}>
                {copied && <Copied color={copied}/>}
                <Sidebar/>
                <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<Content/>} exact />
                            <Route path="/collection/:slugs" element={<Collection/>} exact />
                        </Routes>
                </BrowserRouter>
            </MainContext.Provider>

        </>
    );
}

export default App;

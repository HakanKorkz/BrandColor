import Sidebar from './component/Sidebar'
import Content from "./component/Content";
import MainContext from "./MainContext";
import ColorsData from "./data/ColorsData.json";
import {useEffect, useState} from "react";
import Copied from "./component/Copied";

function App() {
    const colorArray = [];

    // eslint-disable-next-line array-callback-return
    Object.keys(ColorsData).map(keys => {

        colorArray.push(ColorsData[keys])
    })

    const [colors, setColors] = useState(colorArray)
    const [selectedColors, setSelectedColors] = useState([])
    const [copied, setCopied] = useState(false)
    useEffect(() => {

            if (copied) {
             const  setTimeOut=setTimeout(() => {
                    setCopied(false)
                }, 500)

                clearTimeout(setTimeOut)

            }
        }, [copied]
    )
    const data = {
        colors,
        setColors,
        selectedColors,
        setSelectedColors,
        setCopied
    }
    return (
        <>
            <MainContext.Provider value={data}>
                {copied && <Copied color={copied}/>}
                <Sidebar/>
                <Content/>
            </MainContext.Provider>

        </>
    );
}

export default App;

import Sidebar from './component/Sidebar'
import Content from "./component/Content";
import MainContext from "./MainContext";
import ColorsData from "./data/ColorsData.json";
import {useEffect, useState} from "react";

function App() {
    const colorArray = [];

    // eslint-disable-next-line array-callback-return
    Object.keys(ColorsData).map(keys => {

        colorArray.push(ColorsData[keys])
    })

    const [colors, setColors] = useState(colorArray)
    const [selectedColors, setSelectedColors] = useState([])
    useEffect(()=>{
console.log(selectedColors)
    },[selectedColors])
    const data = {
        colors,
        setColors,
        selectedColors,
        setSelectedColors
    }
    return (
        <>
            <MainContext.Provider value={data}>
                <Sidebar/>
                <Content/>
            </MainContext.Provider>

        </>
    );
}

export default App;

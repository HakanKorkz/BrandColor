import Search from "./Search";
import LeftBar from "./LeftBar";
import {useParams} from "react-router-dom";
import TurnBack from "./TurnBack";


function HeaderBar() {

    const {slugs} = useParams()

    return (
        <header className='header'>
            {!slugs && <Search/>}
            {slugs && <TurnBack /> }
            <LeftBar/>
        </header>
    )

}

export default HeaderBar

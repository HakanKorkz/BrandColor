import ContentLoader from "react-content-loader"
function Loader() {

    return (
        <ContentLoader
            speed={2}
            width={980}
            height={140}
            viewBox="0 0 980 140"
            backgroundColor="#ffffff"
            foregroundColor="#ecebeb"
        >
            <rect x="-22" y="6" rx="0" ry="0" width="960" height="140"/>
        </ContentLoader>
    )
}

export default Loader

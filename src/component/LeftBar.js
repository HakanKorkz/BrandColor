import {useContext, useEffect, useState} from "react";
import MainContext from "../MainContext";
import {GrLink, GrDownload, GrClose} from "react-icons/gr";
function LeftBar() {
    const {setSelectedColors, colors, selectedColors} = useContext(MainContext)
    const [cssMethod, setCssMethod] = useState('css')
    const getLink = () => {
        prompt('Here\'s the URL to share', `http://localhost:3000/collection/${selectedColors.join(',')}`)
    }
    const [downloadUrl, setDownloadUrl] = useState()

    useEffect(() => {

        if (selectedColors.length <= 0) return false

        let outPut = '';
        console.log(cssMethod);
        switch (cssMethod) {

            case 'css' :
                outPut += ':root{\n'

                selectedColors.map(slug => {
                    let color = colors.find(color => color.slug === slug)

                    color.colors.map((color, key) => {
                        outPut += `--${slug}-${key}: ${color};\n`

                    })
                })

                outPut += '}'

                break;
            case 'scss' :

                selectedColors.map(slug => {
                    let color = colors.find(color => color.slug === slug)

                    color.colors.map((color, key) => {
                        outPut += `\$${slug}-${key}: ${color};\n`

                    })
                })

                break;
            case 'less' :

                selectedColors.map(slug => {
                    let color = colors.find(color => color.slug === slug)

                    color.colors.map((color, key) => {
                        outPut += `@${slug}-${key}: ${color};\n`

                    })
                })

                break;

        }

        const blob = new Blob([outPut])
        const url = URL.createObjectURL(blob)
        setDownloadUrl(url)
        return () => {
            URL.revokeObjectURL(url)
            setDownloadUrl('')
        }
    }, [selectedColors,cssMethod])
    return (
        <div className='leftBar'>
            <div className="left-actions">
                {selectedColors.length > 0 && (
                    <div className="select-box">
                        <select id='select' onChange={(event)=> setCssMethod(event.target.value)}>
                            <option value="css">CSS3</option>
                            <option value="scss">Sass</option>
                            <option value="less">Less</option>
                        </select>
                    </div>
                )}
                <a download={`Colors.${cssMethod}`} href={downloadUrl}>
                    <GrDownload/>
                </a>
                <button disabled={selectedColors.length <= 0 && true} onClick={() => getLink()}>
                    <GrLink/>
                </button>

            </div>
            <div className='selected-colors' onClick={() => setSelectedColors([])}>
                {selectedColors.length > 0 && <button onClick={() => setSelectedColors([])}><GrClose/></button>}
                {selectedColors.length > 0 && selectedColors.length + ' brand collected'}
            </div>
        </div>

    )

}

export default LeftBar

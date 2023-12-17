import {useState} from "react";

export const YoutubeWrapper = ({link}) => {
    const windowCoef = 0.8
    const [width, setWidth] = useState(window.innerWidth * windowCoef)
    const [height, setHeight] = useState(window.innerHeight * windowCoef)
    return <>
        <iframe width={width} height={height} src={link}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
    </>
}
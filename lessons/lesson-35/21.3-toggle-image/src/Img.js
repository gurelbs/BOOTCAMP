import React,{useState} from 'react'

export default function Img({src}) {
  const [ isHover, setIsHover] = useState(false)
    return ( 
        <img
            src={src}
            alt='nature'
            style={{filter: `${isHover ? 'grayscale(0%)' : 'grayscale(100%)'}`}}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        />
    );
}

// optional with useEffect and useRef-->

// useEffect(() => {
//     const changeColor = () => {
//       return isHover 
//       ? imgRef.current.style.filter = 'grayscale(0%)'
//       : imgRef.current.style.filter = 'grayscale(100%)' 
//   }
//     changeColor()
// },[isHover])
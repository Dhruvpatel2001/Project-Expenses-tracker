import { useEffect, useState } from "react"


export const useWindowSize = () => {
    const[size,setSize] = useState([0,0])


    useEffect(()=>{
        const upDateSize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }

        window.addEventListener('resize',upDateSize)

        return () => window.removeEventListener('resize',upDateSize)
    },[])

    return{
        width: size[0],
        height: size[0]
    }
}
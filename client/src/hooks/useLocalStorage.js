import { useEffect, useState } from "react"

function getInitialValue(key, initialValue){
    const tempValue = localStorage.getItem(key)
    if (tempValue) return tempValue
    if (initialValue instanceof Function) return initialValue()
    return initialValue
}

export default function useLocalStorage(key, initialValue){
    const [value, setValue] = useState(() => {
        return getInitialValue(key, initialValue)
    })

    useEffect(() => {
      localStorage.setItem(key, value)
      // eslint-disable-next-line
    }, [value])
    

    return [value, setValue]
}
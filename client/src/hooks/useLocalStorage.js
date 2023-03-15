import { useEffect, useState } from "react"

function getInitialValue(key, initialValue){
    const savedValue = localStorage.getItem(key)
    if (savedValue) return savedValue
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
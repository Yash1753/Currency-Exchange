
import {useEffect, useState} from "react";



function useCurrencyInfo(currency) {
    const [data,setData] = useState({});
    const BASE_URL = import.meta.env.VITE_API_KEY

    useEffect(() => {
        let url = `${BASE_URL}/${currency}.json`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))

        console.log(data)
    },[currency])

    return data;
}


export default useCurrencyInfo;
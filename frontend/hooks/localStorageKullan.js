import { useState } from "react";


export function useLocalStorage(key, value) {

    const [data, setData] = useState(() => {
        const dataFromLocalStorage = localStorage.getItem(key);

        if(dataFromLocalStorage)
            return JSON.parse(dataFromLocalStorage);

        localStorage.setItem(key, JSON.stringify(value));
        return value;
    });

    function hUpdate(valueNew) {

        localStorage.setItem(key, JSON.stringify(valueNew));
        setData(valueNew);
    }

    return [data, hUpdate];
}
import { useState } from "react";
import { useLocalStorage } from "./localStorageKullan";



export function useGeceModuAc(modeInitial) {

    const [storedMode, updateStoredMode] = useLocalStorage("nightMode", modeInitial);
    
    const [mode, setMode] = useState(storedMode);

    function updateMode(modeNew) {
        updateStoredMode(modeNew);
        setMode(modeNew);
    }

    return [mode, updateMode];
}
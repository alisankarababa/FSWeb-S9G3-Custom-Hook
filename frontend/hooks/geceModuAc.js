import { useState } from "react";


export function useGeceModuAc(modeInitial) {

    const [mode, setMode] = useState(modeInitial);

    function hSetMode(modeNew) {
        setMode(modeNew);
    }

    return [mode, hSetMode];
}
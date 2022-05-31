import { useState, useEffect } from "react";


export const useDataSource = getResourceFunc => {
    const [dataSource, setDataSource] = useState(null);

    useEffect(() => {
        (async () => {
            const result = await getResourceFunc();
            setDataSource(result);
        })();
    }, [getResourceFunc]);

    return dataSource;
}
import React, { useState, useEffect} from 'react'
import GitHubProjectsContext from "./index"

const GitHubProjectsContextProvider = ({ initialValue ,children }) => {
    const [ data , setData ] = useState([]);
console.log(data)
    const updateData = (newValue) => {
        setData(newValue);
    };

    useEffect(() => {
        updateData(initialValue);
    }, [initialValue]);

    return(
        <GitHubProjectsContext.Provider value={{ data , updateData }} >
            {children}
        </GitHubProjectsContext.Provider>
    )

}

export default GitHubProjectsContextProvider;
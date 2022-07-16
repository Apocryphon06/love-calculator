import { createContext } from "react";
import { useState } from "react";

export const ResponceContext = createContext();

export const ResponceContextProvider = (props) => {
    const [details, setDetails] = useState({
        fname: "",
        percentage: "",
        result: "",
        sname: "",
    })
    return(
        <ResponceContext.Provider value={[details,setDetails]}>
            {props.children}
        </ResponceContext.Provider>
    );
}
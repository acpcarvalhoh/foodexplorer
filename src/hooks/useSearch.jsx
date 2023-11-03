import { createContext, useContext, useState } from "react";

const SearchContext = createContext({});

function SearchProvider({children}){
    const [search, setSearch] = useState("");
    const [orders, setOrders] = useState([]);
    const [newOrders, setNewOrders] = useState("");
    
    return (
        <SearchContext.Provider value={{
            search, 
            setSearch, 
            orders, 
            setOrders,
            newOrders, 
            setNewOrders
        }}>
            {children}
        </SearchContext.Provider>
    )
};


function useSearch(){
    const context = useContext(SearchContext);

    return context;
};

export { SearchProvider, useSearch }
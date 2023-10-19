import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData]= useState({});

    async function signIn({ email, password }){
        if(!email || !password){
            return alert("Preecha todos campos")
        }

        try{
            const response = await api.post("/sessions", {email, password});
            const { user, token } = response.data;

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token);

            setData({ user, token });

        }catch(error){
            if(error.response){
                alert(error.response.data.message);

            }else{
                alert("Não foi possível entrar!");
            };
        };
    };

    function hanleLogout(){
        localStorage.removeItem("@foodexplorer:user");
        localStorage.removeItem("@foodexplorer:token");

        setData({});
    };


    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user");
        const token = localStorage.getItem("@foodexplorer:token");

        console.log(token);
        
        if(user && token){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        };

    }, []);


    return(
        <AuthContext.Provider value={{ 
            user: data.user,
            signIn,
            hanleLogout 
        }}>
            {children}
        </AuthContext.Provider>
    )
};


function useAuth(){
    const context = useContext(AuthContext);

    return context;
};

export { AuthProvider, useAuth};
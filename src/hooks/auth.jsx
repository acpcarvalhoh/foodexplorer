import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from 'react-toastify';

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData]= useState({});
    const [isLoading, setIsLoading] = useState(false);

    async function signIn(data){
        
        try{
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const response = await api.post("/sessions", data, { withCredentials: true });
            
            const { user } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            
            setData({ user });

        }catch(error){
            if(error.response){
                toast.error(error.response.data.message);

            }else{
                toast.error("Não foi possível entrar!");
            };

        }finally{
            setIsLoading(false);
        };
    };

    function logout(){
        localStorage.removeItem("@foodexplorer:user");

        setData({});
    };


    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user");

        if(user){
            setData({
                user: JSON.parse(user)
            });
        };

    }, []);


    return(
        <AuthContext.Provider value={{ 
            user: data.user,
            signIn,
            logout,
            isLoading 
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
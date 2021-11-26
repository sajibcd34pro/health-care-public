import { createContext } from "react";
import useCart from "../hooks/useCart";
import useFirbase from "../hooks/useFirbase";
import useServices from "../hooks/useServices";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    // hooks
    const AllContexts = useFirbase();
    const {services} = useServices();
    const { addToCart, selectedService } = useCart();
    
    const data = { AllContexts, services, addToCart, selectedService};
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
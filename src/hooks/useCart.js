import { useState } from "react";


const useCart = () => {
    const [selectedService, setSelecetedService] = useState([]);
  
    function addToCart(service) {
        const isAdd = selectedService.find(
            (selected) => selected.key === service.key
        );

        
        if (isAdd) {
           alert('already added')
            
        } else {
            const newSelection = [...selectedService, service];
            setSelecetedService(newSelection)
        }
        
    }
    

    return {addToCart, selectedService}
};

export default useCart;
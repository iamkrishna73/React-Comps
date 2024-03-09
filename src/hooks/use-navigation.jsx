import { useContext } from "react";
import NavigationContext from "../context/Navigation";

function useNavigaton() {
    return useContext(NavigationContext)
}

export default useNavigaton;
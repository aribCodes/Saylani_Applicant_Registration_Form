import { createContext,useContext,useState } from "react";
import Cookies from 'js-cookie';
const GlobalContext=createContext()

export const useGlobalContext=() => useContext(GlobalContext)

const AppContext=({children})=>{
    const [applicantData,setApplicantData]=useState({})
    const [coursesData,setCoursesData]=useState({})
    const token=Cookies.get("JWT_TOKEN")
    console.log("Token",token)
    const [jwtToken,setJwtToken]=useState(token)

    return (
        <GlobalContext.Provider value={{applicantData,setApplicantData,coursesData, setCoursesData}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;
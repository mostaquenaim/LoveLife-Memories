import { createContext, useState } from "react";

export const ProjectContext = createContext(null);

const Provider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    
    const info ={
        loading,
        setLoading
    }

    return (
        <ProjectContext.Provider value={info}>
            {children}
        </ProjectContext.Provider>
    );
};

export default Provider;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useValidItemName = ():void => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/404');
    }, [navigate]);
}
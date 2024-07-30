import { useState , useEffect } from "react";
import {Header} from "../../components/Header"
import benefits from "../../Images/premium.jpg"
import { Footer } from "../../components/Footer";
import "./Benefits.css"
export const Benefits = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
    return (
        <div>
        <Header
        backgroundImage={benefits}
        title="Benefits"
        isMounted={isMounted}
        repeat="no-repeat"
        bgSize="cover"
      /> 
      <div>
        Benefits
      </div>
      <Footer />
      </div>
    )
}
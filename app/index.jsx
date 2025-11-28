import { useEffect } from "react";
import { useRouter } from "expo-router";
import Logoanimation from "./components/Logoanimation";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/auth/Login"); 
    }, 1200); 

    return () => clearTimeout(timer);
  }, []);

  return <Logoanimation />;
}

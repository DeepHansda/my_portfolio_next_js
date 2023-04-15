import ContactBar from "@/Components/ContactSidebar/ContactBar";
import Navbar from "@/Components/Navbar/Navbar";
import Sidebar from "@/Components/Sidebar/Sidebar";
import axios from "axios";
import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({});
const axiosClient = axios.create({
  baseURL: "https://my-portfolio-backend-deephansda.vercel.app/api",
  headers: { "Content-Type": "application/json" },
});

function AppContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [offset, setOffset] = useState(0);
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setScreen(window.innerWidth)
    function handleSize() {
      setScreen(window.innerWidth);
    }
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const getAllProjects = async () => {
    setIsLoading(true);
    return await axiosClient
      .get("/getProjects")
      .then((res) => {
        setIsLoading(false);
        return res;
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const contact = async (data) => {
    setIsLoading(true);
    return await axiosClient
      .post("/createContact", data)
      .then((res) => {
        setIsLoading(false);
        return res;
      })
      .catch((error) => {
        setIsLoading(false);
        return error;
      });
  };

  const getExpriences = async()=>{
    setIsLoading(true)
    return await axiosClient.get('/getExpriences').then((res) => {
      setIsLoading(false);
      return res;
    })
    .catch((error) => {
      setIsLoading(false);
      return error;
    });
  }

  return (
    <AppContext.Provider
      value={{
        axiosClient,
        getAllProjects,
        contact,
        isLoading,
        offset,
        screen,
        setOpenSideBar,
        openSideBar,
        getExpriences
      }}
    >
      <div className="App" style={{ overflowX: "hidden" }}>
        <div
          className="universalBackground"
          style={{ display: screen < 600 ? "none" : "block" }}
        >
          <Image
            src={
              "https://res.cloudinary.com/manjiro/image/upload/v1657333328/portfolio_images/xor/background_uwvhvi.png"
            }
            width={4002}
            height={28142}
            alt="background"
            style={{
              transform: `translateY(${offset * 0.5}px)`,
            }}
          />
        </div>
        <Navbar setOpenSideBar={setOpenSideBar} />
        <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <ContactBar />
        {children}
      </div>
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);


export default AppContextProvider;

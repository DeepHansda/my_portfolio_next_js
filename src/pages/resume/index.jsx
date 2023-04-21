import Loader from "@/Components/UI/Loader";
import { useAppContext } from "@/Context/AppContext";
import { Button } from "@mui/material";
import Head from "next/head";
import { Fragment, useEffect } from "react";
export default function Resume() {
  const { setOpenSideBar, resume, isLoading } = useAppContext();

  useEffect(() => {
    setOpenSideBar(false);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Deep Hansda | Resume</title>
      </Head>
      <Loader isLoading={isLoading} />

      <div className="resume">
        <div className="resume-container">
          <div className="resume-download-button">
            <a href={`${resume.resume}/view?usp=sharing`} target="_blank">
              <Button variant="contained" fullWidth color="secondary">
                Download Resume
              </Button>
            </a>
          </div>

          <iframe
            src={`${resume.resume}/preview`}
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
}

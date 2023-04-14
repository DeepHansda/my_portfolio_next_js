import { useAppContext } from "@/Context/AppContext";
import { Button } from "@mui/material";
import Head from "next/head";
import { Fragment, useEffect } from "react";
export default function Resume() {
  const { setOpenSideBar } = useAppContext();
  useEffect(() => {
    setOpenSideBar(false);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Deep Hansda | Resume</title>
      </Head>
      <div className="resume">
        <div className="resume-container">
          <div className="resume-download-button">
            <a
              href="https://drive.google.com/file/d/1g-wMWPzy0ZXblhYtfBmRE2SSpdVWRrqU/view?usp=sharing"
              target="_blank"
            >
              <Button variant="contained" fullWidth color="secondary">
                Download Resume
              </Button>
            </a>
          </div>

          <iframe
            src="https://drive.google.com/file/d/1g-wMWPzy0ZXblhYtfBmRE2SSpdVWRrqU/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
}

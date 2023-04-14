import { useAppContext } from "@/Context/AppContext";
import { Fragment, useEffect } from "react";
import ContactBar from "../../Components/UI/ContactBar/ContactBar";
import EmailNumber from "../../Components/UI/EmailNumber/EmailNumber";
import Form from "../../Components/UI/Form/Form";
import Head from "next/head";
function Contact() {
  const { setOpenSideBar } = useAppContext();
  useEffect(() => {
    setOpenSideBar(false);
  }, []);

  return (
    <Fragment>
    <Head>
      <title>Deep Hansda | Contact</title>
    </Head>
    <div className="contact">
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header"></div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div className="app-main-content">
                  <EmailNumber />
                </div>
                <div class="app-contact">
                  <ContactBar />
                </div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Contact;

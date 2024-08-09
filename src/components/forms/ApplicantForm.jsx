import { useEffect, useState } from "react";
import Registration from "./applicant form/registration/Registration";
import Payment from "./applicant form/payment/Payment"
import DownloadIdCard from "./applicant form/download_id_card_form/DownloadIdCard";
import ResultForm from "./applicant form/result_form/ResultForm";
import {useGlobalContext} from "../../context/context"
import "./applicantForm.css";
import { Row } from "antd";

const ApplicantForm = () => {

  const [switching, setSwitching] = useState(1);
  const { coursesData, setCoursesData } = useGlobalContext({}) || {};
  useEffect(() =>{  
    (async()=>{
      const getCourses = await fetch("http://localhost:3005/applicant/get-courses");
      const response = await getCourses.json();
      setCoursesData(response)
      console.log("courses received: ", response);
    })()
  },[coursesData])
  return (
    <Row>
    <div className="mainContainer">
      <div className="mainContainerHeader">
        <div className="saylaniLogo"></div>
      </div>
      <div className="regitrationContainer">
        <div className="switch">
          <button
            className={switching==1?"active":"disable"}
            onClick={() => {
              setSwitching(1);
            }}
          >
            Registration
          </button>

          <button
            className={switching==2?"active":"disable"}
            onClick={() => {
              setSwitching(2);
            }}
          >
            Payment
          </button>

          <button
            className={switching==3?"active":"disable"}
            onClick={() => {
              setSwitching(3);
            }}
          >
            Download ID Card
          </button>
          <button
            className={switching==4?"active":"disable"}
            onClick={() => {
              setSwitching(4);
            }}
          >
            Results
          </button>
        </div>
        {switching == 1 && <Registration />}
        {switching == 2 && <Payment />}
        {switching == 3 && <DownloadIdCard />}
        {switching == 4 && <ResultForm />}
      </div>
    </div>
    </Row>
  );
};

export default ApplicantForm;

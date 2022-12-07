import React from "react";
import "./Jobs.css";

const Jobs = (props) => {
  return (
    <div id="Div_Jobs_JSX" className="Div_Jobs_CSS">
      {props.jobsInfo.map((job, index) => {
        return (
          <div key={index} className={job.featured ? "Div_JobInfo_CSS Div_JobInfoFuture_CSS" : "Div_JobInfo_CSS"}>
            <div className="Div_Logo_CSS">
              <img src={job.logo} className="Img_Logo_CSS" alt="Logo" />
            </div>
            <div className="Div_Info_CSS">
              <div className="Div_Info_FirstRow_CSS">
                <p className="P_CompanyName_CSS">{job.company}</p>
                {job.new && <p className="P_New_CSS">New</p>}
                {job.featured && (
                  <p className="P_Featured_CSS" key={index}>
                    Featured
                  </p>
                )}
              </div>
              <p className="P_Info_SecondRow_CSS">{job.position}</p>
              <div className="Div_Info_ThirdRow_CSS">
                <p>{job.postedAt}</p>
                <p>.</p>
                <p>{job.contract}</p>
                <p>.</p>
                <p>{job.location}</p>
              </div>
            </div>
            <div className="Div_Tags_CSS">
              <p
                className="P_Tags_CSS"
                onClick={(e) => {
                  props.addTags(e.target.textContent);
                }}
              >
                {job.role}
              </p>
              <p
                className="P_Tags_CSS"
                onClick={(e) => {
                  props.addTags(e.target.textContent);
                }}
              >
                {job.level}
              </p>
              {job.languages.map((language, i) => (
                <p
                  className="P_Tags_CSS"
                  onClick={(e) => {
                    props.addTags(e.target.textContent);
                  }}
                  key={"l" + i}
                >
                  {language}
                </p>
              ))}
              {job.tools.map((tools, i) => (
                <p
                  className="P_Tags_CSS"
                  onClick={(e) => {
                    props.addTags(e.target.textContent);
                  }}
                  key={"t" + i}
                >
                  {tools}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;

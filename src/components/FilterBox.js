import React from "react";
import "./FilterBox.css";

const FilterBox = (props) => {
  return props.arrayTags.length > 0 ?(
    <div id="Div_FilterBox_JSX" className="Div_FilterBox_CSS">
      <div className="Div_Tag_CSS">
        {props.arrayTags.map((tag, index) => {
          return (
            <p id={"P_Tag_"+index+"_JSX"} className="P_Tag_CSS" key={index}>
              {tag}
              <i className="I_Times_CSS fas fa-times" onClick={()=>{
                props.removeTage(document.getElementById("P_Tag_" + index + "_JSX").textContent);
              }}></i>
            </p>
          );
        })}
      </div>
      <div className="Div_RemoveTag_CSS">
        <p className="P_RemoveTag_CSS" onClick={props.removeAllTags}>Clear</p>
      </div>
    </div>
  ) : <p className="P_Nothing_CSS">Nothing To Show !</p>;
};

export default FilterBox;

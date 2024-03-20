import React from "react";

export default function blogPageTemplate({title, text1, image1, text2, image2, text3, image3, text4}) {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 text-center">
            <h1>{title}</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-8 text-justify">
            <p>{text1}</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-8 text-justify">
            <img src={image1} className="img-fluid"/>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-8 text-justify">
            <p>{text2}</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-8 text-justify">
            <img src={image2} className="img-fluid"/>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-8 text-justify">
            <p>{text3}</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-8 text-justify">
            <img src={image3} className="img-fluid"/>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-8 text-justify">
            <p>{text4}</p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import image1 from "../../../media/images/faq/image-1.png";

export default function () {
  return (
    <>
      <div className="row">
        <div className="col col-sm-12 d-flex justify-content-center">
          <h1>FAQs</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-5 offset-sm-1 d-flex justify-content-center align-items-center">
          Lorem ipsum dolor sit amet consectetur. Feugiat tellus lectus dolor
          leo. Quis amet blandit viverra neque at. Iaculis varius suscipit morbi
          faucibus rutrum.
        </div>
        <img className="img-fluid col col-sm-5" src={image1} />
      </div>
    </>
  );
}

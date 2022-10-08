import { useState } from "react";

export default function CustomCollapse({ description, element }) {
  const [visible, setVisible] = useState(false);

  const onClickEvent = () => {
    setVisible(!visible);
  };

  const collapse = () => {
    return visible ? " show" : "";
  };
  return (
    <>
      <div id="accordion">
        <div className="card">
          <div className="card-header p-0" id="headingOne">
            <h5 className="mb-0">
              <button className="btn btn-link" onClick={onClickEvent}>
                {description} <i className="fas fa-chevron-down"></i>
              </button>
            </h5>
          </div>

          <div id="collapseOne" className={`collapse ${collapse()}`}>
            <div className="card-body">{element}</div>
          </div>
        </div>
      </div>
    </>
  );
}

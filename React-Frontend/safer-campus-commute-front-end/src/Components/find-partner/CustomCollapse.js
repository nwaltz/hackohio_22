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
        <div class="card">
          <div class="card-header p-0" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" onClick={onClickEvent}>
                {description} <i class="fas fa-chevron-down"></i>
              </button>
            </h5>
          </div>

          <div id="collapseOne" className={`collapse ${collapse()}`}>
            <div class="card-body">{element}</div>
          </div>
        </div>
      </div>
    </>
  );
}

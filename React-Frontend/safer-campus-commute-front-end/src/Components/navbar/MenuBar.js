import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";

import MenuBarItem from "./MenuBarItem";

export default function MenuBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        type="button"
        variant="outline-dark"
        onClick={handleShow}
        className="three-bar-container"
      >
        <em className="custom-fa-3bar fas fa-bars"></em>
      </Button>

      <Offcanvas
        className="center"
        show={show}
        onHide={handleClose}
        placement="top"
      >
        <Offcanvas.header closeButton />
        <Offcanvas.Body>
          <MenuBarItem
            title="Contact"
            href="firstPage"
            handleClose={() => handleClose()}
          />
          <MenuBarItem
            title="Skills"
            href="secondPage"
            handleClose={() => handleClose()}
          />
          <MenuBarItem
            title="Personal Projects"
            href="lastPage"
            handleClose={() => handleClose()}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

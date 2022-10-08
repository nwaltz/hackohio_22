import NavBarItem from "./NavBarItem";

import "./navbar.css";

export default function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            {/* navbar for larger screens */}
            <div className="collapse navbar-collapse">
              <div className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavBarItem href={"/find-partner"} title="Find Partner" />
                <NavBarItem href={"/your-request"} title="Your Requests" />
                <NavBarItem href={"/walk-request"} title="Walk Requests" />
                <NavBarItem href={"#"} title="Matches" />
                <NavBarItem href={"/profile"} title="Profile" />
              </div>
            </div>
            {/* 3 line menu for smaller screens */}
            {/* <MenuBar href_resume={resume} /> */}
          </div>
        </nav>
      </header>
    </>
  );
}

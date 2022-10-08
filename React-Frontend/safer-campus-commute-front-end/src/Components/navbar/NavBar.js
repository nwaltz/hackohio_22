import NavBarItem from "./NavBarItem";

import "./navbar.css";
import MenuBar from "./MenuBar";

export default function NavBar() {
  const paths = [
    { href: "/find-partner", title: "Find Partner" },
    { href: "/your-request", title: "Your Requests" },
    { href: "/walk-request", title: "Walk Requests" },
    { href: "#", title: "Matches" },
    { href: "/profile", title: "Profile" },
  ];
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            {/* navbar for larger screens */}
            <div className="collapse navbar-collapse">
              <div className="navbar-nav me-auto mb-2 mb-lg-0">
                {paths.map((element) => {
                  console.log(element);
                  return (
                    <NavBarItem
                      href={element["href"]}
                      title={element["title"]}
                    />
                  );
                })}
              </div>
            </div>
            {/* 3 line menu for smaller screens */}
            <MenuBar />
          </div>
        </nav>
      </header>
    </>
  );
}

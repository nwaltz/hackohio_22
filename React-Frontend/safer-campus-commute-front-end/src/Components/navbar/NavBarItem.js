export default function NavBarItem({ href, title }) {
  return (
    <>
      <a className="nav-item nav-link" href={href}>
        <h5>{title}</h5>
      </a>
    </>
  );
}

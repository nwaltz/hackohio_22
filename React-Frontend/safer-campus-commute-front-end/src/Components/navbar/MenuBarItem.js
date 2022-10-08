export default function MenuBarItem({ href, title, ...props }) {
  const goToPage = () => {
    props.handleClose();
    // time out to fix issue where it would not scroll to specific part of page while using offcanvas from bootstrap
    setTimeout(() => {
      document.getElementById(href).scrollIntoView();
    }, 400);
  };

  return (
    <button
      type="button"
      className="text-reset nav-item nav-link"
      data-bs-dismiss="offcanvas"
      onClick={() => goToPage()}
    >
      <h5>{title}</h5>
    </button>
  );
}

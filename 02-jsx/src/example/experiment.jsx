export function Header() {
  return (
    <>
      <nav style={{ display: "flex", alignItems: "center" }}>
        <a style={{ textDecoration: "none" }} href="#home">
          Logo
        </a>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            listStyle: "none",
            gap: "20px",
          }}
        >
          <li>
            <a style={{ textDecoration: "none" }} href="">
              About
            </a>
          </li>
          <li>
            <a style={{ textDecoration: "none" }} href="">
              Features
            </a>
          </li>
          <li>
            <a style={{ textDecoration: "none" }} href="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

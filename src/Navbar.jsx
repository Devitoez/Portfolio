import './Navbar.css';

const sections = ["Home", "Projects", "About Me", "Blog"].reverse().map(sec => <a href={sec.toLowerCase()}>{sec}</a>);

export default function Navbar() {
  return (
    <section className="navbar">
      <div className="navbar-links">
        <ul>{sections}</ul>
      </div>
    </section>
  );
}

import { ModeToggle } from "../mode-toggle";

const Navbar: React.FC = () => {
  return (
    <header className="border-b py-2">
      <div className="container flex items-center justify-between">
        <h3>animated-tab</h3>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;

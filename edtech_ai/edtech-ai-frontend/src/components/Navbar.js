import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">EdTech AI</h1>
        <div>
          <Link to="/" className="px-4">Home</Link>
          <Link to="/process" className="px-4">Process Video</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

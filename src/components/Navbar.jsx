function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <h1 className="text-xl font-bold">
        MB.
      </h1>

      <div className="flex gap-6">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
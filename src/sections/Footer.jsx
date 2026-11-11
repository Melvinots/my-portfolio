function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-8 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Melvin Bonde. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm font-medium text-gray-500 transition hover:text-[#213A57]"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-8 py-6 text-center">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Melvin Bonde. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
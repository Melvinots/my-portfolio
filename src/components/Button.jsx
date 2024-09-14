const Button = ({ label, Icon }) => {
  return (
    <div>
      <button className="flex font-montserrat items-center space-x-2 text-white bg-[#14919B] px-4 py-3 rounded-md whitespace-nowrap hover:bg-[#0AD1C8] focus:outline-none focus:ring-2 focus:ring-[#213a57]">
        <span>{label}</span>
        <Icon size={20} />
      </button>
    </div>
  );
};

export default Button;

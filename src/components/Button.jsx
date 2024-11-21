const Button = ({ label, Icon }) => {
  return (
    <div>
      <button className="flex font-montserrat items-center text-sm space-x-2 text-[#333333] bg-[#D3D3D3] px-4 py-3 rounded-3xl whitespace-nowrap hover:bg-[#0AD1C8] focus:outline-none focus:ring-2 focus:ring-[#213a57]">
        <span>{label}</span>
        <Icon size={16} />
      </button>
    </div>
  );
};

export default Button;

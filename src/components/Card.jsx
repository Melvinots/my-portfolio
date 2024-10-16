const Card = ({title, establishment, role, Icon}) => {
  return (
    <div key={title} className="bg-white shadow-lg rounded-lg p-8 max-w-96">
        <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center space-x-5">
          {title}
          <Icon className="ml-3" size={25} />
        </h2>
        <div className="">
            <h3 className="text-xl font-semibold">{role}</h3>
            <p className="text-gray-500">{establishment}</p>
        </div>
    </div>
  )
}

export default Card;

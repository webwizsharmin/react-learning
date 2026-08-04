const Card = ({ title, subtitle, description, actions, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <div className="mb-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      {description && <p className="text-gray700 mb-3">{description}</p>}

      {children && <div className="mb-3">{children}</div>}
      {actions && <div className="flex gap-2"> {actions} </div>}
    </div>
  );
};

export default Card;

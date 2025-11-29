import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-600 mt-2">{email}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Address</h3>
        <p className="text-gray-600">
          {address.suite}, {address.street}, {address.city}, {address.zipcode}
        </p>
      </div>

      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>Phone: {phone}</span>
        <span>Website: {website}</span>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="text-gray-600 italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
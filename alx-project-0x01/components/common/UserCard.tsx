import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, address }) => {
  return (
    <div className="p-6 bg-white shadow rounded-lg hover:shadow-xl transition">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-700">{phone}</p>
      <p className="text-blue-600">{website}</p>

      <p className="mt-2 text-sm text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;

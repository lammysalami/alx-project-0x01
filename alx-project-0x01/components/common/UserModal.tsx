import { UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({
  user,
  setUser,
  onClose,
  onSubmit,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={user.name}
            className="w-full border p-2 mb-3"
            placeholder="Full Name"
          />

          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={user.username}
            className="w-full border p-2 mb-3"
            placeholder="Username"
          />

          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
            className="w-full border p-2 mb-3"
            placeholder="Email"
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-700 px-4 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;

import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isOpen, setOpen] = useState(false);
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleAddUser = (newUser: UserData) => {
    console.log("NEW USER:", newUser);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>

          <button
            className="bg-blue-700 text-white px-4 py-2 rounded"
            onClick={() => setOpen(true)}
          >
            Add User
          </button>
        </div>

        {posts.map((u) => (
          <UserCard key={u.id} {...u} />
        ))}
      </main>

      {isOpen && (
        <UserModal
          user={user}
          setUser={setUser}
          onClose={() => setOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return { props: { posts } };
}

export default Users;

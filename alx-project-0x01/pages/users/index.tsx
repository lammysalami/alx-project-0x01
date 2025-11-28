import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  return (
    <div>
      <Header />

      <main className="p-6 grid grid-cols-3 gap-6">
        {posts.map((user, i) => (
          <UserCard key={i} {...user} />
        ))}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();

  return { props: { posts } };
}

export default Users;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

function UserList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching users</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;

import { useEffect, useState } from "react";
import { requestUsers } from "../api/users";
import type { User } from "../api/users";
import { Loader } from "../components/Loader";

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState({
    name: "",
    age: "",
    limit: 4,
    offset: 0,
  });

  const [filters, setFilters] = useState({ name: "", age: "", offset: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery((prev) => ({
        ...prev,
        name: filters.name,
        age: filters.age,
        offset: filters.offset,
      }));
    }, 500);

    return () => clearTimeout(timer);
  }, [filters]);

  useEffect(() => {
    setLoading(true);
    requestUsers(query)
      .then(setUsers)
      .finally(() => setLoading(false));
  }, [query]);

  const nextPage = () =>
    setQuery((prev) => ({ ...prev, offset: prev.offset + prev.limit }));

  const prevPage = () =>
    setQuery((prev) => ({
      ...prev,
      offset: Math.max(prev.offset - prev.limit, 0),
    }));

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Users</h2>

      <div style={{ display: "flex", gap: "8px" }}>
        <input
          placeholder="Name"
          onChange={(e) => setFilters((f) => ({ ...f, name: e.target.value }))}
        />
        <input
          placeholder="Age"
          type="number"
          onChange={(e) => setFilters((f) => ({ ...f, age: e.target.value }))}
        />
      </div>

      {loading ? (
        <Loader />
      ) : (
        users.map((user) => (
          <div key={user.id} style={{ marginTop: "8px" }}>
            {user.name}, {user.age}
          </div>
        ))
      )}
      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        <div>
          <span>By page:</span>
          <select
            style={{ marginLeft: "4px" }}
            value={query.limit}
            onChange={(e) =>
              setQuery((prev) => ({
                ...prev,
                limit: Number(e.target.value),
                offset: 0,
              }))
            }
          >
            <option value={2}>2</option>
            <option value={4}>4</option>
            <option value={8}>8</option>
          </select>
        </div>
        <button onClick={() => prevPage()}>prev</button>
        <span>page: </span>
        <button onClick={() => nextPage()}>next</button>
      </div>
    </div>
  );
};

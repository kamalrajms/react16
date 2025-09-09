import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setuser(data);
        setloading(false);
      });
  }, []);
  return (
    <div>
      <h1>User list</h1>
      {loading ? (
        <p>loading.....</p>
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              <Link to={`/BlogDetail/${user.id}`}>
                {user.name} - {user.email}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import "./styles.css";
import Users from "./Users";

export default function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  function fetchData() {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Users users={users} />
    </div>
  );
}

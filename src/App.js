import "./styles.css";
import { useState } from "react";

const table = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

export default function App() {
  const [data, setData] = useState(table);
  const [sortBy, setSortBy] = useState(null);

  const handleSort = (key) => {
    const sortedData = [...data].sort((a, b) => {
      if (b[key] < a[key]) return -1;
      if (b[key] > a[key]) return 1;
      return 0;
    });
    setData(sortedData);
    setSortBy(key);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={() => handleSort("date")}>Sort by Date</button>
        <button onClick={() => handleSort("views")}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

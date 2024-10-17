'use client'
import React, { useState } from "react";

const SortingExample = () => {
  const [items, setItems] = useState([
    { name: "Item A", price: 30 },
    { name: "Item B", price: 20 },
    { name: "Item C", price: 25 },
  ]);

  const [sortType, setSortType] = useState("");

  // Fungsi untuk sorting dinamis
  const handleSort = (type:string) => {
    let sortedItems = [...items];

    if (type === "priceAsc") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (type === "priceDesc") {
      sortedItems.sort((a, b) => b.price - a.price);
    } else if (type === "nameAsc") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "nameDesc") {
      sortedItems.sort((a, b) => b.name.localeCompare(a.name));
    }

    setItems(sortedItems);
    setSortType(type); // Mengupdate state sortType untuk UI
  };

  return (
    <div>
      <h2>Sorting Example</h2>
      
      {/* Button untuk memilih sorting */}
      <div className="buttons">
        <button onClick={() => handleSort("priceAsc")}>
          Sort by Price (Asc)
        </button>
        <button onClick={() => handleSort("priceDesc")}>
          Sort by Price (Desc)
        </button>
        <button onClick={() => handleSort("nameAsc")}>
          Sort by Name (Asc)
        </button>
        <button onClick={() => handleSort("nameDesc")}>
          Sort by Name (Desc)
        </button>
      </div>

      <h3>Sorted by: {sortType}</h3>

      {/* Menampilkan items yang sudah disorting */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortingExample;

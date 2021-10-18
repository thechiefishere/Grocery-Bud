import { useState, useEffect } from "react";
import Item from "./components/Item";

function App() {
  const [newItem, setNewItem] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [flashText, setFlashText] = useState("");
  const [editing, setEditing] = useState(false);
  const [idToEdit, setIdToEdit] = useState(-1);

  useEffect(() => {
    setTimeout(() => {
      setFlashText("");
    }, 1000);
  }, [flashText]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      return handleEdit();
    }
    if (newItem !== "") {
      setFlashText("Item added to the list");
      setAllItems([...allItems, newItem]);
    }

    setNewItem("");
  };

  const deleteItem = (id) => {
    const remainingitems = allItems.filter((item, index) => {
      return index != id;
    });

    setAllItems(remainingitems);
    setFlashText("Item Removed");
  };

  const editItem = (id, item) => {
    setNewItem(item);
    setEditing(true);
    setIdToEdit(id);
  };

  const handleEdit = () => {
    if (newItem != "" && idToEdit != -1) {
      allItems[idToEdit] = newItem;
    }

    setFlashText("Value Changed");
    setIdToEdit(-1);
    setNewItem("");
    setEditing(false);
  };

  return (
    <main>
      <p className="flash">{flashText}</p>
      <h1>Grocery Bud</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newItem"
          placeholder="e.g eggs"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
          value={newItem}
        />
        <input
          type="submit"
          value={editing ? "Edit" : "Submit"}
          name="submit"
        />
      </form>
      <div className="all-items">
        {allItems.map((val, index) => {
          return (
            <Item
              key={index}
              id={index}
              item={val}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          );
        })}
      </div>
      <button
        className="clr-btn"
        onClick={() => {
          setAllItems([]);
          setFlashText("Empty List");
        }}
      >
        Clear Items
      </button>
    </main>
  );
}

export default App;

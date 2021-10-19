import { useState, useEffect } from "react";
import Item from "./components/Item";

function App() {
  const [newItem, setNewItem] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [flashText, setFlashText] = useState("");
  const [editing, setEditing] = useState(false);
  const [idToEdit, setIdToEdit] = useState(-1);
  const [addedNewItem, setAddedNewItem] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlashText("");
    }, 1000);
  }, [flashText]);

  useEffect(() => {
    if (addedNewItem) setNewItem("");
  }, [addedNewItem]);

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
    setAddedNewItem(true);
  };

  const deleteItem = (id) => {
    const remainingitems = allItems.filter((item) => {
      return item.id != id;
    });

    setAllItems(remainingitems);
    setFlashText("Item Removed");
  };

  const editItem = (item) => {
    setNewItem(item);
    setEditing(true);
    setIdToEdit(item.id);
  };

  const handleEdit = () => {
    if (newItem != "" && idToEdit != -1) {
      // allItems[idToEdit] = newItem;
      allItems.find((item) => {
        if (item.id === idToEdit) {
          item = { ...item, value: newItem.value };
        }
      });
    }

    setFlashText("Value Changed");
    setIdToEdit(-1);
    setNewItem("");
    setEditing(false);
  };

  return (
    <main>
      <p className="flash">{flashText}</p>
      <h1 className="title">Grocery Bud</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newItem"
          placeholder="e.g eggs"
          onChange={(e) => {
            setNewItem({
              id: new Date().getTime().toString,
              value: e.target.value,
            });
          }}
          value={newItem.value}
          className="text"
        />
        <input
          type="submit"
          value={editing ? "Edit" : "Submit"}
          name="submit"
          className="submit"
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
      {allItems.length > 0 && (
        <button
          className="clr-btn"
          onClick={() => {
            setAllItems([]);
            setFlashText("Empty List");
          }}
        >
          Clear Items
        </button>
      )}
    </main>
  );
}

export default App;

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Item = ({ item, deleteItem, editItem }) => {
  return (
    <article>
      <h4>{item.value}</h4>
      <div className="icons">
        <FaEdit className="edit-icon" onClick={() => editItem(item)} />
        <MdDelete className="delete-icon" onClick={() => deleteItem(item.id)} />
      </div>
    </article>
  );
};

export default Item;

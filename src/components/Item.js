import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Item = ({ item, id, deleteItem, editItem }) => {
  return (
    <article>
      <h4>{item}</h4>
      <div className="icons">
        <FaEdit className="edit-icon" onClick={() => editItem(id, item)} />
        <MdDelete className="delete-icon" onClick={() => deleteItem(id)} />
      </div>
    </article>
  );
};

export default Item;

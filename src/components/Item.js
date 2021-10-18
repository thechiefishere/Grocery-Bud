import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Item = ({ item, id, deleteItem, editItem }) => {
  return (
    <article>
      <h4>{item}</h4>
      <FaEdit onClick={() => editItem(id, item)} />
      <MdDelete onClick={() => deleteItem(id)} />
    </article>
  );
};

export default Item;

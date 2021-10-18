import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Item = ({ item }) => {
  return (
    <article>
      <h4>{item}</h4>
      <FaEdit />
      <MdDelete />
    </article>
  );
};

export default Item;

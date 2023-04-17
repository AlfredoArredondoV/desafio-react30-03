const Item = ({ todo }) => {
    const { email, name } = todo;

    return (
        <li
            className="fs-3 list-group-item"
        >
            {name} {email} 
        </li>
    );
};
export default Item;
export const ContactCard = ({ contact: { id, name, number}, onDelete}) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};

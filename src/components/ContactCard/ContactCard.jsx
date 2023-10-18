export const ContactCard = ({ contact: { name, number } }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
    </>
  );
};

import { nanoid } from 'nanoid';
import { ContactCard } from 'components/ContactCard/ContactCard';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={nanoid()}>
          <ContactCard contact={contact} />
        </li>
      ))}
    </ul>
  );
};

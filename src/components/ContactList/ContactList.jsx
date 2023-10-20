import { nanoid } from 'nanoid';

import { ContactCard } from 'components/ContactCard/ContactCard';

export const ContactList = ({ contacts, onDelete}) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={nanoid()}>
          <ContactCard contact={contact} onDelete={onDelete}/>
        </li>
      ))}
    </ul>
  );
};

export const Filter = ({value, filteredContacts}) => {
    return (
      <label>
        Find contact by name
        <input name="filter" type="text" value={value} onChange={filteredContacts}/>
      </label>
    );
} 
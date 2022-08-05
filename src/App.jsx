import 'modern-normalize';
// import { getStorageData } from 'storageUtils/getStorageData';
import { Container } from './components/common/Container.styled';
import { Title } from 'components/common/Title.styled';
import { MyForm } from './components/Form/Form';
import { Filter } from './components/Filter/Filter';
import { ContactsList } from './components/ContactsList/ContactsList';

import { useSelector, useDispatch } from 'react-redux/es/exports';
import { addItem, deleteItem, filterItems } from 'redux/store';

// const LS_KEY = 'contacts';

export function App() {
  const items = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setContacts(getStorageData(LS_KEY));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const validateContact = data => {
    const normalizedValue = data.name.toLowerCase();
    const result = items.find(item =>
      item.name.toLowerCase().includes(normalizedValue)
    );
    return result;
  };

  const handlerFilter = evt => {
    dispatch(filterItems(evt.target.value));
    console.log(filterItems(evt.target.value));
  };

  const deleteContact = contactId => {
    dispatch(deleteItem(contactId));
  };

  const handlerSubmit = data => {
    if (validateContact(data)) {
      alert(`${data.name} already exist`);
      return;
    } else {
      dispatch(addItem(data));
    }
  };

  return (
    <Container>
      <Title>Contact App</Title>
      <MyForm onSubmitForm={handlerSubmit} />
      <Title>Search by name</Title>
      <Filter value={filter} onChange={handlerFilter} />
      <ContactsList
        value={filter}
        options={items}
        onClickDelete={deleteContact}
      />
    </Container>
  );
}

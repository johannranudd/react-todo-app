import React, { useEffect, useState } from 'react';
import { StyledDiv } from './Todo.styled';

const Todo = () => {
  const [submittedValue, setSubmittedValue] = useState('');
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem('listItemKey');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [editFlag, setEditFlag] = useState(false);
  const [editID, setEditID] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const listItem = {
      id: new Date().getTime().toString(),
      submittedValue,
    };

    if (editFlag && submittedValue) {
      // !continue here
      list.filter((item, index) => {
        if (item.id === editID) {
          list[index] = listItem;
        }
        localStorage.setItem('listItemKey', JSON.stringify(list));
      });
      //   list[] = 'ergerg';
      //   console.log(editedItem);

      setEditFlag(false);
    } else if (submittedValue) {
      setList((prev) => {
        return [...prev, listItem];
      });
    } else {
      console.log('no value submitted');
    }
    setSubmittedValue('');
  };

  useEffect(() => {
    localStorage.setItem('listItemKey', JSON.stringify(list));
  }, [list]);

  const deleteItem = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newList);
  };

  const editItem = (id) => {
    const newItem = list.filter((item) => {
      return item.id === id;
    });
    setSubmittedValue(newItem[0].submittedValue);
    setEditID(newItem[0].id);
    setEditFlag(true);
  };

  return (
    <StyledDiv>
      <section className='todo-section'>
        <article className='todo-card'>
          <h2>Todo app</h2>
          <form action='' onSubmit={handleSubmit}>
            <input
              type='text'
              value={submittedValue}
              onChange={(e) => setSubmittedValue(e.target.value)}
            />
            <button type='submit'>Submit</button>
          </form>
          <ul className='list'>
            {list.map((item) => {
              return (
                <ListItem
                  key={item.id}
                  {...item}
                  deleteItem={deleteItem}
                  editItem={editItem}
                />
              );
            })}
          </ul>
        </article>
      </section>
    </StyledDiv>
  );
};

const ListItem = ({ submittedValue, id, deleteItem, editItem }) => {
  return (
    <div className='list-item'>
      <li>{submittedValue}</li>
      <button onClick={() => deleteItem(id)}>delete</button>
      <button onClick={() => editItem(id)}>edit</button>
    </div>
  );
};

export default Todo;

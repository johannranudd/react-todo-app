import React, { useEffect, useState } from 'react';
import { StyledDiv } from './Todo.styled';
import List from './List';
import Alert from './Alert';

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const [editFlag, setEditFlag] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, color: '', msg: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      console.log('no value');
    } else if (editFlag && inputValue) {
      console.log('editing');
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        inputValue,
      };
      setList((prev) => {
        return [...prev, newItem];
      });
      setInputValue('');
      showAlert(true, 'success', 'item added');
    }
  };

  const showAlert = (show = true, color = '', msg = '') => {
    setAlert({ show, color, msg });
  };

  const clearList = () => {
    setList([]);
  };

  return (
    <StyledDiv>
      <section className='section-center'>
        {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
        <h2>Todo App</h2>
        <form action='' onSubmit={handleSubmit}>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
        {list.length > 0 && <List list={list} clearList={clearList} />}
      </section>
    </StyledDiv>
  );
};

export default Todo;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const Todo = () => {
//   const [submittedValue, setSubmittedValue] = useState('');
//   const [list, setList] = useState(() => {
//     const saved = localStorage.getItem('listItemKey');
//     const initialValue = JSON.parse(saved);
//     return initialValue || [];
//   });
//   const [editFlag, setEditFlag] = useState(false);
//   const [editID, setEditID] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const listItem = {
//       id: new Date().getTime().toString(),
//       submittedValue,
//     };

//     if (editFlag && submittedValue) {
//       // !continue here
//       // list.filter((item, index) => {
//       //   if (item.id === editID) {
//       //     list[index] = listItem;
//       //   }
//       //   localStorage.setItem('listItemKey', JSON.stringify(list));
//       // });
//       setList(
//         list.map((item) => {
//           if (item.id === editID) {
//             return { ...item, submittedValue };
//           }
//           return item;
//         })
//       );

//       setEditFlag(false);
//     } else if (submittedValue) {
//       setList((prev) => {
//         return [...prev, listItem];
//       });
//     } else {
//       console.log('no value submitted');
//     }
//     setSubmittedValue('');
//   };

//   useEffect(() => {
//     localStorage.setItem('listItemKey', JSON.stringify(list));
//   }, [list]);

//   const deleteItem = (id) => {
//     const newList = list.filter((item) => {
//       return item.id !== id;
//     });
//     setList(newList);
//   };

//   const editItem = (id) => {
//     const newItem = list.filter((item) => {
//       return item.id === id;
//     });
//     setSubmittedValue(newItem[0].submittedValue);
//     setEditID(newItem[0].id);
//     setEditFlag(true);
//   };

//   const clearItems = () => {
//     setList([]);
//   };

//   return (
//     <StyledDiv>
//       <section className='todo-section'>
//         <article className='todo-card'>
//           <h2>Todo app</h2>
//           <form action='' onSubmit={handleSubmit}>
//             <input
//               type='text'
//               value={submittedValue}
//               onChange={(e) => setSubmittedValue(e.target.value)}
//             />
//             <button type='submit'>{editFlag ? 'Edit' : 'Submit'}</button>
//           </form>
//           <ul className='list'>
//             {list.map((item) => {
//               return (
//                 <ListItem
//                   key={item.id}
//                   {...item}
//                   deleteItem={deleteItem}
//                   editItem={editItem}
//                 />
//               );
//             })}
//           </ul>
//           <button onClick={clearItems}>Clear</button>
//         </article>
//       </section>
//     </StyledDiv>
//   );
// };

// const ListItem = ({ submittedValue, id, deleteItem, editItem }) => {
//   return (
//     <div className='list-item'>
//       <li>{submittedValue}</li>
//       <div>
//         <button onClick={() => deleteItem(id)}>delete</button>
//         <button onClick={() => editItem(id)}>edit</button>
//       </div>
//     </div>
//   );
// };

// export default Todo;

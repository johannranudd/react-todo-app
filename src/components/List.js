import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';

const List = ({ list, clearList, deleteItem, editItem }) => {
  return (
    <>
      {list.map((item) => {
        const { id, inputValue } = item;
        return (
          <article key={id} className='list-item'>
            <div className='value'>
              {inputValue.length < 30
                ? inputValue.toLowerCase()
                : `${inputValue.substring(0, 34).toLowerCase()}...`}
            </div>
            <div className='button-container'>
              <button className='edit-btn' onClick={() => editItem(id)}>
                <FiEdit />
              </button>
              <button className='delete-btn' onClick={() => deleteItem(id)}>
                <MdDeleteForever />
              </button>
            </div>
          </article>
        );
      })}
      <button className='clear-btn' onClick={clearList}>
        Clear List
      </button>
    </>
  );
};

export default List;

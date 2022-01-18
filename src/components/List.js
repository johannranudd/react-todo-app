import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';

const List = ({ list, clearList }) => {
  return (
    <>
      {list.map((item) => {
        const { id, inputValue } = item;
        return (
          <article key={id} className='list-item'>
            <div>{inputValue}</div>
            <div className='button-container'>
              <button>
                <FiEdit />
              </button>
              <button>
                <MdDeleteForever />
              </button>
            </div>
          </article>
        );
      })}
      <button onClick={clearList}>clear</button>
    </>
  );
};

export default List;

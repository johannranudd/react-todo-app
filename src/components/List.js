import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { useEffect, useState } from 'react/cjs/react.development';
import { size } from '../App.styles';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const List = ({ list, clearList, deleteItem, editItem }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [numberOfChar, setNumberOfChar] = useState(20);

  const resize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setNumberOfChar(() => {
      if (screenWidth > size.mobileXL) {
        return 60;
      } else if (screenWidth > size.mobileL) {
        return 40;
      }
    });
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [resize, numberOfChar]);

  return (
    <>
      {list.map((item) => {
        return (
          <ListItem
            key={item.id}
            {...item}
            numberOfChar={numberOfChar}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        );
      })}
      <button className='clear-btn' onClick={clearList}>
        Clear List
      </button>
    </>
  );
};

const ListItem = ({ inputValue, numberOfChar, editItem, id, deleteItem }) => {
  const [showText, setShowText] = useState(false);
  return (
    <article className='list-item'>
      <div className={showText ? 'show-list' : 'value'}>
        {inputValue.length < numberOfChar || showText
          ? inputValue
          : `${inputValue.substring(0, numberOfChar)}...`}
      </div>
      <div className='button-container'>
        <button
          className={showText ? 'read-more-btn-rotate' : 'read-more-btn'}
          onClick={() => setShowText(!showText)}
        >
          <BiChevronDown />
        </button>
        <button className='edit-btn' onClick={() => editItem(id)}>
          <FiEdit />
        </button>
        <button className='delete-btn' onClick={() => deleteItem(id)}>
          <MdDeleteForever />
        </button>
      </div>
    </article>
  );
};

export default List;

import React, { useEffect } from 'react';

const Alert = ({ type, msg, showAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [list]);
  return <p className={type}>{msg}</p>;
};

export default Alert;

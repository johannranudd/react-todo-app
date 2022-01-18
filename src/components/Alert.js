import React, { useEffect } from 'react';

const Alert = ({ show, type, msg, showAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [list]);
  return <p className={`alert ${type}`}>{msg}</p>;
};

export default Alert;

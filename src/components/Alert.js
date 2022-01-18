import React, { useEffect } from 'react';

const Alert = ({ show, color, msg, showAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [list]);
  return <div className={color}>{msg}</div>;
};

export default Alert;

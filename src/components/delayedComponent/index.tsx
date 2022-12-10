import React, {useEffect, useState} from 'react';

const DelayedComponent: React.FC<any> = ({children, wait = 500}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, wait);
    return () => clearTimeout(timer);
  }, [wait]);

  return show ? children : null;
};

export default DelayedComponent;

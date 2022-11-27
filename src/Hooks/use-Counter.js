import { useEffect, useState } from 'react'


// Creating custom hooks always use (use) in naming
const useCounter = (forward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (forward) {
            setCounter((prevCounter) => prevCounter + 1);           
        }else {
            setCounter((prevCounter) => prevCounter - 1);           

        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return counter
  
}

export default useCounter
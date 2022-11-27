import { useState, useEffect } from 'react';
import useCounter from '../Hooks/use-Counter';
import Card from './Card';


const ForwardCounter = () => {
const counter = useCounter()
 
  return <Card>{counter}</Card>;
};

export default ForwardCounter;

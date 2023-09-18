import { Plus, Minus } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { List } from './components/List';

export function App() {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(100);
  useEffect(() => {
    document.title = `Clicou ${count}`;
  }, [count, countB]);

  return (
   <List />
  );
}

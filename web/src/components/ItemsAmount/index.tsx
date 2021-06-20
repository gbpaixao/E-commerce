/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { FiCircle } from 'react-icons/fi';

interface IconProps {
  char: string,
  right?: boolean,
  onClick?: () => void
}
function Icon({ char, right = false, onClick }: IconProps):JSX.Element {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      style={{
        position: 'relative',
        color: '#5227CC',
        cursor: 'pointer',
        marginRight: '10px',
      }}
      onClick={onClick}
    >
      <FiCircle size={24} color="#5227CC" />
      <span style={{
        position: 'absolute',
        top: '13px',
        left: right ? '1px' : '5px',
        transform: 'translate(50%, -50%)',
        zIndex: 2,
      }}
      >
        {char}
      </span>
    </div>
  );
}

interface Props {
  parentCallback: (counter: number) => void,
  estoque: number,
}

export default function ItemsAmount({ estoque, parentCallback }: Props):JSX.Element {
  const [counter, setCounter] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => parentCallback(counter), [counter]);
  return (

    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
    }}
    >
      <Icon
        char="-"
        onClick={() => (counter > 1) && setCounter(counter - 1)}
      />
      <Form.Control
        aria-label="quantidade-camisa"
        value={counter}
        onChange={(event) => setCounter(parseInt(event.target.value, 10))}
        style={{ width: 60, marginRight: '10px', textAlign: 'center' }}
      />
      <Icon
        char="+"
        right
        onClick={
        () => (counter < estoque) && setCounter(counter + 1)
}
      />
    </div>
  );
}

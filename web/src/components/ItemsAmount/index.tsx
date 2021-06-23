import { Form } from 'react-bootstrap';
import ButtonIcon from '../ButtonIcon';

interface IProps {
  estoque: number,
  counter: number,
  setCounter: (counter: number) => void
}

export default function ItemsAmount({
  counter, estoque, setCounter,
}: IProps):JSX.Element {
  return (

    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
    }}
    >
      <ButtonIcon
        char="-"
        onClick={() => (counter > 1) && setCounter(counter - 1)}
      />
      <Form.Control
        aria-label="quantidade-camisa"
        value={counter}
        onChange={(event) => {
          if (event.target.value) {
            setCounter(parseInt(event.target.value, 10));
          } else setCounter(1);
        }}
        style={{ width: 60, marginRight: '10px', textAlign: 'center' }}
      />
      <ButtonIcon
        char="+"
        onClick={
          () => (counter < estoque) && setCounter(counter + 1)
        }
      />
    </div>
  );
}

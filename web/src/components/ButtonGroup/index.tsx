import { useState } from 'react';

import { Button } from 'react-bootstrap';

interface Props {
  array: string[],
  callback: (childData: string) => void,
}

export default function ButtonGroup({ array, callback }: Props):JSX.Element {
  const [selected, setSelected] = useState<boolean[]>(
    Array.from<boolean>({ length: array.length }).fill(false),
  );

  return (
    <div>
      {array.map((element, index) => {
        let borderRadius;

        switch (index) {
          case 0: borderRadius = { borderRadius: '5px 0px 0px 5px' }; break;
          case array.length - 1: borderRadius = { borderRadius: '0px 5px 5px 0px' }; break;
          default: borderRadius = { borderRadius: '0px 0px 0px 0px' };
        }

        return (
          <Button
            key={element}
            style={{
              backgroundColor: '#5227CC',
              borderColor: '#5227CC',
              boxShadow: 'none',
              opacity: selected[index] ? '1' : '0.7',
              width: '70px',
              ...borderRadius,
            }}
            onClick={() => {
              /* Reset everything to false,
               * except the button selected (if it isn't already selected)
               */
              const isPressed = selected[index];
              const aux_array = Array.from<boolean>({ length: array.length }).fill(false);
              if (!isPressed) {
                aux_array[index] = true;
              }
              setSelected([...aux_array]);
              callback(array[aux_array.indexOf(true)]);
            }}
          >
            {element}
          </Button>
        );
      })}
    </div>
  );
}

import { css } from '@emotion/css';

const styles = {
  container: css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 33px;
    background-color: #7749f8;

    p,
    button {
      margin-bottom: 0px;
      color: #fff;
      font-weight: bold;
      font-size: 14px;
    }
  `,
};

export { styles };

import { css } from '@emotion/css';

const styles = {
  mainContainer: css`
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 24px;
      margin-bottom: 20px;
      margin-top: -10px;
    }

    label {
      color: #6c757d;
    }
  `,
  contentContainer: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  formContainer: css`
    min-width: 420px;
    margin-right: 220px;
  `,
  picturesContainer: css`
    min-width: 444px;
  `,
  picturesContainerTop: css`
  img {
    height: 160px;
    width: 280px;
  }
  `,
  picturesContainerBottom: css`
    img {
      height: 115px;
      width: 170px;
      margin-right: 34px;
    }
  `,
  submitButton: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  `,
};

export { styles };

import { css } from '@emotion/css';

const styles = {
  mainContainer: css`
    display: flex;
    flex-direction: row;
  `,
  picturesContainer: css`
    display: flex;
    flex-direction: row;
    padding-right: 24px;

    img {
      border-radius: 5px 5px 0px 0px;
    }
  `,
  picturesContainerThumbnails: css`
    display: flex;
    flex-direction: column;
    margin-right: 12px;

    img:not(:last-child) {
      margin-bottom: 20px;
    }
  `,
  descriptionContainer: css`
    padding-right: 42px;
    max-width: 400px;
  `,
  descriptionContainerInputGroup: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  shippingContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    padding: 20px;

    h1 {
      font-size: 28px;
  inline-size: auto;
  margin: 0;
    }
  `,
  addToCart: css`
    text-align: center;

    button {
      font-size: 14px!important
    }
  `,
};

// const mainContainer = css`
//     display: flex;
//     flex-direction: row;
// `;

export { styles };

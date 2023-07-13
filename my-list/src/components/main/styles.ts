import { css } from 'lit';

export const style = [
  css`
    :host {
      display: block;
      text-align: center;
      --font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      text-align: center;
    }

    h1 {
      font-size: 100px;
      font-weight: 600;
      font-family: var(--font-family);
    }

    button {
      padding: 10px 20px;
      font-size: 18px;
      margin-top: 20px;
      align-self: center;
      font-family: (var --font-family);
      font-size: 30px;
      font-weight: 500;
      background-color: mediumaquamarine;
      border: 3px solid black;
      color: black;
    }
  `,
];

import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import { style } from './styles.js';

@customElement('list-item')
export class ListItem extends LitElement {
  @property({ type: Array }) items: string[] = [];

  @query('#itemInput')
  private itemInput!: HTMLInputElement;

  static styles = style;

  private addItem(): void {
    const newItem = this.itemInput.value.trim();
    if (newItem !== '') {
      this.items = [...this.items, newItem];
      this.itemInput.value = '';
    }
  }

  private deleteItem(item: string) {
    this.items = this.items.filter(i => i !== item);
  }

  private clearAll() {
    this.items = [];
  }

  render() {
    return html`
      <div class="list-group">
        <h1>Grocery List By Andrea's</h1>
        <input id="itemInput" type="text" placeholder="e.g. eggs" />
        <button @click=${this.addItem}>Submit</button>
        <ul>
          ${this.items.map(
            i => html`
              <li>
                ${i}
                <button @click=${() => this.deleteItem(i)}>Delete</button>
              </li>
            `
          )}
        </ul>
        <button @click=${this.clearAll}>Clear All</button>
      </div>
    `;
  }
}

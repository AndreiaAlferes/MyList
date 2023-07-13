import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/main/list.js';

@customElement('app-list')
export class AppList extends LitElement {
  render() {
    return html` <list-item></list-item> `;
  }
}

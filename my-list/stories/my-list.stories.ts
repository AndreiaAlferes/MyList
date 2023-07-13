import { html, TemplateResult } from 'lit';
import '../src/my-list.js';

export default {
  title: 'MyList',
  component: 'my-list',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <my-list style="--my-list-background-color: ${backgroundColor}" .header=${header}></my-list>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};

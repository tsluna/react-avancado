import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';
export default {
  component: Main,
  title: 'Main',
  args: {
    title: 'Luna title',
    description: 'Minha descricao padrao'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
export const Default: Story = (args) => <Main {...args} />;

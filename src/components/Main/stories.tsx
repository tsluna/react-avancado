import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';
export default {
  component: Main,
  title: 'Main',
  decorators: [withKnobs]
} as Meta;

export const Basic: Story = () => (
  <Main
    title={text('Title', 'React Avançado')}
    descrition={text(
      'Description',
      'TypeScript, ReactJs, NextJs e Styled Components'
    )}
  />
);

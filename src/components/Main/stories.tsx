import { text, withKnobs } from '@storybook/addon-knobs';
import Main from '.';
export default {
  component: Main,
  title: 'Main',
  decorators: [withKnobs]
};

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    descrition={text(
      'Description',
      'TypeScript, ReactJs, NextJs e Styled Components'
    )}
  />
);

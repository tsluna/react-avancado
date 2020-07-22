import { StoryFn } from '@storybook/addons';
import GlobalStyles from '../src/styles/global';

const widthGlobalStyles = (storyFn: StoryFn) => {
  return (
    <>
    <GlobalStyles />
    {storyFn()}
    </>
  )
}

export default widthGlobalStyles;

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  component: Button,
  title: 'Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  text: 'Button',
};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MinyUi } from './miny-ui';

export default {
  component: MinyUi,
  title: 'MinyUi',
} as ComponentMeta<typeof MinyUi>;

const Template: ComponentStory<typeof MinyUi> = (args) => <MinyUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

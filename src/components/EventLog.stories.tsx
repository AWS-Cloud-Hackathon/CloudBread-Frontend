import type { Meta, StoryObj } from '@storybook/react';

import EventLog from './EventLog';

const meta = {
  component: EventLog,
} satisfies Meta<typeof EventLog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
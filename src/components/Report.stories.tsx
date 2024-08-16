import type { Meta, StoryObj } from '@storybook/react';

import Report from './Report';

const meta = {
  component: Report,
} satisfies Meta<typeof Report>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
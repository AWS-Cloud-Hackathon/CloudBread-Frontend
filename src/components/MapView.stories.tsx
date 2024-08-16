import type { Meta, StoryObj } from '@storybook/react';

import MapView from './MapView';

const meta = {
  component: MapView,
} satisfies Meta<typeof MapView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
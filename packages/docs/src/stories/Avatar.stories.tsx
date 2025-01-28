import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@wellingtonhlc-ui-test/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://avatars.githubusercontent.com/u/24253315?v=4",
    alt: "Wellington Henrique",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};

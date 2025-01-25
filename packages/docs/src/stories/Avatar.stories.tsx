import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@ignite-ui/react";

export default {
  title: "Typograthy/Avatar",
  component: Avatar,
  args: {
    src: "https://avatars.githubusercontent.com/u/24253315?v=4",
    alt: "Wellington Henrique",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};

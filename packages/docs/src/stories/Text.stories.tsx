import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typograthy/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sequi, vero amet aperiam cupiditate ea neque nemo totam beatae, dolorum tempore possimus reiciendis corrupti delectus porro sint eveniet libero nobis?",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};

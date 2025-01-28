import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@wellingtonhlc-ui-test/react";

export default {
  title: "Typograthy/Text",
  component: Text,
  args: {
    size: "md",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sequi, vero amet aperiam cupiditate ea neque nemo totam beatae, dolorum tempore possimus reiciendis corrupti delectus porro sint eveniet libero nobis?",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],

      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};

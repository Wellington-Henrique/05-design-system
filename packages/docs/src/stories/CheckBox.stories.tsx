import type { StoryObj, Meta } from "@storybook/react";
import { Box, CheckBox, CheckBoxProps, Text } from "@ignite-ui/react";

export default {
  title: "Form/CheckBox",
  component: CheckBox,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: "flex", flexDirection: "row", gap: "$2" }}
      >
        {Story()}
        <Text size="sm">Accept terms of use</Text>
      </Box>
    ),
  ],
} as Meta<CheckBoxProps>;

export const Primary: StoryObj<CheckBoxProps> = {};

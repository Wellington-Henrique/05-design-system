import { Check } from "phosphor-react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";
import { ComponentProps } from "react";

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
}

export interface CheckBoxProps
  extends ComponentProps<typeof CheckboxContainer> {}

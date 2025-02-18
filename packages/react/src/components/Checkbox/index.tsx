import { Check } from "phosphor-react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";
import { ComponentProps } from "react";

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
}

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

Checkbox.displayName = "Checkbox";

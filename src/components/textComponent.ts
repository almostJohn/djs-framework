import { type APITextInputComponent, TextInputStyle, ComponentType } from "discord-api-types/v10";

type TextComponentOptions = {
	customId: string;
	label: string;
	maxLength?: number | undefined;
	minLength?: number | undefined;
	placeholder?: string | undefined;
	required?: boolean | undefined;
	style?: TextInputStyle | undefined;
	value?: string | undefined;
};

export function createTextComponent({
	customId,
	label,
	maxLength,
	minLength,
	placeholder,
	required,
	style,
	value,
}: TextComponentOptions): APITextInputComponent {
	return {
		type: ComponentType.TextInput,
		custom_id: customId,
		label,
		style: style ?? TextInputStyle.Paragraph,
		max_length: maxLength,
		min_length: minLength,
		placeholder,
		required: required ?? false,
		value,
	} as const;
}

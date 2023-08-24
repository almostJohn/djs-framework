import type {
	APIModalActionRowComponent,
	APIModalInteractionResponseCallbackData,
	APIActionRowComponent,
} from "discord-api-types/v10";

type ModalOptions = {
	components: APIActionRowComponent<APIModalActionRowComponent>[];
	customId: string;
	title: string;
};

export function createModal({ customId, title, components }: ModalOptions): APIModalInteractionResponseCallbackData {
	return {
		custom_id: customId,
		title,
		components,
	} as const;
}

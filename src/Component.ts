import chalk from "chalk";
import { logger } from "./logger.js";
import type { ComponentPayload, Runtime } from "./types/ArgumentsOf.js";
import type {
	ArgsParam,
	ComponentMethod,
	Components,
	InteractionParam,
	InteractionType,
	LocaleParam,
} from "./types/Interaction.js";
import { ERRORMARK } from "./constants.js";

const { red } = chalk;

export abstract class Component<C extends ComponentPayload = ComponentPayload, R extends Runtime = Runtime.Discordjs>
	implements Components<C, R>
{
	public constructor(public readonly customId: C["customId"]) {}

	public button(
		_interaction: InteractionParam<ComponentMethod.Button, InteractionType.Component, R>,
		_args: ArgsParam<C, ComponentMethod.Button, InteractionType.Component, R>,
		_locale?: LocaleParam<ComponentMethod.Button, InteractionType.Component, R> | undefined,
	): Promise<any> | any {
		const customId = "customId" in _interaction ? _interaction.customId : _interaction.data.custom_id;
		logger.warn(
			`${red(ERRORMARK)} Received button input for ${customId}, but the component does not handle button input`,
		);
	}

	public selectMenu(
		_interaction: InteractionParam<ComponentMethod.SelectMenu, InteractionType.Component, R>,
		_args: ArgsParam<C, ComponentMethod.Button, InteractionType.Component, R>,
		_locale?: LocaleParam<ComponentMethod.SelectMenu, InteractionType.Component, R> | undefined,
	): Promise<any> | any {
		const customId = "customId" in _interaction ? _interaction.customId : _interaction.data.custom_id;
		logger.warn(
			`${red(
				ERRORMARK,
			)} Received select menu input for ${customId}, but the component does not handle select menu input`,
		);
	}

	public modalSubmit(
		_interaction: InteractionParam<ComponentMethod.ModalSubmit, InteractionType.Component, R>,
		_args: ArgsParam<C, ComponentMethod.ModalSubmit, InteractionType.Component, R>,
		_locale?: LocaleParam<ComponentMethod.ModalSubmit, InteractionType.Component, R> | undefined,
	): Promise<any> | any {
		const customId = "customId" in _interaction ? _interaction.customId : _interaction.data.custom_id;
		logger.warn(
			`${red(ERRORMARK)} Received modal submit for ${customId}, but the component does not handle modal submit`,
		);
	}
}

import { container } from "tsyringe";
import type { Component } from "../Component.js";
import type { ComponentPayload } from "../types/ArgumentsOf.js";
import { kComponents } from "./tokens.js";

export type ComponentMap = Map<string, Component<ComponentPayload>>;

export function createComponents() {
	const components = new Map<string, Component<ComponentPayload>>();
	container.register(kComponents, { useValue: components });
}

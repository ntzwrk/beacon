/** Interface representing an attribute to qualify for voting */
export interface Attribute {
	/** A unique identifier for this specific Attribute */
	readonly identifier: string;

	/**
	 * This method checks whether this attribute is given or not.
	 *
	 * @returns Boolean that determines whether this attribute is given or not.
	 * */
	check(): boolean;

	/** Overrides the default method. Should return a precise description of the attribute */
	toString(): string;
}

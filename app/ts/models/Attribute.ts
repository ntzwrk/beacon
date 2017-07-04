/** Interface representing an attribute to qualify for voting */
export interface Attribute {
	/**
	 * This method checks whether this attribute is given or not.
	 *
	 * @returns Boolean that determines whether this attribute is given or not.
	 * */
	check(): boolean;
}

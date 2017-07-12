/** Abstract class for objects that should be publishable into the Atlas network */
export abstract class Publishable {
	/** Returns the JSON representation of the respective object */
	public abstract toJson(): string;

	/** Loads attributes from a given JSON string into the respective object */
	public abstract loadFromJson(jsonString: string): void;

	/** Publishes the object into the Atlas network */
	public publish(): void {
		// @todo
	}
}

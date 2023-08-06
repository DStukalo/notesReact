export function setDates(str: string): RegExpMatchArray | null {
	const datePattern = /\d{1,2}\s(?:січ(?:ня)?|лют(?:ого)?|бер(?:езня)?|квіт(?:ня)?|трав(?:ня)?|черв(?:ня)?|лип(?:ня)?|серп(?:ня)?|вер(?:есня)?|жовт(?:ня)?|лист(?:опада)?|груд(?:ня)?)[.,]?\s\d{4}|\d{1,2}[./]\d{1,2}[./]\d{4}|\d{1,2}[./]\d{1,2}[./]\d{2}/g;
	const datesFound = str.match(datePattern);

	return datesFound;
}

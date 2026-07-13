/**
 * Sums all non-null numeric values in a record.
 */
export function sumRecordValues(values: Record<string, number | null>): number {
	return Object.values(values)
		.filter((value): value is number => value !== null)
		.reduce((sum, value) => sum + value, 0);
}

/**
 * Returns the highest threshold key that has been reached for the given score.
 * If no threshold is reached, returns the key with the lowest threshold.
 */
export function getHighestReachedThreshold<T extends string>(
	thresholds: Record<T, number>,
	score: number
): T {
	const entries = Object.entries(thresholds) as [T, number][];

	const reached = entries
		.filter(([_, threshold]) => score >= threshold)
		.sort(([_f, a], [_s, b]) => b - a);

	if (reached.length > 0) {
		return reached[0][0];
	}

	// If none reached, return the key with the lowest threshold
	const lowest = entries.reduce((min, curr) => (curr[1] < min[1] ? curr : min), entries[0]);
	return lowest[0];
}


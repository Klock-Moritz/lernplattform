import { describe, expect, it } from 'vitest';
import { getHighestReachedThreshold, sumRecordValues } from './utils';

describe('sumRecordValues', () => {
	it('sums positive record values', () => {
		expect(sumRecordValues({ a: 1, b: 2, c: 3 })).toBe(6);
	});

	it('returns 0 for an empty record', () => {
		expect(sumRecordValues({})).toBe(0);
	});

	it('handles negative and decimal values', () => {
		expect(sumRecordValues({ a: -1, b: 2.5, c: 0.5 })).toBe(2);
	});

	it('ignores null values in records', () => {
		expect(sumRecordValues({ a: 1, b: null, c: 2 })).toBe(3);
	});
});

describe('getHighestReachedThreshold', () => {
	it('returns the highest reached threshold key (string keys)', () => {
		const thresholds = { bronze: 10, silver: 20, gold: 30 } as const;
		expect(getHighestReachedThreshold(thresholds, 25)).toBe('silver');
	});

	it('returns the key with the lowest threshold when none reached', () => {
		const thresholds = { bronze: 10, silver: 20, gold: 30 } as const;
		expect(getHighestReachedThreshold(thresholds, 5)).toBe('bronze');
	});

	it('handles exact matches', () => {
		const thresholds = { low: 0, mid: 50, high: 100 } as const;
		expect(getHighestReachedThreshold(thresholds, 50)).toBe('mid');
	});

	it('handles negative thresholds', () => {
		const thresholds = { neg: -10, zero: 0, pos: 10 } as const;
		expect(getHighestReachedThreshold(thresholds, -5)).toBe('neg');
		expect(getHighestReachedThreshold(thresholds, -11)).toBe('neg');
	});
});


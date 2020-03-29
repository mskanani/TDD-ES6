import { expect } from 'chai';
import { isAnagram } from './anagrams'

describe('isAnagram - basic functionality', () => {
    // 'listen', 'silent'
    // 'elbow', 'below'
    it('return true when two known anagrams are passed in', () => {
        const expected = true;
        const actual = isAnagram('elbow', 'below');
        expect(actual).to.equal(expected); // no need for deep in here becuse we are comparing two values, not obejects
    });

    // 'elbows' 'below' NOT anagrams
    it('returns false when either of the strings has extra letters', () => {
        const expected = false;
        const actual = isAnagram('elbows', 'below');
        expect(actual).to.equal(expected);

        const actual2 = isAnagram('below', 'elbows');
        expect(actual2).to.equal(expected);
    })

    // 'listens' 'silent' NOT anagrams
    it('returns false when the strings have the same letters in different quantities', () => {
        const expected = false;
        const actual = isAnagram('listens', 'silent');
        expect(actual).to.equal(expected);
    });

    // 'conversation' 'voices rant on' ARE anagrams
    it('ignores spaces in the input strings', () => {
        const expected = true;
        const actual = isAnagram('conversation', 'voices rant on');
        expect(actual).to.equal(expected);
    });

    // 'STATE' 'taste' ARE anagrams
    it('ignores case in the input strings', () => {
        const expected = true;
        const actual = isAnagram('STATE', 'taste');
        expect(actual).to.equal(expected);
    });
});
import { isEqual } from 'lodash';
import { getLetterCount } from './letter-count';

export const formatString = str =>
    str.toLowerCase().replace(/\s+/g, '');

export const isAnagram = (str1, str2) => {
    //const letters_1 = str1.split('');
    //const letters_2 = str2.split('');

    /*
    let anagram = true;
    letters_1.forEach(letter => {
        if(!letters_2.includes(letter)) {
            anagram = false;
        }
    });
    return anagram; */

    /*
    return letters_1.every(letter => 
            letters_2.includes(letter)) &&
        letters_2.every(letter => 
            letters_1.includes(letter));
    */

    const str1LetterCount = getLetterCount(formatString(str1));
    const str2LetterCount = getLetterCount(formatString(str2));

    return isEqual(str1LetterCount, str2LetterCount);
};

//console.log(isAnagram('elbow','below'));
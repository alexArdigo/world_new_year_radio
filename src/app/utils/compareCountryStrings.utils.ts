export default function compareCountryStrings(str1, str2) {
    // Convert both strings to lowercase for case-insensitive comparison
    const formattedStr1 = str1.toLowerCase().replace('-', ' ');
    const formattedStr2 = str2.toLowerCase().replace('-', ' ');

    // Check if the strings match exactly or one contains the other
    return formattedStr1 === formattedStr2 ||
        formattedStr1.includes(formattedStr2) ||
        formattedStr2.includes(formattedStr1);
}
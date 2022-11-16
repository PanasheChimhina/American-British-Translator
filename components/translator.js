const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    translate(text, locale) {

        //check if the sentence has title, and replace it new one plus span
        let replacedtitle = this.translatedTitle(text, locale)

        //check if it has time and replace it new one plus span
        let replacedTitleAndTime = this.translateTime(replacedtitle, locale)

        //check if we translate the words and wrap translated in span
        let replacedTitleAndTimes = this.textTranslation(replacedTitleAndTime, locale)

        let translatedText = this.textTranslationOnlys(replacedTitleAndTimes, locale)

        //return string if no translation is required
        if (translatedText.split(' ').find(((el) => el === '<span')) == undefined) {
            return { "text": text, "translation": "Everything looks good to me!" }
        }
        else {
            return { "text": text, "translation": translatedText }
        }
    }

    //check if the sentence has title, and replace it with a new one plus span
    translatedTitle(text, locale) {
        let arr = []
        if (locale === 'american-to-british') {

            text.split(' ').forEach((word) => {
                if (americanToBritishTitles[word.toLowerCase()]) {

                    let title = word.charAt(0).toUpperCase() + americanToBritishTitles[word.toLowerCase()].slice(1);
                    arr.push('<span class="highlight">' + title + '</span>');
                }
                else {
                    arr.push(word);
                }
            })
            return arr.join(' ');
        }
        else if (locale === 'british-to-american') {

            text.split(' ').forEach((word) => {
                if (americanToBritishTitles[word.toLowerCase().concat('.')]) {

                    let title = word.charAt(0).toUpperCase() + americanToBritishTitles[word.toLowerCase().concat('.')].slice(1) + '.';
                    arr.push('<span class="highlight">' + title + '</span>');
                }
                else {
                    arr.push(word);
                }
            })
            return arr.join(' ');
        }
    }
    translateTime(replacedtitle, locale) {
        let arr = [];
        let timeRegex = /(([0-9]|0[0-9]|1[0-9]|2[0-3])(:|\.)([0-5][0-9]))/g

        replacedtitle.split(' ').forEach((word) => {
            if (word.includes(':') && locale === 'american-to-british') {

                let time = word.match(timeRegex);
                let title = word.replace(time[0], '<span class="highlight">' + ''.concat(time[0].replace(':', '.') + '</span>'));
                arr.push(title);

            }
            else if (word.match(timeRegex) && locale === 'british-to-american') {

                let time = word.match(timeRegex);
                let title = word.replace(time[0], '<span class="highlight">' + ''.concat(time[0].replace('.', ':') + '</span>'));
                arr.push(title);
            }
            else {
                arr.push(word);
            }
        })
        return arr.join(' ');
    }
    textTranslation(replacedTitleAndTime, locale) {
        let str;

        if (locale === 'american-to-british') {

            Object.keys(americanOnly).forEach((key) => {
                str = replacedTitleAndTime.replace(key, '<span class="highlight">' + ''.concat(americanOnly[key]) + '</span>')
            })

            Object.keys(americanToBritishSpelling).forEach((key) => {
                str = str.replace(key.toLowerCase(), '<span class="highlight">' + ''.concat(americanToBritishSpelling[key]) + '</span>')
            })

        }
        else if (locale === 'british-to-american') {
            Object.keys(britishOnly).forEach((key) => {
                str = replacedTitleAndTime.replace(key, '<span class="highlight">' + ''.concat(britishOnly[key]) + '</span>')
            })

            Object.keys(americanToBritishSpelling).forEach((key) => {
                str = str.replace(americanToBritishSpelling[key], '<span class="highlight">' + ''.concat(key) + '</span>')
            })

        }
        return str

    }
    textTranslationOnlys(replacedTitleAndTimes, locale) {
        let str;

        if (locale === 'american-to-british') {
            Object.keys(americanToBritishSpelling).forEach((key) => {
                str = replacedTitleAndTimes.replace(key.toLowerCase(), '<span class="highlight">' + ''.concat(americanToBritishSpelling[key]) + '</span>')
            })

            Object.keys(americanOnly).forEach((key) => {
                str = str.replace(key, '<span class="highlight">' + ''.concat(americanOnly[key]) + '</span>')
            })

        }
        else if (locale === 'british-to-american') {
            Object.keys(americanToBritishSpelling).forEach((key) => {
                str = replacedTitleAndTimes.replace(americanToBritishSpelling[key], '<span class="highlight">' + ''.concat(key) + '</span>')
            })

            Object.keys(britishOnly).forEach((key) => {
                str = str.replace(key, '<span class="highlight">' + ''.concat(britishOnly[key]) + '</span>')
            })
        }
        return str

    }
}
module.exports = Translator;

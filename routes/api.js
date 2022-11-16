'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      let { text, locale } = req.body;

      if (text === "") {
        return res.json({ error: "No text to translate" });
      }
      if (!text || !locale) {
        return res.json({ error: "Required field(s) missing" });
      }

      //return error when locale does not match the specified locales
      if (locale === 'american-to-british' || locale === 'british-to-american') {
        return res.json(translator.translate(text, locale))
      }
      else {
        return res.json({ error: 'Invalid value for locale field' })

      }
    });
};

const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

const britToUsa = 'british-to-american';
const usaToBrit = 'american-to-british';

const tests = ['Mangoes are my favorite fruit.', 'I ate yogurt for breakfast.', "We had a party at my friend's condo.", 'Can you toss this in the trashcan for me?',
    'The parking lot was full.', 'Like a high tech Rube Goldberg machine.', 'To play hooky means to skip class or work.', 'No Mr. Bond, I expect you to die.',
    'Dr. Grosh will see you now.', 'Lunch is at 12:15 today.', 'We watched the footie match for a while.', 'Paracetamol takes up to an hour to work.',
    'First, caramelise the onions.', 'I spent the bank holiday at the funfair.', 'I had a bicky then went to the chippy.', "I've just got bits and bobs in my bum bag.",
    'The car boot sale at Boxted Airfield was called off.', 'Have you met Mrs Kalyani?', "Prof Joyner of King's College, London.", 'Tea time is usually around 4 or 4.30.',
    'Mangoes are my favorite fruit.', 'I ate yogurt for breakfast.', 'We watched the footie match for a while.', 'Paracetamol takes up to an hour to work.'
]

suite('Unit Tests', () => {
    test('Mangoes are my favorite fruit.', (done) => {
        let expectedTranslation = "Mangoes are my <span class=\"highlight\">favourite</span> fruit."
        assert.equal(translator.translate(tests[0], usaToBrit).translation, expectedTranslation);
        done();
    });

    test('I ate yogurt for breakfast.', (done) => {

        let expectedTranslation = "I ate <span class=\"highlight\">yoghurt</span> for breakfast."
        assert.deepEqual(translator.translate(tests[1], usaToBrit), { "text": tests[1], "translation": expectedTranslation });
        done();
    });

    test("We had a party at my friend's condo.", (done) => {
        let expectedTranslation = "We had a party at my friend's <span class=\"highlight\">flat</span>.";
        assert.deepEqual(translator.translate(tests[2], usaToBrit), { "text": tests[2], "translation": expectedTranslation });
        done();
    })
    test('Can you toss this in the trashcan for me?', (done) => {
        let expectedTranslation = "Can you toss this in the <span class=\"highlight\">rubbish</span>can for me?"

        assert.deepEqual(translator.translate(tests[3], usaToBrit), { "text": tests[3], "translation": expectedTranslation });
        done();
    });

    test('The parking lot was full.', (done) => {

        let expectedTranslation = "The <span class=\"highlight\">car park</span> was full.";

        assert.deepEqual(translator.translate(tests[4], usaToBrit), { "text": tests[4], "translation": expectedTranslation });
        done();
    });

    test('Like a high tech Rube Goldberg machine', (done) => {

        let expectedTranslation = "Everything looks good to me!";

        assert.deepEqual(translator.translate(tests[5], usaToBrit), { "text": tests[5], "translation": expectedTranslation });
        done();
    });
    test('To play hooky means to skip class or work.', (done) => {

        let expectedTranslation = "To <span class=\"highlight\">bunk off</span> means to skip class or work.";

        assert.deepEqual(translator.translate(tests[6], usaToBrit), { "text": tests[6], "translation": expectedTranslation });
        done();
    });
    test('No Mr. Bond, I expect you to die.', (done) => {

        let expectedTranslation = "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.";

        assert.deepEqual(translator.translate(tests[7], usaToBrit), { "text": tests[7], "translation": expectedTranslation });
        done();
    });
    test('Dr. Grosh will see you now.', (done) => {

        let expectedTranslation = "<span class=\"highlight\">Dr</span> Grosh will see you now.";

        assert.deepEqual(translator.translate(tests[8], usaToBrit), { "text": tests[8], "translation": expectedTranslation });
        done();
    });
    test('Lunch is at 12:15 today.', (done) => {

        let expectedTranslation = "Lunch is at <span class=\"highlight\">12.15</span> today.";

        assert.deepEqual(translator.translate(tests[9], usaToBrit), { "text": tests[9], "translation": expectedTranslation });
        done();
    });
    test('We watched the footie match for a while.', (done) => {

        let expectedTranslation = "We watched the <span class=\"highlight\">soccer</span> match for a while.";

        assert.deepEqual(translator.translate(tests[10], britToUsa), { "text": tests[10], "translation": expectedTranslation });
        done();
    });
    test('Paracetamol takes up to an hour to work.', (done) => {

        let expectedTranslation = "Everything looks good to me!";

        assert.deepEqual(translator.translate(tests[11], britToUsa), { "text": tests[11], "translation": expectedTranslation });
        done();
    });
    test('First, caramelise the onions.', (done) => {

        let expectedTranslation = "First, <span class=\"highlight\">caramelize</span> the onions.";

        assert.deepEqual(translator.translate(tests[12], britToUsa), { "text": tests[12], "translation": expectedTranslation });
        done();
    });
    test('I spent the bank holiday at the funfair.', (done) => {

        let expectedTranslation = "I spent the <span class=\"highlight\"><span class=\"highlight\">bar</span>lic holiday</span> at the <span class=\"highlight\">carnival</span>.";

        assert.deepEqual(translator.translate(tests[13], britToUsa), { "text": tests[13], "translation": expectedTranslation });
        done();
    });
    test('I had a bicky then went to the chippy.', (done) => {

        let expectedTranslation = "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-<span class=\"highlight\">fish-and-chip shop</span></span>.";

        assert.deepEqual(translator.translate(tests[14], britToUsa), { "text": tests[14], "translation": expectedTranslation });
        done();
    });
    test("I've just got bits and bobs in my bum bag.", (done) => {

        let expectedTranslation = "Everything looks good to me!";

        assert.deepEqual(translator.translate(tests[15], usaToBrit), { "text": tests[15], "translation": expectedTranslation });
        done();
    });
    test('The car boot sale at Boxted Airfield was called off.', (done) => {

        let expectedTranslation = "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.";

        assert.deepEqual(translator.translate(tests[16], britToUsa), { "text": tests[16], "translation": expectedTranslation });
        done();
    });
    test('Have you met Mrs Kalyani?', (done) => {

        let expectedTranslation = "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?";

        assert.deepEqual(translator.translate(tests[17], britToUsa), { "text": tests[17], "translation": expectedTranslation });
        done();
    });
    test("Prof Joyner of King's College, London.", (done) => {

        let expectedTranslation = "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.";

        assert.deepEqual(translator.translate(tests[18], britToUsa), { "text": tests[18], "translation": expectedTranslation });
        done();
    });
    test('Tea time is usually around 4 or 4.30.', (done) => {

        let expectedTranslation = "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.";

        assert.deepEqual(translator.translate(tests[19], britToUsa), { "text": tests[19], "translation": expectedTranslation });
        done();
    });
    test('Mangoes are my favorite fruit.', (done) => {

        let expectedTranslation = "Mangoes are my <span class=\"highlight\">favourite</span> fruit.";

        assert.deepEqual(translator.translate(tests[20], usaToBrit), { "text": tests[20], "translation": expectedTranslation });
        done();
    });
    test('I ate yogurt for breakfast.', (done) => {

        let expectedTranslation = "I ate <span class=\"highlight\">yoghurt</span> for breakfast.";

        assert.deepEqual(translator.translate(tests[21], usaToBrit), { "text": tests[21], "translation": expectedTranslation });
        done();
    });
    test('We watched the footie match for a while.', (done) => {

        let expectedTranslation = "Everything looks good to me!";

        assert.deepEqual(translator.translate(tests[22], usaToBrit), { "text": tests[22], "translation": expectedTranslation });
        done();
    });
    test('Paracetamol takes up to an hour to work.', (done) => {

        let expectedTranslation = "Everything looks good to me!";

        assert.deepEqual(translator.translate(tests[23], usaToBrit), { "text": tests[23], "translation": expectedTranslation });
        done();
    });
});


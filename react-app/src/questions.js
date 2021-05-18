const ques = [
    {
        questionText: 'Choose a category',
        answerOptions: [
            { answerText: 'Marvel Comics', score: 0 },
            { answerText: 'DC Comics', score: 0 },
            { answerText: 'Both', score: 0 }
        ],
    },
    {
        questionText: 'The idea of a blind date makes me shudder',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: ' I find it uncomfortable when someone calls out my name loudly in the public',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: " I don't mind when my plans for outings with friends are cancelled",
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'I hate working in projects that have too many people in them',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'I am very comfortable being alone',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'When working on a project, I start with the things I am naturally good at first, and them do the others',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: "I don't need need too many signs from someone to figure out that they are upset",
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'I am interested in doing things that are new and different',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'I like wondering and day dreaming about future',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'When working on a project, the big picture is more important to me than the small details',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'I let my mood and emotions dictate my workflow',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'I can have a hard time letting things go',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'I make decisions with my heart, and I want to be compassionate',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'I want everyone to be harmonious, and it makes upset when there is a lack of harmony',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'I believe that being diplomatic is more important than telling the harsh truth',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: ' I like to keep my plans to a minimum',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'I work in bursts of energy',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'I like to go with the flow, plans are overwhelming',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: 'I like to mix work and fun, as it is difficult for me to be strictly working for long hours',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },
    {
        questionText: ' I like to be stimulated by an approaching deadline',
        answerOptions: [
            { answerText: 'Strongly Agree', score: 5 },
            { answerText: 'Agree', score: 4 },
            { answerText: 'Neutral', score: 3 },
            { answerText: 'Disagree', score: 2 },
            { answerText: 'Strongly Disagree', score: 1 },
        ],
    },

];
module.exports =ques;

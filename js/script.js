let questions = [
    {
        question: "abc",
        type: "options",
        options: ["ok", "ok1", "ok2", "ok3"],
    }, {
        question: "3245",
        type: "options",
        options: ["ok", "ok4wtewrrg1", "oewgk2", "okwerg3"],
    }, {
        question: "gfdb",
        type: "input",
    }, {
        question: "th4547",
        type: "options",
        options: ["oksdfdv", "odfd1", "dfdok2", "ddfok3"],
    }
];
let question = document.getElementById("question");
let opt = document.getElementById("opt");
let currQuestion = 0;
let score = 0;

function showQuestion(obj) {
    question.innerHTML = obj.question;
    opt.innerHTML ="";
    if(obj.type == "options") {
        for (let i = 0; i < obj.options.length; i++) {
            const choicesdiv = document.createElement("div");
            const choice = document.createElement("input");
            const choiceLabel = document.createElement("label");
     
            choice.type = "radio";
            choice.name = "answer";
            choice.value = i;
     
            choiceLabel.textContent = obj.options[i];
     
            choicesdiv.appendChild(choice);
            choicesdiv.appendChild(choiceLabel);
            opt.appendChild(choicesdiv);
        }
    }
    if(obj.type == "input") {
        const choicesdiv = document.createElement("div");
            const choice = document.createElement("input");
     
            choice.type = "number";
     
            choicesdiv.appendChild(choice);
            opt.appendChild(choicesdiv);
    }
}
showQuestion(questions[0]);

function nextQuestion() {
    if (currQuestion < questions.length - 1) {
        currQuestion++;
        showQuestion(questions[currQuestion]);
    }
}

// =========================
// 初期設定
// =========================

let mental = 15;
let trust = 15;

const maxQuestions = 7;

// =========================
// ランダム
// =========================

function shuffle(array) {

    return array.sort(() => Math.random() - 0.5);

}

const selectedQuestions = shuffle([...questions]).slice(0, maxQuestions);

// =========================
// 質問表示
// =========================

const questionArea = document.getElementById("questionArea");

selectedQuestions.forEach((question, index) => {

    questionArea.innerHTML += `

    <div class="questionBox">

        <p><strong>Q${index + 1}</strong><br>${question.text}</p>

        <label>
            <input type="radio"
                   name="q${question.id}"
                   value="yes">
            はい
        </label>

        <label>
            <input type="radio"
                   name="q${question.id}"
                   value="neutral">
            どちらともいえない
        </label>

        <label>
            <input type="radio"
                   name="q${question.id}"
                   value="no">
            いいえ
        </label>

    </div>

    <br>

    `;

});

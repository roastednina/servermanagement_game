function showQuestions() {

    const questionArea = document.getElementById("questionArea");

    questionArea.innerHTML = "";

    selectedQuestions.forEach((question, index) => {

        questionArea.innerHTML += `

        <div class="questionBox">

            <p><strong>Q${index + 1}</strong></p>

            <p>${question.text}</p>

            <label>
                <input type="radio" name="q${question.id}" value="yes">
                はい
            </label>

            <br>

            <label>
                <input type="radio" name="q${question.id}" value="neutral">
                どちらともいえない
            </label>

            <br>

            <label>
                <input type="radio" name="q${question.id}" value="no">
                いいえ
            </label>

        </div>

        <br>

        `;

    });

}

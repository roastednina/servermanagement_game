// ===================================
// 鯖主サバイバル
// script.js
// ===================================

// 初期ステータス
let mental = 15;
let trust = 15;
let serverType = "";

// 質問数
const maxQuestions = 7;

// ランダムに選ばれた質問
let selectedQuestions = [];


// ===================================
// 初期化
// ===================================

init();


// ===================================
// 初期化
// ===================================

function init() {

    loadQuestions();

}


// ===================================
// 質問を読み込む
// ===================================

function loadQuestions() {

    selectedQuestions = shuffle([...questions]).slice(0, maxQuestions);

    showQuestions();

}


// ===================================
// 質問表示
// ===================================

function showQuestions() {

    console.log(selectedQuestions);

}


// ===================================
// 配列をシャッフル
// ===================================

function shuffle(array) {

    return array.sort(() => Math.random() - 0.5);

}

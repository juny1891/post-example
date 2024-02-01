const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let posts = []; // 게시글 관리는 배열로 한다.

function createPost(title, content) {

}

function updatePost(index, title, content) {

}

function deletePost(index) {

}

function findPosts() {

}


function mainMenu() {
    rl.question('게시판 관리 (1: 조회, 2: 작성, 3: 수정, 4: 삭제, 5: 종료) 선택: ', function(answer) {

    });
}

mainMenu();

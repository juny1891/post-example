const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let posts = []; // 게시글 관리는 배열로 한다.

// 제목: 첫 번째 게시글
// 내용: 첫 번째 게시글의 내용입니다.
// 게시글이 생성되었습니다.
function createPost() {
    let title = '';
    let content = '';

    rl.question('제목: ', function(answer) {
     title = answer   
     rl.question('내용: ', function(answer) {
        content = answer   
        
        rl.close();
        
        mainMenu();
        posts.push("내용 : "+title + "adpff:" + content)
        console.log('게시글이 생성되었습니다.')
        
       }
       )
    
    }
    )
}

function updatePost() {

}

function deletePost() {

}

function findPosts() {

}


function mainMenu() {
    rl.question('게시판 관리 (1: 조회, 2: 작성, 3: 수정, 4: 삭제, 5: 종료) 선택: ', function(answer) {
        if (answer==="2") {
             createPost() 
        }
    }
)}            
      

        
        
            
        
        

    

               
mainMenu();

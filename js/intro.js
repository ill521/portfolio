// const content = "안녕하세요 \n web publisher 정연해 \n 개인 포트폴리오 홈페이지 입니다";

// const text = document.querySelector("#intro");
// let i = 0;

// function typing(){
//     let txt = content[i++];
//     text.innerHTML += txt=== "\n" ? "<br/>": txt;
//     if (i > content.length) {
//         text.textContent = "";
//         i = 0;
//     }
// }
// setInterval(typing, 100)

$(document).ready(function() {
    var text = document.querySelector(".text");

    var typewriter = new Typewriter(text, {
        loop: true
    });

    typewriter.typeString('안녕하세요')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Web Publisher 정연해 입니다')
        .pauseFor(2000)
        .start();
});
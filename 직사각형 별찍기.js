/**
 * 직사각형 별찍기.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript
 * @date 2020-10-08(목)
 * @comment 
 */
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    var answer = "";
    
    for(var i=0; i<b; i++){
        answer = "";
        for(var j=0; j<a; j++){
            answer += "*";
        }
        console.log(answer);
    }
});

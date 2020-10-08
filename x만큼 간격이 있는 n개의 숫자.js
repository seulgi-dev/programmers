/**
 * x만큼 간격이 있는 n개의 숫자.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12954?language=javascript
 * @date 2020-10-08(목)
 * @comment 
 */
 function solution(x, n) {
    var answer = [];
    
    for(var i=1; i<=n ; i++){
        // 제한조건
        if( x >= -10000000 && x <= 10000000 && n <= 1000) answer.push(x*i);
    }
    
    return answer;
}

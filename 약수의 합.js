/**
 * 약수의 합.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript
 * @date 2020-09-21(월)
 * @comment 약수는 나누어 떨어질 때 0인 값
 */
function solution(n) {
    var answer = 0;
    
    for(var i=1; i<=n; i++){
        if(n%i == 0) answer += i;
    }
    
    return answer;
}

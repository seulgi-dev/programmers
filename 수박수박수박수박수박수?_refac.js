/**
 * 수박수박수박수박수박수?_refac.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12922
 * @date 2020-09-15(화)
 * @comment [as-is] 8.4ms -> [to-be] 0.05ms
 */
function solution(n) {
    var answer = '';
    
    if(n%2 == 0){
        answer = "수박".repeat( n/2 );
    }else{
        answer = "수박".repeat( (n-1)/2 ) + "수";
    }
        
    return answer;
}

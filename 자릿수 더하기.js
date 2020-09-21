/**
 * 자릿수 더하기.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12931
 * @date 2020-09-21(월)
 * @comment 
 */
function solution(n)
{
    var answer = 0;
    var tempArr = [];
   
    tempArr = String(n).split('');
    
    for(var i=0; i<tempArr.length; i++){
        answer += parseInt(tempArr[i]);
    }

    return answer;
}

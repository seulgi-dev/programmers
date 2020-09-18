/**
 * 같은 숫자는 싫어.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12906
 * @date 2020-09-18(금)
 * @comment ES6를 공부 하긴 해야겠다..; 
 */
function solution(arr)
{
    var answer = [];

    for(var i=0; i<arr.length; i++){
        if( i != 0 && (arr[i] != arr[i-1]) || i == 0 )  answer.push(arr[i]);
    }
    
    return answer;
}

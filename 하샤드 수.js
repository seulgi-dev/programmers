/**
 * 하샤드 수.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12947
 * @date 2020-09-21(월)
 * @comment reduce 
 */
function solution(x) {
    var temp = 0;
    var tempArr = (x+'').split('');
    
    // x의 자릿수의 합
    for(var i=0; i<tempArr.length; i++){
        temp += parseInt(tempArr[i]);    
    }
    
    // x의 자릿수의 합으로 x가 나누어지는지 판단
    return (x%temp == 0) ? true : false;
}

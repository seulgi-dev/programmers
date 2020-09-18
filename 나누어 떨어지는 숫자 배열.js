/**
 * 나누어 떨어지는 숫자 배열.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
 * @date 2020-09-18(금)
 * @comment 
 */
function solution(arr, divisor) {
    var answer = [];
    
    // 1. arr 원소 중 divisor로 나누어 떨어지는 값 
    for(var i=0; i<arr.length; i++){
        if( (arr[i]%divisor) == 0) answer.push(arr[i]);
    }
    
    // 2. 오름차순 정렬 or 원소가 없다면 -1 
    if(answer.length == 0){
        answer.push(-1);
    }else{
        answer.sort(function (f, s) { return f-s; });
    }

    return answer;
}

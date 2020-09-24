/**
 * 정수 제곱근 판별.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12934
 * @date 2020-09-23(수), 2020-09-24(목)
 * @comment Number.isInteger, Math.sqrt, Math.pow에 대한 이해가 
 */
function solution(n) {
    // n이 양의정수 x의 제곱근 이라면 x+1의 제곱근 리턴, 아니라면 -1 리턴
   return ( Number.isInteger(Math.sqrt(n)) ) ?  Math.pow( (Math.sqrt(n)+1), 2 ) :  -1;
}

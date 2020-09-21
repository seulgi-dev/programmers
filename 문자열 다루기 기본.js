/**
 * 문자열 다루기 기본.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12918
 * @date 2020-09-21(월)
 * @comment 문제 제사항을 꼼꼼히 보자(길이 4 or 6)
 */
function solution(s) {
    var regexp = /^[0-9]*$/
    
    return (regexp.test(s) && (s.length == 4 || s.length == 6) ) ? true : false;
}

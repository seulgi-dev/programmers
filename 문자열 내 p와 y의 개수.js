/**
 * 문자열 내 p와 y의 개수.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
 * @date 2020-09-19(토)
 * @comment 더 간단히 리팩토링 가능 할 것 같다.
 */
function solution(s){
    var pCnt = 0;
    var yCnt = 0;

    // 1. 대문자로 통일
    s = s.toLowerCase();

    // 2. 'p', 'y' 갯수 카운트
    for(var i=0; i<s.length; i++){
        if(s.substring(i,i+1) == 'p'){
            pCnt++;
        }else if(s.substring(i,i+1) == 'y'){
            yCnt++;
        }
    }

    // 3. 갯수 비교
    return (pCnt == yCnt) ? true : false;
}

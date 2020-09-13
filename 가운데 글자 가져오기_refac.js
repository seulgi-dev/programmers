/*
* 가운데 글자 가져오기
* https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
*/

function solution(s) {
    return (s.length % 2 == 0 ? s.substring( (s.length/2)-1, (s.length/2)+1 ) : s.substring( (s.length/2), (s.length/2)+1 ));   
}

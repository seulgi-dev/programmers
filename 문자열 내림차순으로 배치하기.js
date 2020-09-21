/**
 * 문자열 내림차순으로 배치하기.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12917
 * @date 2020-09-19(토), 2020-09-21(월)
 * @comment 
 */
function solution(s) {
    var answer = '';
    var Upper = '';
    var Lower = '';
    
    for(var i=0; i<s.length; i++){
        // 대문자 일 때
        if(s.substring(i,i+1).match(/^[A-Z]$/) != null){
            Upper += s.substring(i,i+1);
            
        // 소문자 일 때
        }else{
            Lower += s.substring(i,i+1);
        }
    }
    
    // 문자열 ''로 분리, 정렬, 내림차순, ''로 다시 합치기
    Upper = Upper.split('').sort().reverse().join('');
    Lower = Lower.split('').sort().reverse().join('');
    
    return Lower+Upper;
    
}

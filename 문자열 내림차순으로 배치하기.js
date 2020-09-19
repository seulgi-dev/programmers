/**
 * 문자열 내림차순으로 배치하기.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12917
 * @date 2020-09-19(토)
 * @comment 재 시도해보기 
 */
function solution(s) {
    var answer = '';
    var Upper = '';
    var Lower = '';
    var sArr = [];
    
    for(var i=0; i<s.length; i++){
        // 대문자 일 때
        if(s.substring(i,i+1).match(/^[A-Z]$/) != null){
            Upper += s.substring(i,i+1);
            
        // 소문자 일 때
        }else{
            Lower += s.substring(i,i+1);
        }
    }
    
    for(i=0; i<Lower.length; i++){
        sArr.push(Lower.substring(i, i+1));
    }
    sArr.sort();
        
    for(i=0; i<sArr.length; i++){
        answer += sArr[i];
    }
    
    for(i=0; i<Upper.length; i++){
        sArr.push(Upper.substring(i, i+1));
    }
    sArr.sort();
        
    for(i=0; i<sArr.length; i++){
        answer += sArr[i];
    }
    
    return answer;
    
}

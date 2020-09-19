/**
 * 체육복
 * @url https://programmers.co.kr/learn/courses/30/lessons/42862
 * @date 2020-09-18(금)
 * @comment 코드 제출 시 틀렸는데 당췌 모르겠다.
 */
function solution(n, lost, reserve) {
    var answer = 0;
    
    // 1. 도난 학생, 여벌 학생 같은 수 찾기
    for(var i=0; i<reserve.length; i++){
        for(var j=0; j<lost.length; j++){
            if(reserve[i] == lost[j]){
                reserve[i] = 0;
                lost[j] = 0;
                break;
            }
        }
    }
    
    // 2. 나머지 도난 학생, 여벌 학생 - 1 같은 수 찾기
    for(var i=0; i<reserve.length; i++){
        for(var j=0; j<lost.length; j++){
            if(reserve[i] == (lost[j]-1)){
                reserve[i] = 0;
                lost[j] = 0;
                break;
            }
        }
    }
    
    // 3. 나머지 도난 학생, 여벌 학생 + 1 같은 수 찾기
    for(var i=0; i<reserve.length; i++){
        for(var j=0; j<lost.length; j++){
            if(reserve[i] == (lost[j]+1)){
                reserve[i] = 0;
                lost[j] = 0;
                break;
            }
        }
    }
    
    while(lost.indexOf(0) > -1){
        lost.splice(lost.indexOf(0),1);
    }
    
    // 4. 전체 학생 - 최종 남은 도난 학생 
    answer = (n-lost.length);
    
    return answer;
}

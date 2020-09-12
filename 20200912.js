/*
 완주하지 못한 선수
 https://programmers.co.kr/learn/courses/30/lessons/42576
*/

function solution(participant, completion) {
    var ans = '';
    participant = participant.sort();
    completion = completion.sort();
    
    for(var i=0; i<participant.length; i++){
        if(completion[i] != participant[i]){
            ans = participant[i];
            break;
        }
    }
    
    return ans;
}

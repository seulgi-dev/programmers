/**
 * 모의고사
 * @url https://programmers.co.kr/learn/courses/30/lessons/42840
 * @date 2020-09-14(월)
 * @comment 더 효율적으로 할 수 있을 것 같은데 아쉽다.
 */
function solution(answers) {
    var answer = [];
    var supo1 = [];
    var supo2 = [];
    var supo3 = [];
    var supo1Ans = 0;
    var supo2Ans = 0;
    var supo3Ans = 0;
    
    // 1. 문제 맞힌 갯수 체크 
    for(var i=0; i < answers.length; i++){
        var temp = 0;
        
        // 수포자1        
        while(true){  
            supo1.push(1, 2, 3, 4, 5); 
            if(supo1.length >=  answers.length) break; 
        }
        if( answers[i] == supo1[i] ) supo1Ans++;
        
        // 수포자2
        while(true){  
            supo2.push(2, 1, 2, 3, 2, 4, 2, 5); 
            if(supo2.length >=  answers.length) break; 
        }
        if( answers[i] == supo2[i] ) supo2Ans++;
        
        // 수포자3
        while(true){  
            supo3.push(3,3,1,1,2,2,4,4,5,5); 
            if(supo3.length >=  answers.length) break; 
        }
        if( answers[i] == supo3[i] ) supo3Ans++;
    }
    
    // 2. 가장 많은 문제 맞힌 사람 (오름차순 정렬)
    if(supo1Ans >= supo2Ans && supo1Ans >= supo3Ans)  answer.push(1);
    if(supo2Ans >= supo1Ans && supo2Ans >= supo3Ans)  answer.push(2);
    if(supo3Ans >= supo1Ans && supo3Ans >= supo2Ans)  answer.push(3);
    
    
    return answer;
}

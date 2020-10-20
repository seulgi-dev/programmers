/**
 * 두 개 뽑아서 더하기.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/68644
 * @date 2020-10-20(화)
 * @comment 
 */
 function solution(numbers) {
    var answer = [];
    
    for(var i=0; i< (numbers.length-1) ; i++){
        for(var j=(i+1); j < (numbers.length); j++){
            // answer 배열에 값이 없으면 추가 
            if (answer.indexOf(numbers[i]+numbers[j]) == -1) answer.push(numbers[i]+numbers[j]);
        }
    }
    
    // answer 배열 오름차순 정렬
    answer.sort(function(a, b) { 
        return a - b;
    });
    
    return answer;
}

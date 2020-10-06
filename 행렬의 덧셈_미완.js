/**
 * 행렬의 덧셈.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12950
 * @date 2020-10-06(화)
 * @comment 
 */
 function solution(arr1, arr2) {
    var answer = [[]];
    var temp = "";
    
    for(var i=0; i<arr1.length; i++){
        temp = "";
        
        for(var j=0; j<arr1[0].length; j++){
           if(j == 0)  answer[i].push(arr1[i][j]+arr2[i][j]);
           // temp += parseInt(arr1[i][j]+arr2[i][j]); 
            // answer[i][j]=1;
        }
        // answer[0]=[temp];
    }
    
    return answer;
}

/*
* K번째수
* https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
*/
function solution(array, commands) {
    var answer = [];
    
     for(var t = 0; t < commands.length; t++){
        var i =  commands[t][0];
        var j =  commands[t][1]; 
        var k =  commands[t][2]; 
        var tempArr = [];
        
        // 1. array i번째, j번째 숫자까지 자르기
        tempArr = array.slice(i-1,j);

        // 2. 오름차순 정렬
        tempArr.sort(function (f, s) { return f-s; });
         
        // 3. K번째에 있는 수 확인
        answer[t] = tempArr[(k-1)];
     }
    
    
    return answer;
}

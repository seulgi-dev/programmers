/**
 * 체육복
 * @url https://programmers.co.kr/learn/courses/30/lessons/42862
 * @date 2020-09-17(목)
 * @comment 예외처리 필요(1. 도난 당한 후 앞,뒤로 대여가능 한 경우 2. 여분이 있는데 도난당한 경우)
 */
function solution(n, lost, reserve) {
    var answer = 0;
    var tempArr = [];
    var tempArr2 = [];
    var reserveCtn = 0;
    var cantReserve = [];
    
    for(var i=0; i<lost.length; i++){
        var isReserve = false;
        
        for(var j=0; j<reserve.length; j++){
            if( (reserve[j] == (lost[i]-1)) || (reserve[j] == (lost[i]+1)) ){
                isReserve = true;
                break;
            }
        }
        
        console.log(isReserve);
        if(!isReserve) cantReserve[cantReserve.length] = lost[i];
    }
    
    console.log(cantReserve);

    answer = n-cantReserve.length;
    
    return answer;
}

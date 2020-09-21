/**
 * 콜라츠 추측.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12943
 * @date 2020-09-21(월)
 * @comment 
 */
 
function solution(num) {
    var answer = 0;
    var cnt = 0;
    
    while(num != 1){
        // 짝수라면 2로 나눈다.
        if(num%2 == 0){
            num = num/2;
        // 홀수라면 3을 곱하고 1을 더한다.
        }else{
            num = num*3+1;
        }      
        cnt++
    }
    
    // 작업을 500번 반복해도 1이 되지 않으면 -1 리턴
    return (cnt < 500) ? cnt : -1;
}

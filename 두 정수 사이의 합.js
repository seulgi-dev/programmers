/**
 * 두 정수 사이의 합
 * @url https://programmers.co.kr/learn/courses/30/lessons/12912
 * @date 2020-09-15(화)
 * @comment 가우스 공식을 사용해 극한의 리팩토링을 할 수 있지만, 가독성을 생각함.
 */
function solution(a, b) {

    // 1. a와 b가 같은 경우 => 둘 중 아무 수나 리턴
    if(a == b) return a;

    // 2. a와 b가 다른 경우(대소 관계 X) => a와 b사이에 속한 모든 정수의 합 리턴    
    var answer = 0;
    var min = Math.min(a,b);
    var max = Math.max(a,b);

    for(var i=min; i<=max; i++){
        answer += i;
    }

    return answer;
}

/**
 * 핸드폰 번호 가리기.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12948
 * @date 2020-09-29(화)
 * @comment 함수를 이용해서 더 효율적으로 할 수 있을 것 같다
 */
function solution(phone_number) {
    var answer = '';

    // 전화번호 뒷 4자리를 제외한 나머지 숫자 *로 처리
   for(var i=0; i< (phone_number.substring(0, (phone_number.length-4)).length); i++){
        answer += '*';   
   }
    
    // 전화번호 뒷 4자리 
    answer += phone_number.substring((phone_number.length-4), phone_number.length);
    
    return answer;
}

/**
 * 2016년
 * @url https://programmers.co.kr/learn/courses/30/lessons/12901
 * @date 2020-09-16(수)
 * @comment 
 */
function solution(a, b) {
    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return week[new Date('2016-' + a + '-' + b).getDay()];
}

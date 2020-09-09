/*
[문제 설명]
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 

예를 들어
()() 또는 (())() 는 올바른 괄호입니다.
)()( 또는 (()( 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 
문자열 s가 올바른 괄호이면 true를 return 하고, 
올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

[제한사항]
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

[입출력 예]
s       answer
()()    true
(())()  true
)()(    false
(()(    false
*/
function solution(s){
    var answer = true;

    // 문자열 s가 올바른 괄호 인지 판단
    // 1. "(" 로 시작할 것
    if(s.substring(0,1) != "(") return false;
    
    // 2. "(" 갯수 보다 ")" 갯수가 많지 않을 것 
    var parentheses_left = 0; // "("
    var parentheses_right = 0; // ")"
    
    for(var i=0; i<s.length; i++){
        if(s.substring(i,i+1) == "("){
            parentheses_left++;
        }else{
            parentheses_right++;
        }
        
        if(parentheses_left < parentheses_right) return false;
    }
    
    // 3. "("와 ")" 갯수가 맞을 것
    if(parentheses_left != parentheses_right) return false;
    
    return answer;
}

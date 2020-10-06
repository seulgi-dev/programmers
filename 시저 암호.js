/**
 * 시저 암호.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript
 * @date 2020-10-02(금), 2020-10-06(화)
 * @comment 
 */
function solution(s, n) {
    var answer = '';
    var tempLowArr = ['a','b','c','d','e','f','g','h','i','j','k'
                      ,'l','m','n','o','p','q','r','s','t','u',
                      'v','w','x','y','z'];
    var tempUppArr = ['A','B','C','D','E','F','G','H','I','J'
                      ,'K','L','M','N','O','P','Q','R','S','T'
                      ,'U','V','W','X','Y','Z'];
    
    for(var i=0; i<s.length; i++){
        var temp = s.substring(i,i+1);
        var index = 0;
        
        // 소문자
        if(tempLowArr.indexOf(temp) != -1){
            index = tempLowArr.indexOf(temp);            
            answer += ( (index+n) >= 26 ? tempLowArr[index+n-26] : tempLowArr[index+n]);
            
        // 대문자
        }else if(tempUppArr.indexOf(temp) != -1){
            index = tempUppArr.indexOf(temp);
            answer += ( (index+n) >= 26 ? tempUppArr[index+n-26] : tempUppArr[index+n]);
            
        // 공백
        }else{
            answer += temp;
        }
    } 
    
    return answer;
}

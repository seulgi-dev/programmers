
/**
 * 수박수박수박수박수박수?
 * @url https://programmers.co.kr/learn/courses/30/lessons/12922
 * @date 2020-09-08(화)
 * @comment 
 */

class Solution {
    public String solution(int n) {
        String answer = "";
        
        for (int i=0; i<n; i++){
            if(i%2 == 0){
                answer += "수";
            }else{
                answer += "박";                
            }
        }
        
        return answer;
    }
}

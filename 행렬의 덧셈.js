/**
 * 행렬의 덧셈.js
 * @url https://programmers.co.kr/learn/courses/30/lessons/12950
 * @date 2020-10-06(화), 2020-10-07(수)
 * @comment n차원 배열 선언 시 각 행에 몇개의 열이 있는지 선언 필요
 */
function solution(arr1, arr2) {
    var myArray = [[]];
    
   for(var i=0; i<arr1.length; i++){
       // n차원 배열 선언 시 각 행에 몇개의 열이 있는지 선언 필요
       myArray[i] = new Array(arr1[i].length);
       
        for(var j=0; j<arr1[0].length; j++){
           myArray[i][j] = arr1[i][j]+arr2[i][j]; 
        }
    } 
    
    return myArray;
}

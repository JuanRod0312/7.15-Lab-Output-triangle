function drawTriangle(triangleSize) {
   
   for(let i=0; i<triangleSize; i++){
      let print = ""
      for(let j=0;j<=i;j++){
         print+='*'
         
      }
      console.log(print)
   }
   
}

console.log("Testing drawTriangle()...");

// TODO: Test drawTriangle() with different arguments
drawTriangle(4);


// Do NOT remove the following line
export default drawTriangle;
const initShaders = (gl, vshader, fshader)=>{
  
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);//创建顶点着色器对象
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER); //创建片元着色器对象
  gl.shaderSource(vertexShader, vshader); //引入顶点、片元着色器源代码
  gl.shaderSource(fragmentShader, fshader);
  gl.compileShader(vertexShader);//编译顶点、片元着色器
  gl.compileShader(fragmentShader);
  var program = gl.createProgram();//创建程序对象program
  gl.attachShader(program, vertexShader); //附着顶点着色器和片元着色器到program
  gl.attachShader(program, fragmentShader); 
  gl.linkProgram(program);//链接program
  gl.useProgram(program); //使用program
  return program; //返回程序program对象
}

module.exports = {
  initShaders: initShaders
}



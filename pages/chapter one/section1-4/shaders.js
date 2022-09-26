const vshader=
  'void main(){\n'+
  'gl_PointSize=20.0;\n'+
  'gl_Position=vec4(0.0,0.0,0.0,1.0);\n'+
  '}';
  const fshader=
  'void main(){\n'+
  'gl_FragColor=vec4(0.0,1.0,0.0,1.0);\n'+
  '}';
  module.exports={
    vShader:vshader,
    fShader:fshader
  }
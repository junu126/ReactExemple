import webpack from 'webpack';

module.exports = {
  mode : 'development', // development일때는 개발용, production일때는 배포용이며 자동 최적화가 이루어짐

  // 웹펙이 파일을 읽어들이기 시작하는 부분 key에 해당하는 파일(.js)이 나온다.
  entry : {
    app : '', // key : 파일경로 -> app : app.js
    todo : '', // key : 파일경로 -> todo : todo.js
  },

  /* 하나의 엔트리에 여러 파일을 넣고 싶을때에는 배열을 만든다.
   * a.js와 b.js가 한 파일로 묶여 app.js라는 결과로 나온다.
   * entry : {
   *  app : ['a.js', 'b.js'],
   * },
   */

  // 결과물이 어떻게 나올지 설정
  output : { 
    path : '',
    filename : '',
    publicPath : '',  //
  },
  
  module : {

  },
  
  plugins : [],
  
  optimization : {},
  
  resolve : {
    modules : ['node_modules'], // 노드 모듈과 연동해서 디렉토리의 노드모듈을 인식함.
    extenstions : ['.js', '.css', '.jsx', '.json'], // 확장자를 정의해서 import할때 확장자를 붙이지 않아도 된다.
  },
};

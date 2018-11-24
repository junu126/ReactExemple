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
    path : '/src',  // 파일이 저장될 경로
    filename : '[name].js',  // [name]에는 entry나 vender의 key가 들어감
//  filename : '[hash].js',  // [hash]는 매번 웹펙 컴파일시 랜덤한 문자열을 넣어줌(캐시 삭제 유용).
//  filename : '[chunkhash].js'  // [chunkhash]는 파일이 달라질 때마다 랜덤한 문자열을 넣어줌 (변경안된 파일은 캐싱하고 새로운 파일 불러오기 가능)
    publicPath : '/',  // 파일들이 위치할 서버상 경로
  },
  
  module : {
    rules : [{
      test : /\.jsx?$/,
      loader : 'babel-loader',  // test에 부합하는 파일을 컴파일 해줌.
      options : {
        present : [
          [
            '@babel/present-env', {
              targets : { node : 'current' }, // 노드일 경우만 해당됨.
              modules : 'false',  // false로 해야 트리쉐이킹이 됨. -> 모듈시스템 import되지 않은 export를 정리해줌.
            },
          ],
          '@babel/preset-react',
          '@babel/preset-stage-0',
        ],
      },
      exclude : ['/node_modules'],
    }],
  },
  
  // 압축, 핫리로딩, 파일복사 등의 부수 작업 가능.
  plugins : [ 
    new webpack.LoaderOptionsPlugin({
      minimize : true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify('production'),  // 아래의 EnvironmentPlugin처럼 할 수도 있다.
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']), // 요즈음에는 위의 DefinePlugin보다 이렇게 하는 추세.
  ],
  
  // 최적화 관련 플러그인들이 통합됨.
  optimization : {
    minimize : true/false,
    splitChunks : {},
    concatentateModules : true,
  },
  
  resolve : {
    modules : ['node_modules'], // 노드 모듈과 연동해서 디렉토리의 노드모듈을 인식함.
    extenstions : ['.js', '.css', '.jsx', '.json'], // 확장자를 정의해서 import할때 확장자를 붙이지 않아도 된다.
  },
};

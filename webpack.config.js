module.exports = {
  entry: [
    './app/app.jsx',
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Property: __dirname + '/app/components/signupflow/Property.jsx',
      SignUpToolbar: __dirname +'/app/components/signupflow/SignUpToolbar.jsx',
      Tenant: __dirname + '/app/components/signupflow/Tenant.jsx',
      Rent: __dirname + '/app/components/signupflow/Rent.jsx',
      BankInfo: __dirname + '/app/components/signupflow/BankInfo.jsx',
      SignUpSuccess: __dirname + '/app/components/signupflow/SignUpSuccess.jsx',
      Navigation: __dirname + '/app/components/signupflow/Navigation.jsx',
      SignUpContainer: __dirname + '/app/components/SignUpContainer.jsx',
      Main: __dirname + '/app/components/Main.jsx',
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {

    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0']
            }
        }]
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }

    ]
  },

  devtool: 'cheap-module-eval-source-map'
};

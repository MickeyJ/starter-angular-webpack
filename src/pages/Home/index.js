
const configHomePage = () =>{
  require('./home.scss');
  return{
    url: '/',
    template: require('./home.html'),
    controller: ($scope) =>{

      $scope.title = 'Home Page'

    }
  }
}

export default configHomePage;
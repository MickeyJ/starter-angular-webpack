
const configHomePage = () =>{
  return{
    url: '/',
    template: require('./home.html'),
    controller: ($scope) =>{
      
      $scope.title = 'Home Page'
      
    }
  }
};
export default configHomePage
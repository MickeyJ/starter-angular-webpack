
const configAboutPage = () =>(
  {
    url: '/about',
    template: require('./about.html'),
    controller: ($scope) =>{
  
      $scope.title = 'About Page'
  
    }
  }
);

export default configAboutPage;
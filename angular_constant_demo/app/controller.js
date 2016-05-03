app.controller('Controller', ['$scope', 'all_sections', 'before_sections', 'hierarchy_sections',

    function($scope, all_sections, before_sections, hierarchy_sections) {

    $scope.data = hierarchy_sections;
    
}]);

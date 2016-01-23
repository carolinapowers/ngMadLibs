angular.module('myApp', [])
    .controller('MainCtrl', function ($scope) {
        $scope.gender = '';


        $scope.genderAppropriateLanguage = {
            subject: "",
            pronoun: "",
            possessive: ""
        }

        $scope.changeGender = function (gender) {

            if (gender == 'female') {
                $scope.genderAppropriateLanguage.subject = 'she';
                $scope.genderAppropriateLanguage.pronoun = 'her';
                $scope.genderAppropriateLanguage.possessive = 'her';
                $scope.gender = "";
            } else {
                $scope.genderAppropriateLanguage.subject = 'he';
                $scope.genderAppropriateLanguage.pronoun = 'him';
                $scope.genderAppropriateLanguage.possessive = 'his';
                $scope.gender = "";
            }
        }
    });
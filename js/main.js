angular.module('myApp', ['ngMessages', 'ngAnimate'])
    .controller('MainCtrl', function ($scope) {
        $scope.gender = '';

        $scope.formIsVisible = true;

        $scope.genderAppropriateLanguage = {
            subject: "he/she",
            pronoun: "him/her",
            possessive: "his/her"
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

        $scope.submit = function () {
            $scope.formIsVisible = false;
        };

        $scope.startOver = function () {
            $scope.formIsVisible = true;
            $scope.maleName = "";
            $scope.jobTitle = "";
            $scope.tediousTask = "";
            $scope.dirtyTask = "";
            $scope.celebrity = "";
            $scope.uselessSkill = "";
            $scope.obnoxiuousCelebrity = "";
            $scope.hugeNumber = "";
            $scope.adjective = "";
            $scope.madForm.$submitted = false;
            $scope.madForm.$setPristine();
        }

    });
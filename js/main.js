<<<<<<< HEAD
angular.module('myApp', ['ngMessages'])
=======
angular.module('myApp', ['ngMessages', 'ngAnimate'])
>>>>>>> d0c8484a233fe1ac9c61b49da0b2cba44dadc7eb
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
<<<<<<< HEAD
        $scope.integerval = /^\d*$/;
=======

>>>>>>> d0c8484a233fe1ac9c61b49da0b2cba44dadc7eb
    });
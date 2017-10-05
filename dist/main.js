'use strict';
var petStore = {
    pets: ['dog', 'cat'],
    createRandomPetPicker: function () {
        var _this = this;
        return function () {
            var pets = _this.pets;
            var i = Math.floor(Math.random() * pets.length);
            return pets[i];
        };
    }
};
var getRandomPet = petStore.createRandomPetPicker();
console.log(getRandomPet());

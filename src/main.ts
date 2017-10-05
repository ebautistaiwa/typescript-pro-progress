'use strict'

interface PetStore{
    pets: string[],
    createRandomPetPicker(): Function
}

const petStore : PetStore = {
    pets: ['dog', 'cat'],
    createRandomPetPicker: function(this: PetStore){
        return () => {
            const pets = this.pets
            const i = Math.floor(Math.random() * pets.length)
            return pets[i]
        }
    }
}

const getRandomPet = petStore.createRandomPetPicker()
console.log(getRandomPet())
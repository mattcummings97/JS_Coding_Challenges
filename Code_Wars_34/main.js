/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

*/ 

function howMuchILoveYou(nbPetals) {
    if(nbPetals === 1 || nbPetals === 7){
      return 'I love you'
    }else if(nbPetals === 2 || nbPetals === 8){
      return 'a little'
    }else if(nbPetals === 3 || nbPetals === 9){
      return 'a lot'
    }else if(nbPetals === 4 || nbPetals === 10){
      return 'passionately'
    }else if(nbPetals === 5 || nbPetals === 11){
      return 'madly'
    }else if(nbPetals === 6 || nbPetals === 12){
      return 'not at all'
    }
}

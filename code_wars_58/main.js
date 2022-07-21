/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel*/

function disemvowel(str) {
    let newstr = str.split('')
    for(let index = 0; index < newstr.length; index++){
      if(newstr[index] === 'a'){
        newstr.splice(index,1) 
        index--
      }else if(newstr[index] === 'A'){
        newstr.splice(index,1)
        index--
      }else if(newstr[index] === 'e'){
        newstr.splice(index,1)
        index--
      }else if(newstr[index] === 'E'){
        newstr.splice(index,1)
        index--
      }else if(newstr[index] === 'i'){
        newstr.splice(index,1)
        index--
      }else if(newstr[index] === 'I'){
        newstr.splice(index,1)
        index--
      }else if(newstr[index] === 'o'){
        newstr.splice(index,1)
        index--
      }else if(newstr[index] === 'O'){
        newstr.splice(index,1)
        index--
      }else if(newstr[index] === 'u'){
        newstr.splice(index,1)
        index--
      }else if(newstr[index] === 'U'){
        newstr.splice(index,1)
        index--
      }
    }
      return newstr.join('')
    }
    
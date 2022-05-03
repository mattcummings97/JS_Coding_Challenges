/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.*/

function removeExclamationMarks(s) {
    let newS = s.replaceAll('!','')
    s = newS
    return newS;
  }

  removeExclamationMarks('Hello World!')
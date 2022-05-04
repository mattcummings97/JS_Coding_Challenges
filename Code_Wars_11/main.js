/*Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U'). */

function DNAtoRNA(dna) {
    const array = dna.split('')
    
    for (let i = 0; i < array.length; i++) {
      if(array[i] === 'T') {
        array[i] = 'U'
      }
    }
    
    return array.join('')
  }
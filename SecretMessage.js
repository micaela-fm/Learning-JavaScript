let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript']; 

// step 1, 2
secretMessage.pop(); 

// step 3
secretMessage.push('to', 'Program'); 

// step 4
const index = secretMessage.indexOf('easily'); 
secretMessage[index] = 'right'; 

// step 5
secretMessage.shift(); 

// step 6
secretMessage.unshift('Programming');

// step 7
const beginIndex = secretMessage.indexOf('get'); 
const endIndex = secretMessage.indexOf('time'); 
const elementsToReplace = endIndex - beginIndex + 1; 
secretMessage.splice(beginIndex, elementsToReplace, 'know,'); 
//console.log(secretMessage); 

// step 8
console.log(secretMessage.join(' ')); 


import { v4 as uuidv4 } from 'uuid';

export const Shuffle = (playerList) => { 

    const finalArr = shuffleArray(playerList);
    return finalArr;
}

const shuffleArray = (playerList) => {

    let arrayCopy = playerList.slice();
    // shuffles the array
    for (let i = arrayCopy.length - 1; i > 0; i--) { // starts at last index    
        const j = Math.floor(Math.random() * (i + 1)); // randomizes a number from 0 to array length
        // alt to the code below [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
        let temp = arrayCopy[i]; // temp will be equal to the last element in array
        arrayCopy[i] = arrayCopy[j]; // the last element's value will be equal to value on the randomized index number
        arrayCopy[j] = temp; // the randomized element's value will now be equal to the placeholder temp
    }
    return checkIfComplete(arrayCopy);
}

const checkIfComplete = (arrayCopy) => {
        
    let selected = [];
    let sizePlaceholder = 50; 
    let selectedArrIndex = 0;
    let interval = 0;

    for(let i = 0; i < sizePlaceholder; i++) { // loop ends when selected array has 40 elements
        if(arrayCopy[i].isActive && !Object.values(arrayCopy[i]).some(x => x === null || x === '')) {
            //if arrayCopy[i].values are not null, proceed else increase placeholder
            if (interval === 0) { // correct answer for each question
                selected[selectedArrIndex] = {
                    answerText: arrayCopy[i].firstName + ' ' + arrayCopy[i].lastName,
                    isCorrect: true,
                    imgUrl: `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${arrayCopy[i].personId}.png`
                }
                selectedArrIndex++;
                interval++;
            } else if (interval > 0 && interval <= 3) { // 3 incorrect choices for each question
                selected[selectedArrIndex] = {
                    answerText: arrayCopy[i].firstName + ' ' + arrayCopy[i].lastName,
                    isCorrect: false
                }
                selectedArrIndex++;
                interval++;
            } else if (interval === 4) { // resets interval
                interval = 0;
            }
        } else {
            sizePlaceholder++;
        }
    }

    let finalArr = [];
    let info = 0;

    for (let i = 0; i < 10; i++) {
        finalArr.push({
            id: uuidv4(),
            answerOptions: [
                selected[info],
                selected[info+1],
                selected[info+2],
                selected[info+3]
            ],
            imgUrl: selected[info].imgUrl
        });
        info += 4
    }

    return shuffleOptions(finalArr);

}

const shuffleOptions = (finalArr) => {
    for (let i = 0; i < finalArr.length - 1; i++) {
        for(let j = finalArr[i].answerOptions.length - 1; j > 0; j--) {
            const k = Math.floor(Math.random() * (j + 1)); // randomizes a number from 0 to array length
            let temp = finalArr[i].answerOptions[j]; // temp will be equal to the last element in array
            finalArr[i].answerOptions[j] = finalArr[i].answerOptions[k]; // the last element's value will be equal to value on the randomized index number
            finalArr[i].answerOptions[k] = temp; // the randomized element's value will now be equal to the placeholder temp
        }
       }
    return finalArr;
}


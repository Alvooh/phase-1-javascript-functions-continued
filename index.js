function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}



function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(asterisk = "*"){
    return function(strin = 'a hard worker'){
        return `You are ${asterisk}${strin}${asterisk}!`
}

}

saturdayFun('bathe my dog')

mondayWork('work from home')
wrapAdjective()
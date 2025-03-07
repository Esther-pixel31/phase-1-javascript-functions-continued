// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

console.log (saturdayFun());
console.log (saturdayFun("bathe my dog"));

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

    console.log (mondayWork());
    console.log (mondayWork("work from home"));

    function wrapAdjective(wrapper = "*") {
        return function(adjective) {
            return `You are ${wrapper}${adjective}${wrapper}!`;
        };
    }
    
    // Test cases
    const starWrap = wrapAdjective("*");
    console.log(starWrap("amazing")); 
    
    const pipeWrap = wrapAdjective("||");
    console.log(pipeWrap("a champion")); 
    
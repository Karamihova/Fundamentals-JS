function solve(country){

    let language = "unknown";

    if(country === "England" || country === "USA"){
        language = "English";
    } else if(country === "Spain" || country === "Argentina" || country === "Mexico"){
        language = "Spanish";
    }

    console.log(language);
}
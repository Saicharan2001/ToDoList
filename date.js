
// export default getDate;

// Here module.exports is an object
module.exports = getDate;

// We can simplify the code below using anonymous or array functions
function getDate(){
    let today = new Date();
    let options = {
        weekday : "long",
        month : "long",
        day : "numeric"
    }
    let day = today.toLocaleDateString("en-US",options);
    return day;
}
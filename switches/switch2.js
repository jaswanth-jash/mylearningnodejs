var vault = prompt("Which vault do you want to enter?").toUpperCase();
var vaultCode = prompt("Which code do you use ???","1234");
switch (vault) {
    case "101":
    if (vaultCode === "1234" || "vaultCode" === "102"){
        alert("101");
        }
        else {
            alert("boo");
            }
        break;
    case "108":
    if (vaultCode === "2345" && vaultCode === "101"){
        alert("108");   
        }
        else {
            alert("bla")   ;
            }
        break;
    case "112":
        console.log("here comes the vault 112");
        //code
        break;
    default:
       console.log("The vault " + vault + " is not known!!");
        //code
}
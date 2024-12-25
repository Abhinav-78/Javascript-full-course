const accountId=14553
let accountEmail="abhinavg630639@gmail.com"
var accountPassword="12345678"
accountCity="Jaipur"  // bina data type btaye bhi hm vaiable declare kr skte hai
let accountState;  // agr hm variable ki value nhi dete hai to js use undefined manta hai

//accountId=2  // it is not allowed to modify constant variable

accountEmail="hello@hc.com"
accountPassword="1234"
accountCity="bagaluru"

console.log(accountEmail)

console.table([accountEmail,accountPassword, accountCity, accountState])

/* prefer not to use var
 because of issue in block scope and functional scope( mtlb kisi ek jagah us variable k name ko modify kiye to har jagah change ho jata tha) 
 */


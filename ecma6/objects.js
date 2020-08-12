const team = {

    "0":{
        name:"Edwin",
        edad:27
    },
    "1":{
        name:"Raul",
        edad:26
    },
    "2":{
        name:"Mali",
        edad:23
    }
}

//console.log(team[1].name);
// keys
console.log(" Keys---->", Object.keys(team))
const teamKeys =  Object.keys(team)
for(let i =0 ; i < teamKeys.length;i++){
    const currentKey = teamKeys[i]
    console.log(team[currentKey].name)
}
//values 
console.log(" Values---->", Object.values(team))
const teamValues = Object.values(team)

teamValues.forEach((member) => {
    console.log("Miembro del team --->",member.name )
})

//Entries 
console.log("Entries --->", Object.entries(team))//Convierte un objeto en un arreglo de areglos

const teamEntries = Object.entries(team)

for (const entry of teamEntries) {
    const numMember = entry[0]
    const member = entry[1]
    // const [numMember, member] = entrie //destructuring
    console.log(`El miembro Num: ${numMember} es ${member.name}`)
}

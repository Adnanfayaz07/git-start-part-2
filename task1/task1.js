console.log('person1:shows ticket')
console.log('person2:shows ticket')
const premovie = async () =>{
    const promisewifebringingticket = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000)
    })
    const getpopcorn = new Promise((resolve,reject)=>resolve(`popcorn`))
    const addbutter = new Promise((resolve,reject)=>resolve(`butter`))
    const getcolddrinks = new Promise((resolve,reject)=>resolve(`colddrink`))
    let ticket = await promisewifebringingticket;
    console.log(`wife:i have the ${ticket}`)
    console.log('husband:we should go in')
    console.log('wife:no i am hungry')
    
    let popcorn = await getpopcorn;

    console.log(`husband:i got some ${popcorn}`)
    console.log('husband:we should go in')
    console.log('wife:i need butter on my popcorn')
     let butter = await addbutter;

     console.log(`husband:i got some ${butter} on popcorn`)
    console.log ('husband:anything else darling?')
    console.log('wife:get some colddrink')
    console.log('husband:shit i forgot that')

    let colddrink = await getcolddrinks;
    console.log('wife:lets go we are getting late')
    console.log('husband:thanku for the reminder *grins*') 

    return ticket;

}

premovie().then((m)=>console.log(`person3:shows ${m}`))
console.log('person4:shows ticket')
console.log('person5:shows ticket');

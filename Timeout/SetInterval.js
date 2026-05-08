

// setInterval(() => {
//     console.log("Jay Shree Ram")
// },2000);

// let count=0;
// const intervalId=setInterval(()=>{
//     count++;
//     console.log(`Interval Counting ${count} times`);
// },1000);

// setTimeout(()=>{
//     clearInterval(intervalId);
// },1000*11);



const FIFTEEN_DAYS=1000*60*60*24*15;

let joinDate=null;

if(!joinDate){
    console.log("Welcome ! We are glad you are here...");
    joinDate=Date.now();
}

const monthlyCheck=setInterval(()=>{
    const timePeriod=Date.now()-joinDate;
    if(timePeriod>=THIRTY_DAYS){
        console.log("You have been successfully completed 30 days with us . How was your feedback ?");
        clearInterval(monthlyCheck);
    }
},FIFTEEN_DAYS);

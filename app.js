const geocode=require("./data1/geocode");
const forecast = require("./data1/forecast");

const country=process.argv[2];
geocode(country,(error,data)=>{
  console.log("Error: ", error);
  console.log("Data: ", data);
  forecast(data.longitude, data.latitude, (error, data) => {
    console.log("Error: ", error);
    console.log("Data: ", data);
  });
})



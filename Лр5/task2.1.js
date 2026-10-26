let countriesStr = "";

document.getElementById("countryInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    let val = this.value.trim(); 
    
    if (val !== "") {
      if (countriesStr === "") {
        countriesStr = val;
      } else {
        countriesStr += ", " + val;
      }
      
      document.getElementById("countriesOutput").innerHTML = countriesStr;
      
      this.value = "";
    }
  }
});
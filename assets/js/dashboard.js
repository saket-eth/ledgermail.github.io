var xmlHttp = new XMLHttpRequest();
document.getElementById("refresh").addEventListener("click", getData);

async function getData() {
  document.getElementById("refresh").disabled = true;
  document.getElementById("refresh").style.color = "grey";
  xmlHttp.open("GET", "http://pl-reg.herokuapp.com/user-count", false);
  xmlHttp.send(null);

  //   data = await fetch("http://pl-reg.herokuapp.com/user-count", {
  //     method: "GET",

  //     mode: "no-cors",
  //   });
  //   console.log(
  //     "🚀 ~ file: dashboard.js ~ line 6 ~ getData ~ xmlHttp.responseText",
  //     data
  //   );
  // count = await JSON.parse(xmlHttp.responseText);
  let x = 0;
  x = await JSON.parse(xmlHttp.responseText);
  document.getElementById("totalSignups").innerHTML = x.totalRegistrations;
   await document.getElementById("refresh").disabled = false;
   await document.getElementById("refresh").style.color = "white";
}

getData();

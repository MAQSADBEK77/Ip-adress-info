const API =
  "https://ipgeolocation.abstractapi.com/v1/?api_key=f6cc205791c74f5b922d3e67d1467215";
fetch(API)
  .then((response) =>  response.json())
  .then((json) => {
    console.log(json);
    document.querySelector(".d-f").innerHTML = `
    <img src=${json.flag.svg} alt="" class="flag">
    <div class="adress">
    <div>Ip adress - <span class="adress">${json.ip_address}</span></div>
    </div>
    <div class="border"></div>
    <div class="country">
    <div>Location - <span class="state">${json.continent}</span></div>
    <div>State - <span class="state">${json.country}</span></div>
    <div>Region - <span class="state">${json.city}</span></div>
    </div>
    <div class="border"></div>
    <div class="top-text">
    <div>Autonomous system organization - <span>${json.connection.autonomous_system_organization}</span></div>
    <div>Connection type - <span>${json.connection.connection_type}</span></div>
    </div>
    <div class="border"></div>
    <div class="currency">
    ${json.currency.currency_code} --- ${json.currency.currency_name}
    </div>`;
    document.querySelector(".lds-dual-ring").classList.add('d-n');
    document.querySelector(".backdrop").classList.add("d-n");
  });
  
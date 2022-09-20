function openbrewery(input){
    input.map((e)=>{
        document.body.innerHTML +=`<div class="nav-container">
        <div class="container">
    
        <p><span>Name : </span>${e.name}</p>
        <p><span>Address1 : </span>${e.address_2}</p>
        <p><span>Address2 : </span>${e.address_3}</p>
        <p><span>Type : </span>${e.brewery_type}</p>
        <p><span>Phone No : </span>${e.phone}</p>
        <p><span>Url : </span>
        <a href=${e.website_url} target="_blank">Visit</a>
        </p>
        </div>
        </div>
        `
    })
    }
    // fetch("https:api.openbrewerydb.org/breweries",{
    //     method:"GET",
    // }).then((data) => data.json())
    // .then((breweries) => openbrewery(breweries))
    // .catch((rejected) => console.log(rejected))

async function getUser() {
    try {
        const data = await fetch("https://api.openbrewerydb.org/breweries", {
            method: "GET",
        });
        const brewery = await data.json()
        console.log(openbrewery(brewery))
    } catch (code) {
        console.log(code)
    }
}
getUser()
let profitContainer = document.querySelector(".profit-container")

let imgArray = ["https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbear%2Fbear-02.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F996464-bears-brown-bears-animals-wallpapers.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5cPMc3DFpp-KBfdDrZxk0wHaFj%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F10%2F06%2F893456-bears-brown-bear-cubs-two-animals.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2CHuIna0-U68MfgcM7yYmgHaE1%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.ibtimes.com%2Fsites%2Fwww.ibtimes.com%2Ffiles%2Fstyles%2Ffull%2Fpublic%2F2017%2F11%2F20%2Fgrizzly-bear.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkxfRB27UmfBQcOeA6e7QHaEd%26pid%3DApi&f=1"]

function calc() {
    let cost = document.getElementById("cost").value;
    let sell = document.getElementById("sell").value;
    let inv = document.getElementById("inv").value;
    let profit = Math.round((sell - cost) * inv);

    let profitCard = document.createElement("div");
    profitCard.classList.add("profit-card");
    profitCard.classList.add("col-3");

    profitCard.innerHTML = `<div class="img-box">
                            <img src='${imgArray[parseInt(Math.random()*imgArray.length)]}'>
                            </div>
                            <div class="title-box">
                            <h3>Cost Price: ${cost}</h3>
                            <h3>Sell Price: ${sell}</h3>
                            <h3>Inventory: ${inv}</h3>
                            <h3>Profit: ${profit}</h3>
                            <div>`
    profitContainer.appendChild(profitCard)
}
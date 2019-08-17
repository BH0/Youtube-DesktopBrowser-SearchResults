const apiKey = ""; // your Youtube data v3 API key - from https://console.developers.google.com/apis/credentials

document.querySelector("#search-button").addEventListener("click", e => { 
    let searchParam = document.querySelector("#search").value; 
    fetch(`https://www.googleapis.com/youtube/v3/search?q=${searchParam}&maxResults=25&part=snippet&key=${apiKey}`).then(res => res.json().then(data => {
      document.querySelector("#results").innerHTML = ""; 
      data.items.forEach(item => { 
      document.querySelector("#results").innerHTML += `        <div class="video">
            <div class="left"> 
                <img src="${item.snippet.thumbnails.default.url}" />
            </div> 
            <div class="right">
                <div> 
                    <strong>${item.snippet.title}</strong>
                </div> 
                <div> 
                    <p>${item.snippet.thumbnails.default.url}</p>
                </div> 
                <div> 
                    <p>            
                    First 500 People Get 2 Months of Skillshare FREE </p>
                </div> 
                
            </div> 
        </div> 
        `;  
      }); 
  }));   
}); 


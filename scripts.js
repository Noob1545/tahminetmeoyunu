function guard(){
    let random = Math.floor(Math.random() * 100) + 1
    let aray = [10,20,30,40,50,60,70,80,90,100]
    let randomaray = Math.floor(Math.random() * aray.length)
    
    let aray1 = [10,20,30,40,50,60,70,80,90,100]
    let randomwrite = Math.floor(Math.random() * aray.length)
    
    if(random > aray1[randomwrite]){window.location.reload()}
    
    let input = document.getElementById("input")
    
    document.getElementById("b").innerText = "1 ile "+aray1[randomwrite]+" arasında bir sayı tuttum, bulabilirmisin? (unutma sadece 1 hakkın var)"
    
    document.getElementById("buton").addEventListener("click",function(){
        if(input.value == "" || !parseInt(input.value)){alert("lütfen kurallara uygun bir değer gir!")}
        else{if(input.value == random){alert("sayıyı doğru bildin!")+window.location.reload()}
        else{alert("sayıyı tahmin edemedin :( tahmin ettiğim sayı: "+random)
        document.getElementById("buton").disabled = true
        document.getElementById("buton").style.cursor = "not-allowed"}}
    })}
guard()

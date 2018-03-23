var mood = (sentiment.analyze(letterValue)['score'])  

   let iframeSrc = "";

        let iframe = $('<iframe src="" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>')

        if( mood >= 0 && sentiment < 3 ){
            iframeSrc = "https://open.spotify.com/embed?uri=spotify:album:1DFixLWuPkv3KT3TnV35m3";
        }
        
        else if( mood >= 3 && sentiment < 10 ){
            iframeSrc = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DXdPec7aLTmlC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media";
        }
        
        else if( mood >= 10 ){
            iframeSrc = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DXdPec7aLTmlC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media;";
        }
        
        else if( mood < 0 && sentiment > -3 ){
            iframeSrc = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX2pSTOxoPbx9" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media";
        }
        
        else if( mood <= 3 && sentiment > -10 ){
            iframeSrc = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWSqBruwoIXkA" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media";
        }

        else if( mood >= -10 ){
            iframeSrc = "https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX3YSRoSdA634" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media";
        }

        iframe.attr("src", iframeSrc);
        $("#iframeHolder").appendChild(iframeSrc);

//SENTIMENT

//if sentiment score 0<x<3 (sentiment.analyze(letterValue)['score'])
//console.log(Mildy Positive)
//"https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX3rxVfibe1L0" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"

//if sentiment score 3<0<10
//Console.log(Positive)
//"https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DXdPec7aLTmlC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"

//if sentiment score x>10
//Console.log(Very Positive)
//"https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DXdPec7aLTmlC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"


// if sentiment score -3<x<0
//console.log(Mildly Negative)
//"https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX2pSTOxoPbx9" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

// if sentiment score -3<x<-10
//console.log(Negative)
//"https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWSqBruwoIXkA" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

//if sentiment score -10>x
//console.log(Very Negative)
//"https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX3YSRoSdA634" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>





    var przyslowia = ["", "Bez pracy nie ma kołaczy", "Darowanemu koniowi w zęby się nie zagląda", "Fortuna kołem się toczy", "Nie chwal dnia przed zachodem słońca", "Lepszy wróbel w garści niż gołąb na dachu", "Apetyt rośnie w miarę jedzenia","Co ma wisieć nie utonie", "Dzieci i ryby głosu nie mają", "Grosz do grosza, a będzie kokosza", "Łaska pańska na pstrym koniu jeździ" ];

    ktore_przyslowie = Math.floor(Math.random()*10+1); // losowanie liczby z zkaresu 1-10
    var haslo = przyslowia[ktore_przyslowie];
    haslo = haslo.toUpperCase(); // zamieniamy litery na duze
    console.log(haslo);
    var dlugosc = haslo.length;
    var zaszyfrowane_haslo = "";
    var zycia = 8;
    console.log("dlugosc hasla: " + dlugosc);
    for(let i = 0; i < dlugosc;  i++)
    {
       if(haslo[i] != " ") // sprawdza czy i element stringa 'haslo' NIE jest spacja
        zaszyfrowane_haslo = zaszyfrowane_haslo  + "-";
       else 
        zaszyfrowane_haslo =  zaszyfrowane_haslo  + " ";
    }
    function wypisz(){
        document.getElementById("header").innerHTML = zaszyfrowane_haslo;
    }

    String.prototype.replaceAt = function(index, replacement) 
    {
        if (index >= this.length) {
            return this.valueOf();
        }
        return this.substring(0, index) + replacement + this.substring(index + 1);
    }
     
   
    function sprawdz(litera)
    {//Na poczatku zmienilem wielkosc liter na wielkie wiec przy wywolywaniu funkcji przeslana litera tez musi byc wielka
        var poprawna = false;
        for(let i = 0; i < dlugosc; i++)
        {
            if(haslo[i] == litera)
            {
                // zaszyfrowane_haslo[i] = litera; nie dziala   credits: https://www.techiedelight.com/replace-character-specified-index-javascript/
                zaszyfrowane_haslo = zaszyfrowane_haslo.replaceAt(i, litera);
                poprawna = true;
            }
        }
        if (poprawna == true)
        {
            wypisz();
            document.getElementById(litera).style.backgroundColor = "green";
        }
        else{
            document.getElementById(litera).style.backgroundColor = "red";
            zycia--;
    
            if (zycia == 0)
                koniec();
        }
    }
    function koniec()
    {
        alert("umarles");
        // tutaj moze jakis popup
    }
    //window.onload = wypisz(); // po uruchomieniu skryptu to ta funkjca sie wykonuje, wiec za kazdym wejsciem na strone
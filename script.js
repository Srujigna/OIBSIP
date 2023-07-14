const calculateTemp = () =>{
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    const celTofah=(cel)=>{
        let fahrenheit = ((cel*9/5)+32).toFixed(2);
        return fahrenheit;
    }
    const fahToCel = (fah) =>{
        let celcius = ((fah - 32)*5/9).toFixed(2);
        return celcius;
    }
    const kelToCel = (kel)=>{
        let celcius = (kel-273.15).toFixed(2);
        return celcius;

    }
    if(valueTemp == 'cel')
    {
        document.getElementById("result").innerHTML = celTofah
        (inputTemp) + "&#176; Fahrenheit";
    }
    else if(valueTemp == 'fah'){
        document.getElementById("result").innerHTML = fahToCel
        (inputTemp) + "&#176; Celcius";
    }
    else{
        document.getElementById("result").innerHTML = kelToCel
        (inputTemp) + "&#176; Celcius";
    }
}

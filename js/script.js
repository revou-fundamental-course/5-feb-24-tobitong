function calculate(s1, s2, value) {
    if(s1==s2) {
        return value;
    }

    else if(s1=="celsius" && s2=="fahrenheit") {
        return (value * 9 / 5) + 32;
    }

    else if(s1=="celsius" && s2=="kelvin") {
        return (value + 273);
    }

    else if(s1=="celsius" && s2=="reamur") {
        return (value * 4 / 5);
    }

    else if(s1=="fahrenheit" && s2=="celsius") {
        return (value - 32) * 5 / 9;
    }

    else if(s1=="fahrenheit" && s2=="reamur") {
        return (value - 32) * 4 / 9;
    }

    else if(s1=="fahrenheit" && s2=="kelvin") {
        return (value - 32) * 5 / 9 + 273;
    }

    else if(s1=="kelvin" && s2=="celsius") {
        return (value - 273);
    }

    else if(s1=="kelvin" && s2=="fahrenheit") {
        return (value - 273) * 9 / 5 + 32;
    }

    else if(s1=="kelvin" && s2=="reamur") {
        return (value - 273) * 4 / 5;
    }

    else if(s1=="reamur" && s2=="celsius") {
        return (value * 5 / 4);
    }

    else if(s1=="reamur" && s2=="fahrenheit") {
        return (value * 9 / 4) + 32;
    }

    else if(s1=="reamur" && s2=="kelvin") {
        return (value * 5 / 4) + 273;
    }
}
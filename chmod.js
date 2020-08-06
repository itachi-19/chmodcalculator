let input  = document.getElementById("input_num");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});

check = (str) => {
    if (str.length==0 || str.length>3) return false;
    for (ch of str) {
        let val = parseInt(ch);
        if (val<0 || val>7) return false;
    }
    return true;
}

calculate = () => {
    let perm = {
        0:'---',
        1:'--x',
        2:'-w-',
        3:'-wx',
        4:'r--',
        5:'r-x',
        6:'rw-',
        7:'rwx',
    };
    // let str = document.getElementById("input_num").getAttribute("value").toString(); // doesn't work :'(
    let str = document.getElementById("input_num").value;
    let out;
    if (check(str)==false) {
         out = "Invalid Input";
    }
    else {
        let inp = [0,0,0];
        out = "-";
        let j = str.length-1;
        for (let i=2;i>=0;i--) {
            if (j>=0) {
                inp[i] += parseInt(str[j]);
                j--;
            }
            else {
                break;
            }
        }
        for (let oct of inp) {
            out = out.concat(perm[oct]);
        }
    }
    document.getElementById("output_str").setAttribute("value",out);
}

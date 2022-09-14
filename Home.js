//Bits
var bits = 0;
var bitsclick = 1;
var bps = 0;

//HTML
var htmllevel = 0;
var htmlcost = 25;
var htmleffect = 0;
var htmltarget = 15;
var htmlcostmulty = 1;

//CSS
var csslevel = 0;
var csscost = 300;
var csseffect = 0;
var csstarget = 15;
var csscostmulty = 1;

//JAVAS
var javaslevel = 0;
var javascost = 1000;
var javaseffect = 1; 
var javastarget = 15;
var javascostmulty = 1;



function buttonbitsclick() {
    bits = bits + (bitsclick * javaseffect) + htmleffect;

}

function htmlupgrade() {
    if(bits >= (htmlcost * htmlcostmulty)) {
        bits = bits - htmlcost;
        htmlcost = htmlcost + 25;
        htmllevel++;
        htmleffect++;
        bitsclick++;

        if (htmllevel == 10) {
            document.getElementById("cssupgradeclick").setAttribute("style", "visibility: visible;");
        }

        if (htmllevel == htmltarget) {
            htmltarget = htmltarget + 15;
            htmlcostmulty = htmlcostmulty + 0.5;
        }

    }
}

function cssupgrade() {
    if(bits >= (csscost * csscostmulty)) {
        bits = bits - (csscost * csscostmulty);
        csscost = csscost + 100;
        csslevel++;
        csseffect= csseffect + 5;
        bps = bps + 5;

        if (csslevel == 10) {
            document.getElementById("javasupgradeclick").setAttribute("style", "visibility: visible;");
        }

        if (csslevel == csstarget) {
            csstarget = csstarget + 15;
            csscostmulty = csscostmulty + 0.5;
        }

    }
}

function javasupgrade() {
    if(bits >= (javascost * javascostmulty)) {
        bits = bits - (javascost * javascostmulty);
        javascost = javascost + 500;
        javaslevel++;
        javaseffect= javaseffect + 0.1;

    }

    if (javaslevel == javastarget) {
        javastarget = javastarget + 15;
        javascostmulty = javascostmulty + 0.5;
    }
}

setInterval (function() {
    bits = bits + (bps * javaseffect);
    document.getElementById("bits").innerHTML = bits;
}, 1000);

setInterval (function() {
    document.getElementById("bits").innerHTML = bits.toFixed(1);
    document.getElementById("buttonvalue").innerHTML = (bitsclick * javaseffect).toFixed(1);
    document.getElementById("bps").innerHTML = (bps * javaseffect).toFixed(1);
    document.getElementById("htmllevel").innerHTML = htmllevel;
    document.getElementById("htmlcost").innerHTML = (htmlcost * htmlcostmulty).toFixed(1);
    document.getElementById("htmlupgradeeffect").innerHTML = htmleffect;
    document.getElementById("csslevel").innerHTML = csslevel;
    document.getElementById("csscost").innerHTML = (csscost * csscostmulty).toFixed(1);
    document.getElementById("cssupgradeeffect").innerHTML = csseffect;
    document.getElementById("javaslevel").innerHTML = javaslevel;
    document.getElementById("javascost").innerHTML = (javascost * javascostmulty).toFixed(1);
    document.getElementById("javasupgradeeffect").innerHTML = javaseffect.toFixed(1);
}, 0);
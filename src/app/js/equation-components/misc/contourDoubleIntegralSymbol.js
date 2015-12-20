eqEd.ContourDoubleIntegralSymbol = function(parent) {
    eqEd.BigOperatorSymbol.call(this, parent); // call super constructor.
    this.className = "eqEd.ContourDoubleIntegralSymbol";

    this.domObj = this.buildDomObj();

    // Height has already been added to properties in superclass
    // needs removed to be overriden
    for(var i = 0; i < this.properties.length; i++) {
        if (this.properties[i].propName === "height") {
            this.properties.splice(i, 1);
        }
    }

    // Set up the height calculation
    var height = 0;
    this.properties.push(new Property(this, "height", height, {
        get: function() {
            return height;
        },
        set: function(value) {
            height = value;
        },
        compute: function() {
            var fontHeight = this.equation.fontMetrics.height[this.parent.parent.fontSize];
            return 2.25 * fontHeight;
        },
        updateDom: function() {
            this.domObj.updateHeight(this.height);
        }
    }));

    // Set up the width calculation
    var width = 0;
    this.properties.push(new Property(this, "width", width, {
        get: function() {
            return width;
        },
        set: function(value) {
            width = value;
        },
        compute: function() {
            var fontHeight = this.equation.fontMetrics.height[this.parent.parent.fontSize];
            return 0.63771381028 * this.height;
        },
        updateDom: function() {
            this.domObj.updateWidth(this.width);
        }
    }));
};
(function() {
    // subclass extends superclass
    eqEd.ContourDoubleIntegralSymbol.prototype = Object.create(eqEd.BigOperatorSymbol.prototype);
    eqEd.ContourDoubleIntegralSymbol.prototype.constructor = eqEd.ContourDoubleIntegralSymbol;
    eqEd.ContourDoubleIntegralSymbol.prototype.buildDomObj = function() {
        var htmlRep = '<div class="bigOperatorSymbol contourDoubleIntegralSymbol" style="width: 56.679272; height: 88.878853;"><svg style="position: absolute; width: 100%; height: 100%;" viewBox="0 0 56.679272 88.878853" preserveAspectRatio="none"><g transform="translate(-195.13912,-222.1657)"><g><path d="m 199.61906,306.20462 c -0.0167,-0.67085 -0.23334,-1.20918 -0.64999,-1.61498 -0.41667,-0.40586 -0.93333,-0.61419 -1.54998,-0.62499 -0.74249,0.0116 -1.30749,0.2383 -1.69498,0.67999 -0.3875,0.44163 -0.58249,1.02829 -0.58499,1.75998 0.0833,1.29578 0.52666,2.3841 1.32998,3.26496 0.80332,0.88078 1.82664,1.33911 3.06996,1.37498 0.94665,-0.025 1.7933,-0.28503 2.53997,-0.77999 0.74665,-0.49503 1.3533,-1.07502 1.81998,-1.73998 0.57998,-0.75835 1.13997,-1.70167 1.67998,-2.82996 0.53998,-1.12835 1.05997,-2.45167 1.55998,-3.96995 0.31248,-0.95335 0.63747,-2.03667 0.97498,-3.24996 0.33748,-1.21334 0.73248,-2.71665 1.18499,-4.50994 1.21577,-4.8797 2.32192,-9.52902 3.31847,-13.94797 0.99651,-4.41895 1.9486,-8.92902 2.85626,-13.5302 0.90762,-4.60116 1.836,-9.61491 2.78515,-15.04128 0.46414,-2.82161 0.8558,-5.08824 1.17499,-6.79992 0.31913,-1.71161 0.66079,-3.45825 1.02498,-5.23993 0.58663,-2.96576 1.10329,-5.34406 1.54998,-7.13491 0.44664,-1.79076 0.9033,-3.31907 1.36999,-4.58494 0.42329,-1.1666 0.85662,-2.09325 1.29998,-2.77996 0.44329,-0.68661 0.87662,-1.09327 1.29998,-1.21999 0.0733,-0.0333 0.16663,-0.0466 0.28,-0.04 0.20746,0.002 0.43246,0.0384 0.67499,0.11 0.24246,0.0717 0.45746,0.16839 0.64499,0.29 0.13913,0.0984 0.3008,0.23172 0.485,0.39999 0.18412,0.16839 0.27579,0.26172 0.27499,0.28 -0.61336,0.14505 -1.11668,0.38505 -1.50998,0.71999 -0.39336,0.33505 -0.59669,0.85504 -0.60999,1.55998 0.0166,0.67087 0.2333,1.2092 0.64999,1.61498 0.41663,0.40587 0.93329,0.61421 1.54998,0.62499 0.75996,-0.0108 1.32995,-0.23912 1.70998,-0.68499 0.37996,-0.44578 0.56995,-1.0441 0.56999,-1.79498 -0.0884,-1.2941 -0.5317,-2.37575 -1.32998,-3.24495 -0.79836,-0.86911 -1.90168,-1.32077 -3.30996,-1.35499 -0.48169,0.008 -0.93835,0.10256 -1.36998,0.285 -0.43169,0.18255 -0.82836,0.40755 -1.18999,0.67499 -1.70834,1.37503 -3.09165,3.575 -4.14994,6.59992 -1.05835,3.025 -1.98167,6.18496 -2.76997,9.47987 -1.22914,4.92837 -2.34419,9.6004 -3.34514,14.01612 -1.00099,4.41576 -1.95308,8.92484 -2.85626,13.52723 -0.90321,4.60242 -1.82271,9.64778 -2.75848,15.1361 -0.56834,3.30495 -1.07167,6.13491 -1.50998,8.48989 -0.43834,2.35496 -0.88167,4.56493 -1.32998,6.62992 -0.73334,3.4591 -1.43666,6.16073 -2.10998,8.10489 -0.67333,1.94412 -1.35665,3.25576 -2.04997,3.93495 -0.21001,0.19747 -0.39,0.33247 -0.53999,0.405 -0.15001,0.0725 -0.33001,0.0975 -0.54,0.075 -0.34,0.002 -0.65999,-0.0617 -0.95998,-0.19 -0.30001,-0.12836 -0.58,-0.33169 -0.83999,-0.60999 -0.08,-0.0625 -0.14001,-0.11753 -0.18,-0.165 -0.04,-0.0475 -0.06,-0.0725 -0.06,-0.075 0.61332,-0.14503 1.11665,-0.38502 1.50998,-0.71999 0.39332,-0.33503 0.59665,-0.85502 0.60999,-1.55998 z m 21.11973,0 c -0.0167,-0.67085 -0.23336,-1.20918 -0.64999,-1.61498 -0.41669,-0.40586 -0.93335,-0.61419 -1.54998,-0.62499 -0.74252,0.0116 -1.30751,0.2383 -1.69498,0.67999 -0.38752,0.44163 -0.58252,1.02829 -0.58499,1.75998 0.0833,1.29578 0.52663,2.3841 1.32998,3.26496 0.8033,0.88078 1.82662,1.33911 3.06996,1.37498 0.94663,-0.025 1.79328,-0.28503 2.53997,-0.77999 0.74662,-0.49503 1.35328,-1.07502 1.81997,-1.73998 0.57996,-0.75835 1.13996,-1.70167 1.67998,-2.82996 0.53996,-1.12835 1.05996,-2.45167 1.55998,-3.96995 0.31246,-0.95335 0.63746,-2.03667 0.97499,-3.24996 0.33746,-1.21334 0.73245,-2.71665 1.18499,-4.50994 1.21574,-4.8797 2.3219,-9.52902 3.31847,-13.94797 0.99649,-4.41895 1.94857,-8.92902 2.85626,-13.5302 0.9076,-4.60116 1.83598,-9.61491 2.78515,-15.04128 0.46411,-2.82161 0.85577,-5.08824 1.17498,-6.79992 0.31912,-1.71161 0.66078,-3.45825 1.02499,-5.23993 0.58661,-2.96576 1.10327,-5.34406 1.54998,-7.13491 0.44661,-1.79076 0.90327,-3.31907 1.36998,-4.58494 0.42328,-1.1666 0.85661,-2.09325 1.29999,-2.77996 0.44327,-0.68661 0.8766,-1.09327 1.29998,-1.21999 0.0733,-0.0333 0.16661,-0.0466 0.28,-0.04 0.20744,0.002 0.43244,0.0384 0.67499,0.11 0.24244,0.0717 0.45744,0.16839 0.64499,0.29 0.13911,0.0984 0.30077,0.23172 0.48499,0.39999 0.18411,0.16839 0.27578,0.26172 0.275,0.28 -0.61338,0.14505 -1.11671,0.38505 -1.50998,0.71999 -0.39338,0.33505 -0.59671,0.85504 -0.60999,1.55998 0.0166,0.67087 0.23327,1.2092 0.64999,1.61498 0.41661,0.40587 0.93326,0.61421 1.54998,0.62499 0.75993,-0.0108 1.32992,-0.23912 1.70998,-0.68499 0.37993,-0.44578 0.56993,-1.0441 0.56999,-1.79498 -0.0884,-1.2941 -0.53172,-2.37575 -1.32998,-3.24495 -0.79838,-0.86911 -1.9017,-1.32077 -3.30996,-1.35499 -0.48171,0.008 -0.93838,0.10256 -1.36998,0.285 -0.43172,0.18255 -0.82838,0.40755 -1.18999,0.67499 -1.70836,1.37503 -3.09167,3.575 -4.14994,6.59992 -1.05837,3.025 -1.98169,6.18496 -2.76997,9.47987 -1.22916,4.92837 -2.34421,9.6004 -3.34514,14.01612 -1.00102,4.41576 -1.9531,8.92484 -2.85626,13.52723 -0.90324,4.60242 -1.82273,9.64778 -2.75848,15.1361 -0.56836,3.30495 -1.07169,6.13491 -1.50998,8.48989 -0.43836,2.35496 -0.88169,4.56493 -1.32999,6.62992 -0.73335,3.4591 -1.43668,6.16073 -2.10997,8.10489 -0.67335,1.94412 -1.35668,3.25576 -2.04997,3.93495 -0.21003,0.19747 -0.39003,0.33247 -0.54,0.405 -0.15002,0.0725 -0.33002,0.0975 -0.53999,0.075 -0.34002,0.002 -0.66002,-0.0617 -0.95999,-0.19 -0.30002,-0.12836 -0.58002,-0.33169 -0.83999,-0.60999 -0.08,-0.0625 -0.14002,-0.11753 -0.17999,-0.165 -0.04,-0.0475 -0.06,-0.0725 -0.06,-0.075 0.6133,-0.14503 1.11662,-0.38502 1.50998,-0.71999 0.3933,-0.33503 0.59663,-0.85502 0.60999,-1.55998 z" /></g><rect style="fill:none;stroke:#000000;stroke-width:2.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0" width="45.400002" height="25.085001" x="200.73912" y="254.06256" ry="13.392859" rx="32.856998" /></g></svg></div>';
        return new eqEd.EquationDom(this, htmlRep);
    };
})();
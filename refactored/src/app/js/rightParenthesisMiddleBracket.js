eqEd.RightParenthesisMiddleBracket = function(index, symbolSizeConfig) {
    eqEd.MiddleBracket.call(this, index, symbolSizeConfig); // call super constructor.
    this.className = "eqEd.RightParenthesisMiddleBracket";
    
    this.character = "&#9119;";
    this.fontStyle = "MathJax_Size4";
    this.domObj = this.buildDomObj();
    this.adjustLeft = 0.001;
    this.adjustTop = 0;

    // Set up the top calculation
    var top = 0;
    this.properties.push(new Property(this, "top", top, {
        get: function() {
            return top;
        },
        set: function(value) {
            top = value;
        },
        compute: function() {
            var fontHeight = this.symbolSizeConfig.height[this.parent.parent.fontSize];
            return (0.45 * this.index + 1.5) * fontHeight;
        },
        updateDom: function() {
            this.domObj.updateTop(this.top);
        }
    }));
};
(function() {
    // subclass extends superclass
    eqEd.RightParenthesisMiddleBracket.prototype = Object.create(eqEd.MiddleBracket.prototype);
    eqEd.RightParenthesisMiddleBracket.prototype.constructor = eqEd.RightParenthesisMiddleBracket;
})();
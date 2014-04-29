eqEd.EquationDom = function(binding, html) {
    this.binding = binding;
    this.value = $(html);
    this.value.data("eqObject", this.binding);
}
eqEd.EquationDom.prototype.constructor = eqEd.EquationDom;
eqEd.EquationDom.prototype.updateWidth = function(width) {
    this.value.css('width', width + 'em');
}
eqEd.EquationDom.prototype.updateHeight = function(height) {
    this.value.css('height', height + 'em');
}
eqEd.EquationDom.prototype.updateLeft = function(left) {
    this.value.css('left', left + 'em');
}
eqEd.EquationDom.prototype.updateTop = function(top) {
    this.value.css('top', top + 'em');
}
eqEd.EquationDom.prototype.clone = function() {
	return this.value.clone();
}
eqEd.EquationDom.prototype.append = function(domObject) {
	this.value.append(domObject.value);
}
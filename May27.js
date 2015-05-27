//  Toy Problerm //

var firstName = ['Tyler', 'Ean', 'Cahlan'];
var lastName = ['McGinnis', 'Platter', 'Sharp']

var combinator = function(firstName, lastName) {
	var bothNames = [];
	for (var i = 0; i < firstName.length; i++) {
			bothNames.push(firstName[i] + ' ' + lastName[i]);
	}
	return bothNames;
}
combinator(firstName, lastName);
combinator(['Tyler', 'Ean', 'Cahlan'], ['McGinnis', 'Platter', 'Sharp']);


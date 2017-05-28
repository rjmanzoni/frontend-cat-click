var Cat = function(name, img) {
    this.name = name;
    this.img = img;
}

HTMLCat = '<div class="tet" id="$catId"><div align="center"><h3>$catName</h3></div><img width=50% src="images/$catImage"><div align="center"><h3 >Clicks:</h3><h3 id="$counter">0</h3></div></div>'

//var cats = ["I", "Me"];

var cats = [new Cat('Renato', 'cat1.jpg'), new Cat('Tiago', 'cat2.jpg'),new Cat('Simone', 'cat3.jpg'),new Cat('Mireille', 'cat4.jpg'),new Cat('NaoSei', 'cat5.jpg')]

var catList = document.getElementById('catList');

for (var i = 0; i < cats.length; i++) {
	document.getElementById('cats').insertAdjacentHTML('beforeend',HTMLCat.replace('$catName',cats[i].name).replace('$catId',cats[i].name).replace('$catImage',cats[i].img).replace('$counter','counter'+cats[i].name));
	catList.insertAdjacentHTML('beforeend', '<li id="'+cats[i].name+'Click">'+cats[i].name+'</li>');

	var elem = document.getElementById(cats[i].name);

	elem.style.display = 'none';
	
	elem.addEventListener('click', function(value){
		return function(){
			var c = document.getElementById('counter'+cats[value].name);
 			c.innerHTML = parseInt(c.innerHTML)+1;
		}
	}(i), false);

	var elemClick = document.getElementById(cats[i].name+'Click');

	elemClick.addEventListener('click', function(value){
		return function(){
			for (var i = 0; i < cats.length; i++) {
				document.getElementById(cats[i].name).style.display = 'none';
			}	
			document.getElementById(this.innerHTML).style.display = 'block';

		}
	}(i), false);
	
}


var wall,thickness;
var bullet,speed,weight;

function setup(){
	
	createCanvas(1600,400);
	speed = random(223,231);
	weight = random(30,52);
	thickness = random(22,83);

	wall = createSprite(1200,200,thickness,height/2);
	bullet = createSprite(50,200,40,30);
	
	bullet.velocityX = speed;
	bullet.shapeColor = "white";
	wall.shapeColor = color(80,80,80);

	
}

function draw(){
	
	background(0,0,0);
	var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
	console.log(damage)

	if(hasCollided(bullet,wall)){
		
		bullet.velocityX = 0;
		

		if( damage<10){

			bullet.shapeColor = color(0,255,0);

		}
		if( damage>10){

			bullet.shapeColor = color(255,0,0);

		}
	}


	drawSprites();
}

function hasCollided(lbullet,lwall){

	lbulletREdge = lbullet.x + lbullet.width;
	lwallLEdge = lwall.x - lwall.width;

	if(lbulletREdge > lwallLEdge){

		return true;

	}else{
		
		return false;
		
	}
}
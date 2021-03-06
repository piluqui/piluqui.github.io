/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Personaje.ts" />
/// <reference path="./Bonus.ts" />

module JuegoCostanera {
	export class Costanera {	
	game:Phaser.Game;
	ancho: number;
	alto:number;
	personaje: Personaje;
	logo: Logo;
	bonus: Phaser.Sprite;
	cursores:Phaser.CursorKeys;
	saltarBtn:Phaser.Key;
	doblesalto:number;
	emitter: Phaser.Particles.Arcade.Emitter;
	emitterBonus: Phaser.Particles.Arcade.Emitter;
	textoVidas: Phaser.Text;
	textoPuntos: Phaser.Text;
	jump: boolean;
	left: boolean;
	right: boolean;
//--------------------setters y getters --------------------------------------
	
	
	setGame(game: Phaser.Game ){
		this.game = game;
	}

	getGame (){
		return this.game;
	}

	setAncho(ancho: number ){
		this.ancho = ancho;
	}

	getAncho (){
		return this.ancho;
	}

	setAlto(alto: number ){
		this.alto = alto;
	}

	getAlto (){
		return this.alto;
	}

	setPersonaje(personaje: Personaje ){
		this.personaje = personaje;
	}

	getPersonaje ():Personaje{
		return this.personaje;
	}

	setCursores(cursores: Phaser.CursorKeys ){
		this.cursores = cursores;
	}

	getCursores (){
		return this.cursores;
	}

	setSaltarBtn(saltarBtn: Phaser.Key ){
		this.saltarBtn = saltarBtn;
	}

	getSaltarBtn (){
		return this.saltarBtn;
	}
	getDobleSalto(){
		return this.doblesalto
	}

	setDobleSalto(valor){
		this.doblesalto=valor;
	}
	setLogo(value:Logo){
		this.logo = value;
	 }

	getLogo ():Logo{
		return this.logo;
	}

	setBonus(value: Phaser.Sprite){
		this.bonus = value;
	}

	getBonus (){
		return this.bonus;
	}
	
	setEmitter(value: Phaser.Particles.Arcade.Emitter){
		this.emitter = value
	}
				
	getEmitter(){
		return this.emitter;
	}
	setEmitterBonus(value: Phaser.Particles.Arcade.Emitter){
		this.emitterBonus = value
	}

	getEmitterBonus(){
		return this.emitterBonus;
	}	
	getTextoPuntos(){
		return this.textoPuntos;
	}
	
	setTextoPuntos(value:Phaser.Text){
		this.textoPuntos = value;
	}
		
	getTextoVidas(){
		return this.textoVidas;
	}
	
	setTextoVidas(value:Phaser.Text){
		this.textoVidas = value;
	}

	setJump(value: boolean ){
		this.jump = value;
	}

	getJump(){
		return this.jump;
	}

	setLeft(value: boolean ){
		this.left = value;
	}

	getLeft(){
		return this.left;
	}

	setRight(value: boolean ){
		this.right = value;
	}

	getRight(){
		return this.right;
	}


	constructor(ancho: number,alto:number){		
		this.setGame(new Phaser.Game( ancho, alto, Phaser.CANVAS, 'content', { 
			preload:this.preload, 
			create:this.create, 
			update: this.update,
			setGame: this.setGame,
			getGame: this.getGame,
			setAncho: this.setAncho,
			getAncho: this.getAncho,
			setAlto: this.setAlto,
			getAlto: this.getAlto,
			setLogo: this.setLogo,
			getLogo: this.getLogo,
			setPersonaje: this.setPersonaje,
			getPersonaje: this.getPersonaje,
			setBonus: this.setBonus,
			getBonus: this.getBonus,
			setCursores: this.setCursores,
			getCursores: this.getCursores,
			setSaltarBtn: this.setSaltarBtn,
			getSaltarBtn: this.getSaltarBtn,
			getDobleSalto: this.getDobleSalto,
			setDobleSalto: this.setDobleSalto,
			getEmitter: this.getEmitter,
			setEmitter: this.setEmitter,
			getEmitterBonus: this.getEmitterBonus,
			setEmitterBonus: this.setEmitterBonus,
			collisionHandler: this.collisionHandler,
			collisionBonus: this.collisionBonus,
			getTextoPuntos: this.getTextoPuntos,
			setTextoPuntos: this.setTextoPuntos,
			getTextoVidas: this.getTextoVidas,
			setTextoVidas: this.setTextoVidas,
			setJump: this.setJump,
			getJump: this.getJump,
			setLeft: this.setLeft,
			getLeft: this.getLeft,
			setRight: this.setRight,
			getRight: this.getRight,
			goFull:this.goFull,
			listener: this.listener,
			listenerJump: this.listenerJump,
			listenerLeft: this.listenerLeft,
			listenerRight: this.listenerRight,
			
		} ));
	}
	
	preload()
	{
		this.getGame().load.image('logo', 'assets/logo.png');
		this.getGame().load.image('bonus', 'assets/hamburger.png');
		this.getGame().load.image('player', 'assets/cat.png');
		this.getGame().load.image( 'costanera', 'assets/costanera.JPG' );
		this.getGame().load.image('gameover', 'assets/gameover.png');
		
		//Agregamos un comentario para probar subir cambios a GIT desde el editor
		//hacemos un cambio en el archivo

		//Botones
		this.getGame().load.spritesheet('buttonvertical', 'assets/button-vertical.png',64,64);
		this.getGame().load.spritesheet('buttonhorizontal', 'assets/button-horizontal.png',96,64);
		this.getGame().load.spritesheet('buttonjump', 'assets/button-round.png',96,96);
		
	}
	
	create(){
		// add the 'logo' sprite to the game, position it in the
		// center of the screen, and set the anchor to the center of
		// the image so it's centered properly. There's a lot of
		// centering in that last sentence

		//Seteamos la imagen del juego en la posicion '0,0'
		//y el ancho y alto de la misma según el tamaño de la ventana actual
		
		if (!this.getGame().device.desktop){ this.getGame().input.onDown.add(this.goFull, this); }

		var logo = this.getGame().add.sprite( this.getGame().world.centerX, this.getGame().world.centerY, 'costanera' );
		logo.x = 0;
		logo.y = 0;
		logo.height = this.getGame().height;
		logo.width = this.getGame().width;

		this.getGame().physics.startSystem(Phaser.Physics.ARCADE);
		this.getGame().time.desiredFps = 30;
		this.getGame().physics.arcade.gravity.y = 200;
		
		//Personaje
		var personaje = new Personaje(this.getGame(),this.getGame().world.centerX, this.getGame().world.top, 'player');
		this.setPersonaje(personaje);

		//mover		
		this.setCursores(this.getGame().input.keyboard.createCursorKeys());
		this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));

		//Logo
		var logo = this.getGame().add.sprite(300, 50, 'logo');
		this.setLogo(logo);
		this.getLogo().name = 'logo';
	
		this.getGame().physics.enable(this.getLogo(),Phaser.Physics.ARCADE);
		this.getLogo().body.setSize(10, 10, 0, 0);
	
	
		//click events
		logo.inputEnabled = true;
		//logo.events.onInputDown.add(this.listener, this);
	
	
	
		//emitter Logo
		var emitter = this.getGame().add.emitter(this.getGame().world.centerX, 5, 5);
		this.setEmitter(emitter);
		this.getEmitter().width = this.getGame().world.width;
		this.getEmitter().makeParticles('logo',null,1,true);
		this.getEmitter().setYSpeed(500, 600);
		this.getEmitter().setXSpeed(-5, 5);
		this.getEmitter().start(false, 1600, 1, 0);

		//emitter bonus
		var emitter = this.getGame().add.emitter(this.getGame().world.centerX, 5, 5);
		this.setEmitterBonus(emitter);
		this.getEmitterBonus().width = this.getGame().world.width;
		this.getEmitterBonus().makeParticles('bonus',null,1,true);
		this.getEmitterBonus().setYSpeed(100, 200);
		this.getEmitterBonus().setXSpeed(-5, 5);
		this.getEmitterBonus().start(false, 1600, 1, 0);


		//  Puntos
		var scoreString = 'Puntos: ';
		var scoreText = this.getGame().add.text(10, 10, scoreString + this.getPersonaje().getPuntos(), { font: '34px Arial', fill: '#fff' });
 		this.setTextoPuntos(scoreText);

 		//  Vidas
 		var vidasString = 'Vidas: ';
 		var vidasText = this.getGame().add.text(this.getGame().world.width - 140, 10, vidasString + this.getPersonaje().getVidas(), { font: '34px Arial', fill: '#fff' });
		this.setTextoVidas(vidasText);

		// create our virtual game controller buttons 
		//Boton de salto
		var buttonjump = this.getGame().add.button(this.getGame().world.width - 140, this.getGame().world.height - 140, 'buttonjump', null, this, 0, 1, 0, 1);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
		buttonjump.fixedToCamera = true;  //our buttons should stay on the same place  
		buttonjump.events.onInputOver.add(this.listenerJump,this,0,true);
		buttonjump.events.onInputOut.add(this.listenerJump,this,0,false);
		buttonjump.events.onInputDown.add(this.listenerJump,this,0,true);
		buttonjump.events.onInputUp.add(this.listenerJump,this,0,false);
			
		//Boton izquierda
		var buttonleft = this.getGame().add.button(30, this.getGame().world.height	- 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
		buttonleft.fixedToCamera = true;
		buttonleft.events.onInputOver.add(this.listenerLeft,this,0,true);
		buttonleft.events.onInputOut.add(this.listenerLeft,this,0,false);
		buttonleft.events.onInputDown.add(this.listenerLeft,this,0,true);
		buttonleft.events.onInputUp.add(this.listenerLeft,this,0,false);
		
		//Boton derecha
		var buttonright = this.getGame().add.button(190, this.getGame().world.height - 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
		buttonright.fixedToCamera = true;
		buttonright.events.onInputOver.add(this.listenerRight,this,0,true);
		buttonright.events.onInputOut.add(this.listenerRight,this,0,false);
		buttonright.events.onInputDown.add(this.listenerRight,this,0,true);
		buttonright.events.onInputUp.add(this.listenerRight,this,0,false);
	

	}

	update () {
		
			// this.game.physics.arcade.collide(this.player, platforms);
		
			//this.getGame().physics.arcade.collide(this.getLogo(), this.getPersonaje(), this.collisionHandler, null, this);
 			this.getGame().physics.arcade.collide(this.getEmitter(),this.getPersonaje(),this.collisionHandler,null, this);
			this.getGame().physics.arcade.collide(this.getEmitterBonus(),this.getPersonaje(),this.collisionBonus,null, this);
	
			this.getPersonaje().body.velocity.x = 0;
			if (this.getCursores().left.isDown || this.getLeft())
			{
				this.getPersonaje().body.velocity.x = -500;
			}
			else if (this.getCursores().right.isDown || this.getRight()){
				this.getPersonaje().body.velocity.x = 500;
			}
						
			
			if ((this.getSaltarBtn().isDown || this.getJump()) && (this.getPersonaje().body.onFloor()))
			{
				this.getPersonaje().body.velocity.y = -600;
			}
		
			if (this.getGame().input.totalActivePointers == 0 && !this.getGame().input.activePointer.isMouse){ this.setRight(false); this.setLeft(false); this.setJump(false)} 
	
	}



		collisionHandler (logo, personaje){
			
			personaje.kill();

			//  Reduce the lives
			if(this.getPersonaje().getVidas()> 0){
			this.getPersonaje().setVidas(this.getPersonaje().getVidas() - 1);
			this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();		
			}
			else{
				logo.kill();
				var gameOver = this.getGame().add.sprite( this.getGame().world.centerX-250, this.getGame().world.centerY-100, 'gameover' );
			}
		}
		
		collisionBonus (hamburguesas, personaje){ 
			personaje.kill();
			//Increase the score
			this.getPersonaje().setPuntos(this.getPersonaje().getPuntos() + 20);
			this.getPersonaje().setPlayerBonus(this.getPersonaje().getPlayerBonus() + 20);
			this.getTextoPuntos().text = "Puntos: " + this.getPersonaje().getPuntos().toString();

			if(this.getPersonaje().getPlayerBonus() == 200 ){
				this.getPersonaje().setVidas(this.getPersonaje().getVidas() + 1);
				this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
				this.getPersonaje().setPlayerBonus(0);
			}
		}

		goFull() { this.getGame().scale.startFullScreen(false);}
		
		listener (){
			this.getPersonaje().revive()
		}
		
		listenerJump(key,arg,arg2){
			this.setJump(arg2);
		}
		
		listenerLeft(key,arg,arg2){
			this.setLeft(arg2);
		}
		
		listenerRight(key,arg,arg2){
			this.setRight(arg2);
		}
	}



// when the page has finished loading, create our game

window.onload = () => {
	var game = new Costanera(window.innerWidth,window.innerHeight);
}

}
/// //<reference path="../tsDefinitions/phaser.d.ts" />

module JuegoCostanera {
    export class Personaje extends Phaser.Sprite{
        puntos: number;
        vidas: number;
        bonus: number;
        orientacion: string;
     
        constructor(game: Phaser.Game, x: number, y: number,frame: string) {
            super(game, x, y, frame);
                            
            this.height = 200;
            this.width = 166;
            game.physics.enable(this,Phaser.Physics.ARCADE);
            this.body.collideWorldBounds = true;
            this.body.gravity.y = 500;
            this.body.setSize(780, 705);
            this.animations.add('left', [0, 1, 2, 3], 10, true);
            this.animations.add('turn', [4], 20, true);
            this.animations.add('right', [5, 6, 7, 8], 10, true);
            this.setOrientacion('left'); 
                  
            this.setPuntos(0);
            this.setVidas (3);
            this.setPlayerBonus(0);
            
            game.add.existing(this);
        }
    
        getPlayerBonus(){
            return this.bonus;
        }
    
        setPlayerBonus(value:number){
            this.bonus = value;
        }
        getPuntos(){
            return this.puntos;
        }
        setPuntos(value:number){
            this.puntos = value;
        }
       
        getVidas(){
            return this.vidas;
        }
        setVidas(value:number){
            this.vidas = value;
        }
    
        setOrientacion(value: string){
            this.orientacion = value;
        }
        
        getOrientacion(){
            return this.orientacion;
        }
    
    }
    }

$(document).ready(function(){

    function Jukebox(){
        this.song = 0; 
    }

    Jukebox.prototype.play = function(){ 
        $("audio")[this.song].play();
    }

    Jukebox.prototype.pause = function(){ 
        $("audio")[this.song].pause(); 
    }

    Jukebox.prototype.stop = function(){
        this.rewind(); 
        this.pause(); 
    }

    Jukebox.prototype.rewind = function(){
        $("audio")[this.song].currentTime = 0;
    }

    Jukebox.prototype.skip = function(){
        this.stop()
        if(this.song < 4) {
            this.song++
        } else if(this.song > 4){
            this.song = 0
        }
    this.play();
    }

    var new_juke = new Jukebox()

    
    $("#play").click(function(){
        new_juke.play(); 
    });

    $("#play").click(function(){
        $("#wrapper").addClass("spin")
    })

    $("#pause").click(function(){
        new_juke.pause(); 
    });

    $("#stop").click(function(){
        new_juke.stop();
    });

    $("#back").click(function(){
        new_juke.rewind();
    });

    $("#next").click(function(){
        new_juke.skip();
    });
});


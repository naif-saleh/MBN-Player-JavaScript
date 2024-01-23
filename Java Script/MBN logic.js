// Button Music Controls............
class ButtonControl{
    constructor(){
        this.playMusic = document.getElementById("play_music");
        this.audioFile = document.getElementById("audio_file");
        this.isPlayed = false;

        this.playMusic.addEventListener("click", ()=>{
            this.playPuseMusic();
        });

        this.title = document.getElementById("name_music");
        this.counter = 0;

             // The name of music........
             this.musicName = [];
             this.musicName[0] = "Alan_Walker___Ava_Max_-_Alone";
             this.musicName[1] = "Alan_Walker_-_Heading_Home";
             this.musicName[2] = "Alan_Walker_-_Diamond_Heart";
             this.musicName[3] = "Alan_Walker_-_Lily";
             this.musicName[4] = "Alan_Walker_‒_Lost_Control";
             this.musicName[5] = "Alan_Walker_-_On_My_Way";
             this.musicName[6] = "All we know";
             this.musicName[7] = "Impossible___Alan_Walker";
             this.musicName[8] = "Alan_Walker_-_Lo";
             this.musicName[9] = "In_Havana";


            // The Path of  music......
            this.musicPath = [];
            this.musicPath[0] = "./music/Alan_Walker___Ava_Max_-_Alone,_Pt._II_(Lyrics)_مترجمة.mp4";
            this.musicPath[1] = "./music/Alan_Walker_-_Heading_Home_(Lyrics)_ft._Ruben_مترجمة.mp4";
            this.musicPath[2] = "./music/Alan_Walker_-_Diamond_Heart_(feat._Sophia_Somajo)_مترجمة.mp4";
            this.musicPath[3] = "./music/Alan_Walker_-_Lily_(مترجمة)_ft._K-391___Emelie_Hollow.mp4";
            this.musicPath[4] = "./music/Alan_Walker_‒_Lost_Control_(Lyrics)_ft._Sorana.mp4";
            this.musicPath[5] = "./music/Alan_Walker_-_On_My_Way_(مترجمة)_ft._Sabrina_Carpenter___Farruko_[PUBG].mp4";
            this.musicPath[6] = "./music/All we know.mp4";
            this.musicPath[7] = "./music/Impossible___Alan_Walker_مترجمه.mp4";
            this.musicPath[8] = "./music/أغاني_اجنبية_حماس_2020_-_اجمل_اغنية_اجنبية_حماسية_مشهورة_2020_-_Alan_Walker_-_Lo.mp4";
            this.musicPath[9] = "./music/في_هافانا_-_اغنية_اجنبية_ذات_احساس_رائع_AMV_مترجمة_In_Havana_لا_تفوتك_🎵(360p).mp4";
          

            this.setPathName();

            // Next Song...........
        document.getElementById("next_music").addEventListener("click", ()=>{
            if(this.counter < this.musicPath.length - 1){
                ++this.counter;
                this.isPlayed = false;
            }else{
                this.counter = 0;
            }
            this.setPathName();
        });

            // Back Song..............
            document.getElementById("back_music").addEventListener("click", ()=>{
                if(this.counter > 0){
                    --this.counter;
                    this.isPlayed = false;
                }else{
                   this.counter = this.musicPath.length;
                }
                this.setPathName();
            });



            // Volume Controls.................


            // Volume Size...
            this.audioFile.volume = 50 /100;
            this.volumeSize = document.getElementById("volume_size");
            this.volumeSize.addEventListener("change", ()=>{
                this.audioFile.volume = this.volumeSize.value/100;
            });

            // Volume Speed...
            this.audioFile.playbackRate = 1;
            this.volumeSpeed = document.getElementById("volume_speed");
            this.volumeSpeed.addEventListener("change", ()=>{
                this.audioFile.playbackRate = this.volumeSpeed.value/100;
            });


    }


    // play music methode......
    playPuseMusic(){
       if(this.isPlayed == false){
        this.playMusic.src = "./images/play.jfif";
        this.audioFile.play();
        this.isPlayed = true;
       }else{
        this.playMusic.src = "./images/pause.jfif";
        this.audioFile.pause();
        this.isPlayed = false;
       }
    }


    setPathName(){
        this.audioFile.src = this.musicPath[this.counter];
        this.title.innerHTML = this.musicName[this.counter];
        this.playPuseMusic();
    }


    }

onload = new ButtonControl();
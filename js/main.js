/**
 * Created by ML006 on 1/19/2016.
 */
function AprioriMod(){
    var tracks = [];
    var baseTracks=[];
    var itemsets=[];
    var itemFreq=[];

    this.getTracks = function(tracks){
        tracks = tracks;
    };
    this.getBaseTracks = function(base){
        for(var p in base){
            baseTracks.push(base[p]);
        }
        console.log(baseTracks);
    };

    this.run = function(){
        getItemsets();
    };

    function getItemsets(){
        console.log(baseTracks);
        for(p in baseTracks){
            //this.itemsets.push(this.baseTracks[p].title);
            if(baseTracks[p].title.indexOf("-")){
                itemsets.push(baseTracks[p].title.substr(0,baseTracks[p].title.indexOf(" - ")));
                itemFreq.push(1);
            }
            if(itemsets.indexOf(baseTracks[p].genre)==-1) {
                itemsets.push(baseTracks[p].genre);
                itemFreq.push(1);
            }else{
                itemFreq[itemsets.indexOf(baseTracks[p].genre)]+=1;
            }
            if(itemsets.indexOf(parseInt((baseTracks[p].duration/1000)/60))==-1) {
                itemsets.push(parseInt((baseTracks[p].duration / 1000) / 60));
                itemFreq.push(1);
            }else{
                itemsets.indexOf(parseInt((baseTracks[p].duration/1000)/60));
            }
            if(baseTracks[p].release_year!=null&&itemsets.indexOf(baseTracks[p].release_year)==-1) {
                itemsets.push(baseTracks[p].release_year);
                itemFreq.push(1);
            }else{
                itemFreq[itemsets.indexOf(baseTracks[p].release_year)]+=1;
            }
            if(baseTracks[p].bpm!=null&&itemsets.indexOf(baseTracks[p].bpm)==-1) {
                itemsets.push(baseTracks[p].bpm);
                itemFreq.push(1);
            }else{
                itemFreq[itemsets.indexOf(baseTracks[p].bpm)]+=1;
            }
            if(baseTracks[p].label_name!=null&&itemsets.indexOf(baseTracks[p].label_name)==-1) {
                itemsets.push(baseTracks[p].label_name);
                itemFreq.push(1);
            }else{
                itemFreq[itemsets.indexOf(baseTracks[p].label_name)]+=1;
            }
        }
        console.log(itemsets);
        console.log(itemFreq);
    };
}






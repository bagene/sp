/**
 * Created by ML006 on 1/19/2016.
 */
function AprioriMod(){
    var tracks = [];
    var baseTracks=[];
    var itemsets=[];
    var itemFreq=[];
    var candidateList={};
    var minSup;
    var candidateSup=[];
    var candidateHighSup=[];
    var freqCount=0;
    var frequentList={};
    var k=1;

    this.getTracks = function(t){
        for(var p in t){
            tracks.push(t[p]);
        }
    };
    this.getBaseTracks = function(base){
        for(var p in base){
            baseTracks.push(base[p]);
        }

    };

    this.run = function(){
        minSup=tracks.length*0.10;
        console.log(minSup);

        getItemsets();
        //console.log(itemsets);
        //console.log(itemFreq);
        //console.log(baseTracks);
        //console.log(itemsets);
        //k++;
        generateCandidate();
        calculateFrequent();
        //console.log(candidateList);
        //console.log(candidateSup);
        //console.log(frequentList);
        k++;
        generateCandidate();
        calculateFrequent();
        k++;
        generateCandidate();
        calculateFrequent();
        //console.log(candidateList);
        //console.log(candidateSup);
        console.log(frequentList);

    };

    function getItemsets(){
        console.log(baseTracks);
        for(p in baseTracks){
            //this.itemsets.push(this.baseTracks[p].title);
            if(baseTracks[p].title.indexOf("-")){
                if(baseTracks[p].title.substr(0,baseTracks[p].title.indexOf(" - "))!="") {
                    itemsets.push(baseTracks[p].title.substr(0, baseTracks[p].title.indexOf(" - ")));
                    itemFreq.push(1);
                }
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
            if(itemsets.indexOf(baseTracks[p].release_year)==-1&&baseTracks[p].release_year!=null) {
                if(baseTracks[p].release_year!="") {
                    itemsets.push(baseTracks[p].release_year);
                    itemFreq.push(1);
                }
            }else{
                itemFreq[itemsets.indexOf(baseTracks[p].release_year)]+=1;
            }
            if(itemsets.indexOf(baseTracks[p].bpm)==-1&&baseTracks[p].bpm!=null) {
                if(baseTracks[p].bpm!="") {
                    itemsets.push(baseTracks[p].bpm);
                    itemFreq.push(1);
                }
            }else{
                itemFreq[itemsets.indexOf(baseTracks[p].bpm)]+=1;
            }
            if(itemsets.indexOf(baseTracks[p].label_name)==-1&&baseTracks[p].label_name!=null) {
                if(baseTracks[p].label_name!="") {
                    itemsets.push(baseTracks[p].label_name);
                    itemFreq.push(1);
                }
            }else{
                itemFreq[itemsets.indexOf(baseTracks[p].label_name)]+=1;
            }
            if(itemsets.indexOf(baseTracks[p].track_type)==-1&&baseTracks[p].track_type!=null){
                if(baseTracks[p].track_type!=""){
                    itemsets.push(baseTracks[p].track_type);
                    itemFreq.push(1);
                }
            }else{
                itemFreq[itemsets.indexOf(baseTracks[p].track_type)]+=1;
            }
        }
    };

    function generateCandidate(){
        candidateSup = [];
        var tempCandList = {};
        var tempSupport = [];
        candidateHighSup=[];
        var count = 0;
        if(k==1){
            for(i in itemsets){
                tempCandList[count] = itemsets[i];
                //if(findHighestBaseSupport(tempCandList[count])!=-1){
                //    candidateHighSup.push(findHighestBaseSupport(tempCandList[count]));
                //}
                tempSupport.push(0);
                count++;
            }
        }else if(k==2){
            for(i=0;i<Object.keys(candidateList).length;i++){
                for(j=i+1;j<Object.keys(candidateList).length;j++){
                    var tempArray = [];
                    tempArray.push(candidateList[i]);
                    tempArray.push(candidateList[j]);
                    tempCandList[count] = tempArray;
                    if(findHighestBaseSupport(tempCandList[count])!=-1){
                        candidateHighSup.push(findHighestBaseSupport(tempCandList[count]));
                    }
                    tempSupport.push(0);
                    count++;
                }
            }
        }else{
            for(i=0;i<Object.keys(candidateList).length;i++){
                for(j=i+1;j<Object.keys(candidateList).length;j++) {
                    var temp1 = [];
                    var temp2 = [];
                    for(l=0;l<k-2;l++){
                        temp1.push(candidateList[i][l]);
                        temp2.push(candidateList[j][l]);
                    }
                    if(compArray(temp1,temp2)){
                        temp1 = [];
                        temp1 = candidateList[i].slice();
                        temp1.push(candidateList[j][candidateList[j].length-1]);
                        tempCandList[count] = temp1;
                        if(findHighestBaseSupport(tempCandList[count])!=-1){
                            candidateHighSup.push(findHighestBaseSupport(tempCandList[count]));
                        }
                        tempSupport.push(0);
                        count++;
                    }
                }
            }
        }
        console.log(tempCandList);
        candidateList = tempCandList;
        candidateSup = tempSupport.slice();
    };

    function findHighestBaseSupport(c){
        var sum=0;
        var high=0;
        var index=-1;
        for(z=0;z< c.length;z++){
            sum+=itemFreq[itemsets.indexOf(c[z])];
            //if(itemFreq[itemsets.indexOf(c[z])]>1){
            //    high = itemFreq[itemsets.indexOf(c[z])];
            //    index=itemsets.indexOf(c[z]);
            //}
        }
        return sum;
    }

    function compArray(arr1, arr2){
        if(arr1.length!=arr2.length)
            return false;
        for (z = 0; z < arr1.length; z++) {
            if(arr1[z]!=arr2[z])
                return false;
        }
        return true;
    };

    function calculateFrequent(){
        var tempFreqList={};
        var tempCandSup = candidateSup.slice();
        for(i=0;i<tracks.length;i++){
            for(j=0;j<Object.keys(candidateList).length;j++){
                if(k>1){
                    var count=0;

                    if(candidateList[j].indexOf(tracks[i].title.substr(0,tracks[i].title.indexOf(" - ")))!=-1){
                        count++;
                    }
                    if(candidateList[j].indexOf(tracks[i].genre)!=-1){
                        count++;
                    }
                    if(candidateList[j].indexOf(parseInt((tracks[i].duration/1000)/60))!=-1){
                        count++;
                    }
                    if(candidateList[j].indexOf(tracks[i].release_year)!=-1){
                        count++;
                    }
                    if(candidateList[j].indexOf(tracks[i].bpm)!=-1){
                        count++;
                    }
                    if(candidateList[j].indexOf(tracks[i].label_name)!=-1){
                        count++;
                    }
                    if(count==k){
                        candidateSup[j]+=1;
                        tempCandSup[j]+=1;
                    }
                }else{
                    if(candidateList[j]==tracks[i].title.substr(0,tracks[i].title.indexOf(" - ")) || candidateList[j]==tracks[i].genre ||
                        candidateList[j]==parseInt((tracks[i].duration/1000)/60) || candidateList[j]== tracks[i].release_year || candidateList[j]== tracks[i].bpm ||
                        candidateList[j]== tracks[i].label_name){
                        candidateSup[j]+=1;
                        tempCandSup[j]+=1;
                    }
                }

            }
        }

        var c=0;
        if(k>1){
            for(i=0;i<Object.keys(candidateList).length;i++){
                candidateSup[i]*=candidateHighSup[i];
                tempCandSup[i]*=candidateHighSup[i];
                if(minSup<candidateSup[i]&&Array.isArray(candidateList[i])){
                    tempFreqList[c++]=candidateList[i];
                    frequentList[freqCount++] = candidateList[i];
                }
            }
        }else{
            for(i=0;i<Object.keys(candidateList).length;i++){
                candidateSup[i]*=itemFreq[i];
                tempCandSup[i]*=itemFreq[i];
                if(minSup<candidateSup[i]){
                    tempFreqList[c++]=candidateList[i];
                    frequentList[freqCount++] = candidateList[i];
                }
            }
        }
        console.log(tempCandSup);
        if(Object.keys(tempFreqList).length){
            candidateList = {};
            for(i=0;i<Object.keys(tempFreqList).length;i++)
                candidateList[i]=tempFreqList[i];
        }


    }
}






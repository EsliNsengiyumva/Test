/**
 * 
 */
var seds=new Array(3);
var obs=new Array(seds.length);
var oc=0;
seds[0]=5.5;
seds[1]=12;
seds[2]=12;
function getBagCounts(){
	var rmr=0;
	var dset=new Array(1,2,4);
	dset[0]=1;
	dset[1]=2;
	dset[2]=4;
	var temp=0;
	var result="";
	var ob;
	for(var i=0;i<seds.length;i++){
		temp=seds[i];
		var mx=dset.length;
		var fl=0;
		if(temp-Math.trunc(temp)<0.5 && temp-Math.trunc(temp)!=0){
			alert("Error: "+(temp-Math.trunc(temp)));
			continue;
		}else{
			fl=temp-Math.trunc(temp);
			rmr=((fl<1)?fl:0);
		}
		for(var j=0;j<mx;j++)
		{
			//alert('j='+j+", mx-1="+(mx-1)+", temp="+temp);
			//alert(dset[j]);
			if(j!=(mx-1)){
				
			      if(temp==dset[j] || temp<dset[j+1]){
				  var ir=temp/dset[j];
				  
				  var im=temp%dset[j];
				  //alert(temp);
				  var fir=Math.trunc(ir)+rmr;
				  if(im>1){
					mx--;
					j=0;
				  }else if(im==1){
					
					result+=fir+"("+dset[j]+"),"+"1(1),";
					//ob={size:temp,count:result}
				  }else{
				      result+=fir+"("+dset[j]+"),";
				     // ob={size:temp,count:result}
				  }	
				}else{
					var complete=Math.trunc(temp);
					var decp=complete-temp;
					//alert(complete+", "+temp);
				}
			}else if(j==mx-1){
				var r=temp/dset[j];
				var m=temp%dset[j];
				var fr=Math.trunc(r)+rmr;
				if(m>1){
					mx--;
					j=0;
				}else if(m==1){
					result+=fr+"("+dset[j]+"),"+1+"(1),";
					//ob={size:temp,count:result}
				}else{
				   result+=fr+"("+dset[j]+"),";
				   //ob={size:temp,count:result}
				}

			}
		}
		
		ob={size:temp,count:result}
		obs[oc++]={size:temp,count:result};
		result="";
	}
	obs.reverse();
	return obs;
}
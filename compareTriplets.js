var a = [5 ,6 ,7]
var b = [3, 6, 10]
function compareTriplets(a, b) {
	let player_score=0;
	let play_score_2=0;
		
		for(let i=0;i<a.length;i++) {
			if(a[i] === b[i]) {
				play_score_2=play_score_2;
				player_score=player_score

			} else if(a[i] < b[i]){
				   play_score_2++
			}else {
				  player_score++
			}
		}
		return [player_score,play_score_2];
	}
	

	console.log(compareTriplets(a,b))
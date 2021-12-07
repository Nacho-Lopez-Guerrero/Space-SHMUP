var enemy : GameObject;
var secondsBetween : float = 2;			//Cada cuantos segundos sale un malo (periodo)
var trackTimer : float;


function Start () {

}

function Update () 
{
	trackTimer -= Time.deltaTime;
	
	if(trackTimer <= 0)
	{
		Instantiate(enemy, transform.position, transform.rotation);
		trackTimer = secondsBetween;
	}
}
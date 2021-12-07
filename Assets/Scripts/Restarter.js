var timer : float = 3;

function Start () {

}

function Update () 
{
	timer -= Time.deltaTime;
	if(timer <= 0)
		Application.LoadLevel(Application.loadedLevel);
}
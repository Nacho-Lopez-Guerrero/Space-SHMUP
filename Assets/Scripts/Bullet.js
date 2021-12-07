var bulletSpeed : float = 25;
var countDownTimer : float = 5;

function Start () {

}

function Update () 
{
	transform.position.z += bulletSpeed * Time.deltaTime;
	countDownTimer -= Time.deltaTime;
	
	if(countDownTimer <= 0)
		Destroy(gameObject);
}
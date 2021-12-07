var playerSpeed : float = 10;
var maxWidth : float = 15;
var bullet : GameObject;
var bulletSpawn : Transform;
var restarter : GameObject;
var explosion : GameObject;

function Start () {

}

function Update () 
{
	transform.position.x += Input.GetAxis("Horizontal") * playerSpeed * Time.deltaTime;	
	if(transform.position.x > maxWidth)
		transform.position.x = maxWidth;
	if(transform.position.x < -maxWidth)
		transform.position.x = -maxWidth;
		
	if(Input.GetButtonDown("Jump"))
		Instantiate(bullet, bulletSpawn.position, bulletSpawn.rotation);
	if(Input.GetButtonDown("Quit"))
		Application.Quit();
}

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "Enemy")
	{
		Instantiate(explosion, transform.position, transform.rotation);
		Instantiate(restarter, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}
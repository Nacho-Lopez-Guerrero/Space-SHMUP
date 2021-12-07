var moveSpeed : float = 25;
var killZPosition : float = -6;
var horizontalRandom : float = 11;
var explosion : GameObject;

function Start () 
{
	transform.position.x += Random.Range(horizontalRandom, -horizontalRandom); 
}

function Update () 
{
	transform.position.z -= moveSpeed * Time.deltaTime;
	moveSpeed += 5 * Time.deltaTime;
	if(transform.position.z <= killZPosition)
		Destroy(gameObject);
}

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "Bullet")
	{
		Instantiate(explosion, transform.position, transform.rotation);
		Destroy(gameObject);
		Destroy(other.gameObject);
	}
}
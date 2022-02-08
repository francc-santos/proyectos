package main

func main()  {
	p := &Person{}
	s := &Slack{}
	e := &Correo{}

	p.AddObserver(s)
	p.AddObserver(e)
	p.SetName("pero")
}
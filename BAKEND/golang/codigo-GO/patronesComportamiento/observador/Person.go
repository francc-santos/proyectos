package main

type Person struct{
	Name string
	Observers []Observer
}

/*  */
func (p *Person) SetName(n string)  {
	p.Name = n
	/* Cuando cambie de estado, va a notificar a todos los observadores registrados, cuando se cambie la intancia  */
	p.NotifyObservers()
}

func (p *Person) AddObserver(o Observer)  {
	p.Observers = append(p.Observer, o)
}

func (p *Person) NotifyObserver(){
	for _, o := range p.Observers{
		/* NOtifica a aquellos observadores que esten registrados */
		o.Notify(p.Name)
	}
}
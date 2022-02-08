package main

type Dog struct{
	Age int
	Observers []Observer
}

/*  */
func (d *Dog) SetAge(age string)  {
	d.Age = age
	/* Cuando cambie de estado, va a notificar a todos los observadores registrados, cuando se cambie la intancia  */
	d.NotifyObservers()
}

func (d *Dog) AddObserver(o Observer)  {
	d.Observers = append(d.Observer, o)
}

func (d *Dog) NotifyObserver(){
	for _, o := range d.Observers{
		/* NOtifica a aquellos observadores que esten registrados */
		o.Notify(string(d.Age))
	}
}
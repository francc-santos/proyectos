package main

/* ETE ES UN OBSERVADOR  */
type Slack struct{

}

func (s *Slack) Notify(m string)  {
	fmt.Println("Estoy notificando a slack:" , m)
}
package main1

import (
	"fmt"
	"./buuilder"
)

type Process struct{
	Executer int `json:"Executer"`
	Process []int `json:"Process"`
}


var p Process

func main()  {

	// De amnera dinamica
	loadProcces()
	b := builder.Builder{}
	b.SetExecuter(p.Executer)

	for -, v := range p.Process{
		b.AddAction(v)
	}



	b := builder.Builder{}
	b.SetExecuter(1)

	// Statico de la ejecucion de nuestras funciones.
	b.AddAction(1)
	b.AddAction(2)
	b.AddAction(3)
	b.AddAction(4)
	b.AddAction(5)

	b.setActions()
	b.Exec.Work()

}

func loadProcces()  {
	f, err := ioutil.ReadFile("process.json")
	if err != nil{
		log.Fatalf("no se puede leer el archivo: %v", err)
	}

	err = json.Unmarshal(f, &p)
	if err != nil{
		log.Fatalf("no se pudo convertir el json al objto: %v", err)
	}
}
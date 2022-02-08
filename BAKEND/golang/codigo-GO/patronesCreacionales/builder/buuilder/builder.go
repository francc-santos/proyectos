package buuilder

type Builder struct{
	// Dos propiedades ele ejecutor , pero no el concreto , sino un interface de flujo de trabajo 
	Exec Executer
	Actions []int
}

// Metodo para indicarle que flujo de trabajo espesifico voy a usar

func (b *Builder) SetExecuter(i int) {
	// 
	switch i{
	case 1:
		b.Exec = new(WorkFlow)
	}
}

func (b *Builder) AddAction(i int) {
	b.Actions = append(b.Actions, i)
}

func (b *Builder) SetActions() {
	// Creando un metodo llamado setActions , que al ejecutor en concreto ejecuta el  metodo load action , enviando las acciones que tiene el builder 
	b.Exec.loadAcctions(v.Actions)
}


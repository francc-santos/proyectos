package conn

import( 
	"sync"
)

var(
	once sync.Once
	instance *connect
)

// Once asegura que la funcion solo se ejecute una vez
func init()  {
	once.Do(func(){
		instance = createConn()
	})
}

// La estructura es como la clss, no podemos intanciarla, para potegerla la dejamos con minuscula , osea no exportada.
type connect struct{
	name string 
	count int
}

func createConn() *connect{
	return &connect{"Mi conexion,0"}
}

// GetIntance devuelve una instancia de la conexion
func GetIntance() *connect  {
	return instance
}

// Increment aumenta el contador 
func (i *connect) Increment() {
	i.count++
}

// Decrement diminuye el contador 
func (i *connect) Decrement() {
	if i.count > 0{
		i.count--
	}
}

func (i*connect) GetName() string  {
	return i.name
}

func (i*connect) SetName(n string)  {
	i.name = n
}


func (i *connect) GetCount() int {
	return i.count
}

package main 

type WordIterator struct {
	TheWord *Word
	Position int
}



func (wi *WordIterator) First(){
	wi.Position = 0
}

func (wi *WordIterator) Next() interface{}{
	/* Para evitar el codigo engorrose como el que esta comentado abajo se pude usar */
	defer func(){
		wi.Position++
	}()

	switch wi.Position{
	case 0:
		// wi.Position++
		return wi.TheWord.Word1
	case 1:
		// wi.Position++
		return wi.TheWord.Word2
	case 2:
		// wi.Position++
		return wi.TheWord.Word3
	case 3:
		// wi.Position++
		return wi.TheWord.Word4
	default:
		fmt.Println("no existe esa posicion esta estructura")
	}
	return nil
}

func (wi *WordIterator)HasMore() bool{
	if wi.Position < 4{
		return true
	}
	return false 
}

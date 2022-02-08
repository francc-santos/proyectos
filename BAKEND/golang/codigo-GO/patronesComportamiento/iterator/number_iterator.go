package main

type NumberIterator struct{
	TheNumber *Number //array dinamico de numeros
	Position int
}

func (ni *NumberIterator) First(){
	ni.Position = 0
}

func (ni.*NumberIterator) Next() interface{}{
	r := ni.TheNumber.Numbers[ni.Position]
	ni.Position++
	return r
}

func (ni *NumberIterator)HasMore() bool{
	if ni.Position < len(ni.TheNumber.Numbers){
		return true
	}
	return false 
}


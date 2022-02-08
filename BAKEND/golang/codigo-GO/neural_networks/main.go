package main

import "github.com/leosykes117/neuronal_networks/hopfieldnetwork"

type arrayFlags []string

func (i *arrayFlags) String() string {
	return "my string representation"
}

func (i *arrayFlags) Set(value string) error {
	*i = append(*i, value)
	return nil
}

func main() {
	/* var patterns, tests arrayFlags
	flag.Var(&patterns, "pattern", "Some description for this param.")
	flag.Var(&tests, "test", "Some description for this param.")
	flag.Parse()

	imagehopfield.Start(patterns, tests) */

	//lamnetwork.Start()
	hopfieldnetwork.InitNetwork()
}

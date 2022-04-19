package models

type Family struct {
	Name string `json:"name"`
	Total int `json:"total"`
}

type Element struct {
	AtomicNumber int `json:"atomicNumber"`
	Name string `json:"name"`
	Symbol string `json:"symbol"`
	Family Family `json:"family"`
	Group int `json:"group"`
	Period int `json:"period"`
	Block string `json:"block"`
	// Origin
	// Phase
}

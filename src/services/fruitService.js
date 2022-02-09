const fruitService = {
  all: async () => {
    let res = await fetch("http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json")
    if (res) {
      const data = await res.json()
      if (data.length)
        return data
    }
    return []
  },
  findOneByName: async (name) => {
    let res = await fetch("http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json")
    if (res) {
      const data = await res.json()
      if (data.length)
        return data.find(row => row.name === name)
    }
    return null
  }
}

export default fruitService;
function list(names){
  return names.map(person => person.name).join(', ').replace(/,([^,]*)$/, ' &$1')
}
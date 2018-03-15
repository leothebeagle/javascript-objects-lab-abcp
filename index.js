var recipes = { tomatoes: "1 large can", garlic: "1 clove"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  return delete newObj.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObj = object
  return delete object.key
}

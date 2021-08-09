## Purpose
To save data to and retrieve data from localstorage

## Arguments
key: string
defaultValue: any
{ serialize = JSON.stringify, deserialize = JSON.parse }: { Function, Function }

### key
A generic string representing the key pointing to the data in localstorage
### defaultValue
Any value we want to set as our default in localstorage, this could be a String,
an Array, a Function or an Object
### { serialize , deserialize }
Two methods with the JSON object methods stringify and deserialize as defaults

## Returns 
[ value, setValue ]